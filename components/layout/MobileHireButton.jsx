import Button from "@/components/ui/Button";

export default function MobileHireButton() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 md:hidden">
      <Button href="#contact" variant="primary" className="shadow-lg">
        Hire Me
      </Button>
    </div>
  );
}