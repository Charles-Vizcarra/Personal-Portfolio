import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CodeXml,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="page-shell min-h-screen pb-20 pt-28 sm:pt-36">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to projects
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">
              <Sparkles size={14} aria-hidden="true" />
              {project.category}
            </p>
            <h1 className="gradient-text mt-4 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              {project.title}
            </h1>
            {project.period && (
              <p className="mt-3 font-mono text-xs tracking-wide text-slate-500">
                {project.period}
              </p>
            )}
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="cosmic-button"
                >
                  <CodeXml size={16} aria-hidden="true" />
                  Source code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="quiet-button"
                >
                  {project.slug === "closed-open"
                    ? "Download the game"
                    : "Live demo"}{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
          <div className="surface-card overflow-hidden rounded-3xl p-2">
            <ProjectArtwork project={project} large />
          </div>
        </div>

        {project.gallery && (
          <section className="mt-14" aria-labelledby="project-gallery-heading">
            <div className="max-w-2xl">
              <p className="eyebrow">A closer look</p>
              <h2
                id="project-gallery-heading"
                className="gradient-text mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl"
              >
                {project.galleryTitle ?? "A closer look"}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                {project.galleryDescription ??
                  "A few moments from the project, from early concepts to the finished experience."}
              </p>
            </div>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {project.gallery.map((photo) => (
                <figure
                  key={photo.src}
                  className="surface-card overflow-hidden rounded-3xl p-3"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-950/60">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-slate-300">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="surface-card rounded-3xl p-6 sm:p-8">
            <p className="eyebrow">01 / Project overview</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {project.overview}
            </p>
          </article>
          <article className="surface-card rounded-3xl p-6 sm:p-8">
            <p className="eyebrow">02 / Highlights</p>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-300" />
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
          <article className="surface-card rounded-3xl p-6 sm:p-8">
            <p className="eyebrow">03 / My contribution</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {project.contribution}
            </p>
          </article>
          <article className="surface-card rounded-3xl p-6 sm:p-8">
            <p className="eyebrow">04 / Project links</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {project.github || project.demo
                ? "Explore the project using the available links above."
                : "Repository and live demo links were not listed in the resume."}
            </p>
          </article>
          {project.certificates?.map((certificate) => (
            <figure
              key={certificate.src}
              className="surface-card overflow-hidden rounded-3xl p-6 sm:p-8"
            >
              <figcaption className="eyebrow">
                05 / {certificate.title}
              </figcaption>
              <Image
                src={certificate.src}
                alt={certificate.alt}
                width={1684}
                height={1190}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mt-4 h-auto w-full rounded-2xl"
              />
            </figure>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
