import { useState } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import { ChevronDown, Phone, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface MobileNavProps {
  onClose: () => void;
}

export function MobileNav({ onClose }: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Link to="/" onClick={onClose} className="flex items-center gap-2">
          <img 
            src="/IRSDL LOGO-01.png" 
            alt="IRSDL Logo" 
            className="h-12 w-auto"
          />
        </Link>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
          <CollapsibleTrigger className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary text-foreground font-medium">
            Services
            <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 mt-2 space-y-1">
            {Object.entries(servicesData).map(([key, data]) => {
              const Icon = data.icon;
              return (
                <Link
                  key={key}
                  to={`/services#${key}`}
                  onClick={onClose}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {data.title}
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        <Link
          to="/industries"
          onClick={onClose}
          className="block p-3 rounded-lg hover:bg-secondary text-foreground font-medium"
        >
          Industries
        </Link>
        <Link
          to="/case-studies"
          onClick={onClose}
          className="block p-3 rounded-lg hover:bg-secondary text-foreground font-medium"
        >
          Work
        </Link>
        <Link
          to="/about"
          onClick={onClose}
          className="block p-3 rounded-lg hover:bg-secondary text-foreground font-medium"
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={onClose}
          className="block p-3 rounded-lg hover:bg-secondary text-foreground font-medium"
        >
          Contact
        </Link>
      </nav>

      {/* CTA Buttons */}
      <div className="p-4 border-t border-border space-y-3">
        <Button variant="outline" className="w-full gap-2">
          <Phone className="w-4 h-4" />
          Book A Call
        </Button>
        <Button className="w-full gap-2">
          <Mail className="w-4 h-4" />
          Contact Us
        </Button>
      </div>
    </div>
  );
}
