import { Link } from "react-router-dom";
import { Shield, Code, Cloud, Lock, AlertCircle, Zap, BookOpen, ChevronRight } from "lucide-react";

const vaptServices = [
  { name: "VAPT", subtitle: "Vulnerability Assessment & Penetration Testing", icon: Shield },
  { name: "Code Review", subtitle: "Security-focused code analysis", icon: Code },
  { name: "Cloud Security", subtitle: "Secure your cloud infrastructure", icon: Cloud },
  { name: "DevSecOps", subtitle: "Security integrated into DevOps", icon: Lock },
  { name: "Compliance Audits", subtitle: "Meet regulatory requirements", icon: AlertCircle },
  { name: "Threat Modelling", subtitle: "Identify potential threats", icon: AlertCircle },
  { name: "Incident Response", subtitle: "Rapid response to security incidents", icon: Zap },
  { name: "Security Training", subtitle: "Educate your team on security", icon: BookOpen },
];

export function IndustriesMegaMenu() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-card border border-border rounded-xl shadow-xl mt-2 animate-fade-in overflow-hidden">
      <div className="p-6">
        <h3 className="font-display font-semibold text-foreground mb-6">Cyber Security Services</h3>
        <div className="grid grid-cols-2 gap-4">
          {vaptServices.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <Link
                key={service.name}
                to="/cyber-security"
                className="group p-4 rounded-lg hover:bg-primary/10 border border-border hover:border-primary transition-all flex items-start gap-3"
              >
                <ServiceIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{service.subtitle}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Our Partnerships
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-muted-foreground">Google Cloud Partner</span>
            <span className="text-xs font-medium text-muted-foreground">AWS Partner Network</span>
            <span className="text-xs font-medium text-muted-foreground">Databricks</span>
          </div>
        </div>
      </div>
    </div>
  );
}