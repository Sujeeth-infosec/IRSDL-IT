import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle } from "lucide-react";

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            badge="Our Services"
            title="Comprehensive Technology Solutions"
            description="We offer end-to-end services across the technology spectrum to help businesses thrive in the digital age"
          />
        </div>
      </section>

      {/* Services Sections */}
      {Object.entries(servicesData).map(([key, data], index) => {
        const Icon = data.icon;
        const isEven = index % 2 === 0;

        return (
          <section
            key={key}
            id={key}
            className={`py-24 ${isEven ? "bg-background" : "bg-secondary/30"}`}
          >
            <div className="container mx-auto px-4">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                <div className={!isEven ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {data.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8">{data.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {data.services.map((service) => (
                      <div
                        key={service.name}
                        className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">{service.name}</p>
                            <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${!isEven ? "lg:order-1" : ""}`}>
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                    <div className="w-full h-full rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center">
                      <Icon className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
