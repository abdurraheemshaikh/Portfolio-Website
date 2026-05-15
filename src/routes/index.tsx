import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";

import { Contact } from "@/components/sections/Contact";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — Full Stack & AI Engineer` },
      {
        name: "description",
        content:
          "Portfolio of Abdur Raheem Shaikh — Computer Science student at FAST NUCES building full-stack and AI-powered products: voice assistants, RAG search, and real-time computer vision.",
      },
      { property: "og:title", content: `${profile.name} — Full Stack & AI Engineer` },
      {
        property: "og:description",
        content:
          "CS student & engineer building AI-powered, full-stack products. View projects, experience, and get in touch.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Full Stack & AI Engineer",
          alumniOf: profile.education.school,
          email: `mailto:${profile.email}`,
          url: "/",
          sameAs: [profile.github, profile.linkedin],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
