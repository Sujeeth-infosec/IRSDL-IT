import { Link } from "react-router-dom";
import { Building2, GraduationCap, Trophy, ShoppingBag, Banknote, Home, Dumbbell, ChevronRight } from "lucide-react";

const industriesData = {
  "Industries We Serve": [
    { name: "Healthcare", icon: Building2, description: "Medical technology solutions" },
    { name: "Education", icon: GraduationCap, description: "Educational platform development" },
    { name: "Sports", icon: Trophy, description: "Sports analytics and platforms" },
    { name: "Retail", icon: ShoppingBag, description: "E-commerce and retail solutions" },
    { name: "Finance", icon: Banknote, description: "Financial technology services" },
    { name: "Real Estate", icon: Home, description: "Property management systems" },
    { name: "Fitness", icon: Dumbbell, description: "Health and fitness applications" },
  ],
  "Business Focus": [
    { name: "Startup Solutions", description: "Agile development for startups" },
    { name: "Enterprise Solutions", description: "Large-scale business systems" },
    { name: "Product Discovery", description: "Market research and validation" },
    { name: "Product Prototyping", description: "Rapid prototype development" },
    { name: "Product Development", description: "Full product lifecycle" },
    { name: "MVP Development", description: "Minimum viable products" },
    { name: "Dedicated Team", description: "Extended development teams" },
  ],
  "Growth-driven Solutions": [
    { name: "CRM Development", description: "Customer relationship management" },
    { name: "Web Portal Development", description: "Custom web portals" },
    { name: "CMS Development", description: "Content management systems" },
    { name: "ERP Development", description: "Enterprise resource planning" },
    { name: "On-demand Solutions", description: "Real-time service platforms" },
  ]
};

export function IndustriesMegaMenu() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1200px] bg-card border border-border rounded-xl shadow-xl mt-2 animate-fade-in overflow-hidden">
      <div className="p-6">
        <div className="grid grid-cols-4 gap-8">
          {Object.entries(industriesData).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-display font-semibold text-foreground mb-4">{category}</h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <Link
                    key={item.name}
                    to={`/industries#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group block p-2 rounded-lg hover:bg-secondary transition-all"
                  >
                    <div className="flex items-start gap-2">
                      {item.icon && <item.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />}
                      <div>
                        <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-foreground">Our Partnerships</h4>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Google Cloud</p>
                  <p className="text-xs text-muted-foreground">Partner</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-lg">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AWS</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">partner</p>
                  <p className="text-xs text-muted-foreground">network</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-lg">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">D</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">databricks</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Link
                to="/contact"
                className="block w-full bg-primary text-primary-foreground px-4 py-3 rounded-full font-medium text-center hover:bg-primary/90 transition-colors"
              >
                Consult Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}