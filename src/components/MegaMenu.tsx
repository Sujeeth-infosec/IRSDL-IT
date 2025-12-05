import { useState } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import { ChevronRight } from "lucide-react";

const categories = Object.keys(servicesData) as (keyof typeof servicesData)[];

export function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof servicesData>("cyber-security");
  const activeData = servicesData[activeCategory];
  const Icon = activeData.icon;

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-card border border-border rounded-xl shadow-xl mt-2 animate-fade-in overflow-hidden">
      <div className="flex">
        {/* Left Side - Category Tabs */}
        <div className="w-64 bg-secondary/50 border-r border-border p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-3">
            Our Services
          </p>
          <nav className="space-y-1">
            {categories.map((category) => {
              const data = servicesData[category];
              const CategoryIcon = data.icon;
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onMouseEnter={() => setActiveCategory(category)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <CategoryIcon className="w-4 h-4" />
                  {data.title}
                  {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Side - Services Grid */}
        <div className="flex-1 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">{activeData.title}</h3>
              <p className="text-sm text-muted-foreground">{activeData.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {activeData.services.map((service) => (
              <Link
                key={service.name}
                to={`/services#${activeCategory}`}
                className="group p-3 rounded-lg hover:bg-secondary transition-all"
              >
                <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{service.description}</p>
              </Link>
            ))}
          </div>

          {/* Partners Section */}
          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Our Partners
            </p>
            <div className="flex items-center gap-4">
              {["Google Cloud", "AWS", "Azure", "Databricks"].map((partner) => (
                <div
                  key={partner}
                  className="px-4 py-2 bg-secondary rounded-lg text-xs font-medium text-muted-foreground"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
