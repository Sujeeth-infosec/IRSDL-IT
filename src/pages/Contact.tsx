import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@nexatech.com", href: "mailto:hello@nexatech.com" },
  { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: MapPin, label: "Address", value: "123 Tech Park, San Francisco, CA 94107" },
  { icon: Clock, label: "Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
];

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            badge="Contact Us"
            title="Let's Start a Conversation"
            description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.label} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a href={info.href} className="font-medium text-foreground hover:text-primary transition-colors">
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl bg-secondary overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Google Map Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Prefer to Schedule a Call?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Book a free consultation with our experts to discuss your project requirements.
          </p>
          <Button size="lg" variant="secondary">
            Book A Call
          </Button>
        </div>
      </section>
    </main>
  );
}
