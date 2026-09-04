"use client";

import { useState } from "react";
import { Link2, Mail, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Contact() {
    const [status, setStatus] = useState("idle");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");

        const form = e.target;
        const data = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                setStatus("sent");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="bg-mist/40 py-20">
            <div className="mx-auto max-w-4xl px-6">
                <SectionHeading
                    eyebrow="Contact"
                    title="Let's work together"
                    description="Open to remote VA roles — remote-friendly and comfortable working across time zones. Send a message below, or reach out directly if you prefer."
                />

                <form onSubmit={handleSubmit} className="mt-10 grid gap-5">
                    <div className="grid gap-5 md:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-ink/80">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your full name"
                                required
                                className="mt-1 w-full rounded-lg border border-mist bg-white px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-ink/80">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="abc@xyz.com"
                                required
                                className="mt-1 w-full rounded-lg border border-mist bg-white px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                            />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-ink/80">
                                Company / Firm
                            </label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                placeholder="Your company or firm name"
                                required
                                className="mt-1 w-full rounded-lg border border-mist bg-white px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-ink/80">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Tell me about the role, project, or support you need..."
                            required
                            className="mt-1 w-full rounded-lg border border-mist bg-white px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Button type="submit" variant="primary" disabled={status === "sending"}>
                            {status === "sending" ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </Button>

                        {status === "sent" && (
                            <p className="text-sm text-green-600">
                                Thanks — your message has been sent!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-sm text-red-600">
                                Something went wrong. Please try the direct email below instead.
                            </p>
                        )}
                    </div>
                </form>

                <div className="mt-10 flex flex-col gap-4 border-t border-mist pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-ink/60">
                        Prefer to reach out directly? Use whichever works best for you:
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://https://www.linkedin.com/in/erhuvwuveguono-ofuoma-588167404/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                        >
                            <Link2 size={16} />
                            LinkedIn
                        </a>
                        <a
                            href="mailto:erhuvwuofuoma@gmail.com"
                            className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                        >
                            <Mail size={16} />
                            erhuvwuofuoma@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
