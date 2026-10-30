"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";

type SubmissionState =
  | { status: "idle"; message: "" }
  | { status: "sending"; message: "" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmission({ status: "sending", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result: { message?: string } = await response.json();

      if (!response.ok) {
        setSubmission({
          status: "error",
          message: result.message ?? "Your message could not be sent. Please try again.",
        });
        return;
      }

      form.reset();
      setSubmission({
        status: "success",
        message: result.message ?? "Your message has been sent.",
      });
    } catch {
      setSubmission({
        status: "error",
        message: "We couldn’t reach the contact service. Please try again shortly.",
      });
    }
  }

  const isSending = submission.status === "sending";

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-medium text-slate-300">
          Your name
          <input
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            className="mt-2 block w-full rounded-xl border border-white/10 bg-[#080c1c]/80 px-4 py-3 text-sm text-white placeholder:text-slate-600"
            placeholder="Jane Doe"
          />
        </label>
        <label className="block text-xs font-medium text-slate-300">
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            className="mt-2 block w-full rounded-xl border border-white/10 bg-[#080c1c]/80 px-4 py-3 text-sm text-white placeholder:text-slate-600"
            placeholder="jane@example.com"
          />
        </label>
      </div>

      <label className="block text-xs font-medium text-slate-300">
        Subject
        <input
          name="subject"
          type="text"
          maxLength={150}
          required
          className="mt-2 block w-full rounded-xl border border-white/10 bg-[#080c1c]/80 px-4 py-3 text-sm text-white placeholder:text-slate-600"
          placeholder="What would you like to discuss?"
        />
      </label>

      <label className="block text-xs font-medium text-slate-300">
        Message
        <textarea
          name="message"
          rows={5}
          maxLength={5000}
          required
          className="mt-2 block w-full resize-y rounded-xl border border-white/10 bg-[#080c1c]/80 px-4 py-3 text-sm text-white placeholder:text-slate-600"
          placeholder="Share a little context..."
        />
      </label>

      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          className="cosmic-button disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={isSending}
        >
          {isSending ? (
            <>
              Sending <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />
            </>
          ) : submission.status === "success" ? (
            <>
              Sent <Check size={16} aria-hidden="true" />
            </>
          ) : (
            <>
              Send message <ArrowRight size={16} aria-hidden="true" />
            </>
          )}
        </button>
        <p
          className={`min-h-5 text-sm ${
            submission.status === "error"
              ? "text-rose-300"
              : submission.status === "success"
                ? "text-emerald-300"
                : "text-slate-500"
          }`}
          role="status"
          aria-live="polite"
        >
          {submission.message}
        </p>
      </div>
    </form>
  );
}
