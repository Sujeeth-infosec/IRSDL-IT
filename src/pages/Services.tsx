import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Services() {
  const location = useLocation();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  useEffect(() => {
    if (location.hash) {
      const serviceKey = location.hash.slice(1);
      setExpandedService(serviceKey);
      const element = document.getElementById(serviceKey);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  const toggleService = (key: string) => {
    setExpandedService(expandedService === key ? null : key);
  };

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

      {/* Expandable Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(servicesData).map(([key, data]) => {
              const Icon = data.icon;
              const isExpanded = expandedService === key;

              return (
                <div
                  key={key}
                  id={key}
                  className="flex flex-col"
                >
                  {/* Service Card Header */}
                  <motion.div
                    onClick={() => toggleService(key)}
                    className={cn(
                      "cursor-pointer rounded-2xl border-2 transition-all duration-300",
                      "bg-card hover:shadow-xl",
                      isExpanded
                        ? "border-primary shadow-lg shadow-primary/20"
                        : "border-border hover:border-primary/50"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={cn(
                              "w-14 h-14 rounded-xl flex items-center justify-center transition-colors",
                              isExpanded
                                ? "bg-primary text-primary-foreground"
                                : "bg-primary/10 text-primary"
                            )}
                          >
                            <Icon className="w-7 h-7" />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-bold text-foreground">
                              {data.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {data.services.length} services
                            </p>
                          </div>
                        </div>
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                            isExpanded
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-4 text-sm line-clamp-2">
                        {data.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-3">
                          {data.services.map((service, idx) => (
                            <motion.div
                              key={service.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 hover:bg-secondary transition-all"
                            >
                              <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="font-medium text-foreground text-sm">
                                    {service.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
