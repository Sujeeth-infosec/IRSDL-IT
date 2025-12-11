import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { LucideIcon } from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  image?: string;
}

interface ExpandableServiceCardsProps {
  services: ServiceCard[];
}

export default function ExpandableServiceCards({ services }: ExpandableServiceCardsProps) {
  const [active, setActive] = useState<ServiceCard | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 h-full w-full z-[100]"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[101] p-4">
            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="w-full max-w-3xl max-h-[90vh] flex flex-col bg-card border border-border rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="overflow-y-auto">
                {active.image && (
                  <motion.div layoutId={`image-${active.id}-${id}`}>
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                )}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <active.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <motion.h3
                          layoutId={`title-${active.id}-${id}`}
                          className="font-display text-3xl font-bold text-foreground"
                        >
                          {active.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`subtitle-${active.id}-${id}`}
                          className="text-primary font-medium mt-1"
                        >
                          {active.subtitle}
                        </motion.p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActive(null)}
                      className="w-8 h-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors flex-shrink-0"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8">{active.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display font-semibold text-foreground text-lg mb-4">Features & Capabilities</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {active.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-display font-semibold text-foreground text-lg mb-4">Key Benefits</h4>
                      <ul className="space-y-3">
                        {active.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid lg:grid-cols-2 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              layoutId={`card-${service.id}-${id}`}
              key={service.id}
              onClick={() => setActive(service)}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer"
            >
              {service.image && (
                <motion.div layoutId={`image-${service.id}-${id}`} className="mb-6 -mx-8 -mt-8">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                </motion.div>
              )}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <motion.h3
                    layoutId={`title-${service.id}-${id}`}
                    className="font-display text-2xl font-bold text-foreground"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`subtitle-${service.id}-${id}`}
                    className="text-sm text-primary font-medium mt-1"
                  >
                    {service.subtitle}
                  </motion.p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{service.description}</p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-3 text-muted-foreground">
                    What We Provide
                  </h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-sm text-primary font-medium group-hover:underline">
                Click to view more →
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
