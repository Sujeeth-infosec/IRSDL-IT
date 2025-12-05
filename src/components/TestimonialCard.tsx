import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export function TestimonialCard({ name, role, content, avatar }: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all">
      <Quote className="w-10 h-10 text-primary/20 mb-4" />
      <p className="text-muted-foreground mb-6">{content}</p>
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full bg-secondary object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
