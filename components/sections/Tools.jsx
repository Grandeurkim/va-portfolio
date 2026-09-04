import SectionHeading from "@/components/ui/SectionHeading";
import ToolsGrid from "@/components/ToolsGrid";

export default function Tools() {
  return (
    <section id="tools" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tools I Use"
          eyebrowClassName="text-2xl font-bold text-accent"
          title="The systems behind my day-to-day work"
          description="I rely on practical, reliable platforms to keep operations organized, responsive, and easy to scale."
        />

        <div className="mt-10">
          <ToolsGrid />
        </div>
      </div>
    </section>
  );
}