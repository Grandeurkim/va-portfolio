import Button from "@/components/ui/Button";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28"
    >
      <div className="animate-hero-in">
        <p className="text-2xl font-medium text-accent">
          Customer Support · Administrative Support · Task &amp; Project Coordination
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
          General Virtual Assistant
        </h1>

        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/80">
          I help businesses and busy professionals stay organized, respond to
          customers, manage day-to-day tasks and keep work moving smoothly.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#projects" variant="primary">
            View My Work
            <ArrowRight size={16} />
          </Button>
          <Button href="#contact" variant="secondary">
            Let&apos;s Work Together
          </Button>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {["Remote-ready", "Detail-oriented", "Customer-focused", "Reliable"].map(
            (item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-ink/60"
              >
                <CheckCircle2 size={16} className="text-accent" />
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="animate-hero-in-delayed flex justify-center md:justify-end">
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white bg-mist shadow-lg md:h-80 md:w-80">
          
          <Image
  src="/images/projects/profile-placeholder.jpeg"
  alt="Ofuoma Erhuvwuveguono, General Virtual Assistant"
  fill
  sizes="(max-width: 768px) 256px, 320px"
  className="h-full w-full object-cover object-top"
/>
        </div>
      </div>
    </section>
  );
}