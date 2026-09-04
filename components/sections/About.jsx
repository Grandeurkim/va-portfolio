import {
  FolderKanban,
  MessageCircleHeart,
  ListChecks,
  Clock,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const strengths = [
  "Organization",
  "Communication",
  "Customer service",
  "Time management",
  "Attention to detail",
  "Problem solving",
  "Adaptability",
  "Confidentiality",
  "Remote collaboration",
];

const bringCards = [
  {
    icon: FolderKanban,
    title: "Stay Organized",
    description:
      "I help manage tasks, schedules, files and information so nothing important gets lost.",
  },
  {
    icon: MessageCircleHeart,
    title: "Keep Customers Happy",
    description:
      "I handle customer questions, complaints and follow-ups professionally.",
  },
  {
    icon: ListChecks,
    title: "Keep Work Moving",
    description:
      "I track tasks, deadlines and project activities using modern productivity tools.",
  },
  {
    icon: Clock,
    title: "Save You Time",
    description:
      "I take repetitive and administrative work off your plate so you can focus on higher-value activities.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          eyebrowClassName="text-2xl font-bold text-accent"
          title="A Virtual Assistant who brings order to your day"
        />

        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="max-w-prose text-lg leading-relaxed text-ink/80">
              I&apos;m a detail-oriented Virtual Assistant with experience
              supporting customers, managing administrative tasks and using
              digital tools to keep workflows organized. I enjoy turning
              scattered tasks into clear, manageable processes and making
              sure customers and teams receive timely support.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {strengths.map((strength) => (
                <li
                  key={strength}
                  className="rounded-full border border-navy/15 px-4 py-1.5 text-sm text-navy"
                >
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {bringCards.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-lg border border-mist bg-paper p-5"
              >
                <Icon size={22} className="text-accent" />
                <h3 className="mt-3 font-serif text-base font-semibold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}