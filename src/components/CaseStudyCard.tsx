import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export function CaseStudyCard({ title, category, description, image }: CaseStudyCardProps) {
  return (
    <Link
      to="/case-studies"
      className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all"
    >
      <div className="aspect-video bg-secondary relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <ArrowUpRight className="w-6 h-6 text-background" />
        </div>
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
          {category}
        </span>
        <h3 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
