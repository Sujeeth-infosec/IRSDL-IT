import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <Link to={href} className="block">
      <CardSpotlight className="h-80 w-full bg-black border-neutral-800">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-neutral-200 text-sm">{description}</p>
          <div className="flex items-center gap-2 text-sm font-medium text-blue-400">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </CardSpotlight>
    </Link>
  );
}
