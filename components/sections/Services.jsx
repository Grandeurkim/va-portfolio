import {
  ClipboardList,
  Headset,
  KanbanSquare,
  MonitorSmartphone,
  Check,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

const icons = [ClipboardList, Headset, KanbanSquare, MonitorSmartphone];

export default function Services() {
  return (
    <section id="services" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          eyebrowClassName="text-2xl font-bold text-accent"
          title="Where I can support your business"
          description="From day-to-day admin to customer follow-up and task tracking, here's the ground I cover."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map(({ title, items }, i) => {
            const Icon = icons[i];
            return (
              <div
                key={title}
                className="rounded-lg border border-mist bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy">
                    {title}
                  </h3>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}