type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function validateMessage(value: unknown): ContactMessage | null {
  if (!isRecord(value)) {
    return null;
  }

  const { name, email, subject, message, company } = value;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string" ||
    (company !== undefined && typeof company !== "string")
  ) {
    return null;
  }

  const trimmed = {
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
    company: typeof company === "string" ? company.trim() : "",
  };

  if (
    trimmed.name.length < 1 ||
    trimmed.name.length > 100 ||
    trimmed.subject.length < 1 ||
    trimmed.subject.length > 150 ||
    trimmed.message.length < 1 ||
    trimmed.message.length > 5000 ||
    trimmed.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)
  ) {
    return null;
  }

  return trimmed;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Please submit a valid message." }, { status: 400 });
  }

  const contact = validateMessage(body);
  if (!contact) {
    return Response.json(
      { message: "Check the form fields and try again." },
      { status: 400 },
    );
  }

  if (contact.company) {
    return Response.json({ message: "Your message has been sent." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return Response.json(
      {
        message:
          "The contact service is not configured yet. Please try another contact method later.",
      },
      { status: 503 },
    );
  }

  let providerResponse: Response;
  try {
    providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: contact.email,
        subject: `Portfolio contact: ${contact.subject}`,
        text: `From: ${contact.name} <${contact.email}>\n\n${contact.message}`,
      }),
    });
  } catch (error) {
    console.error("Contact email provider request failed.", error);
    return Response.json(
      { message: "The email service could not be reached. Please try again later." },
      { status: 502 },
    );
  }

  if (!providerResponse.ok) {
    const providerError = await providerResponse.text();
    console.error("Contact email provider rejected the request.", {
      status: providerResponse.status,
      response: providerError,
    });
    return Response.json(
      { message: "The message could not be delivered. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Thanks for reaching out. Your message is on its way." });
}
