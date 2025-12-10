import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle, Shield, Database, Brain, Cloud, Code, Smartphone } from "lucide-react";
import { Compare } from "@/components/ui/compare";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const stickyContent = [
  {
    title: "Discovery & Planning",
    description: "We start by understanding your business needs, challenges, and goals. Our team conducts thorough research and creates a comprehensive project roadmap tailored to your requirements.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white p-8">
        <div className="text-center">
          <Brain className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-bold">Strategic Planning</h3>
        </div>
      </div>
    ),
  },
  {
    title: "Design & Architecture",
    description: "Our expert architects design scalable, secure, and efficient solutions. We create detailed technical specifications and user experience designs that align with your business objectives.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white p-8">
        <div className="text-center">
          <Code className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-bold">System Architecture</h3>
        </div>
      </div>
    ),
  },
  {
    title: "Development & Implementation",
    description: "Using agile methodologies, our development teams build robust, high-quality solutions. We ensure continuous integration, testing, and deployment throughout the development lifecycle.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white p-8">
        <div className="text-center">
          <Smartphone className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-bold">Development</h3>
        </div>
      </div>
    ),
  },
  {
    title: "Testing & Deployment",
    description: "Comprehensive testing ensures your solution meets the highest quality standards. We handle secure deployment and provide ongoing support to ensure optimal performance.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white p-8">
        <div className="text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-bold">Quality Assurance</h3>
        </div>
      </div>
    ),
  },
];

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
            className={`py-24 ${!isEven ? "bg-background" : "bg-secondary/30"}`}
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

                <div className={`${!isEven ? "lg:order-1" : ""} flex justify-center`}>
                  <Compare
                    firstImage="https://assets.aceternity.com/code-problem.png"
                    secondImage="https://assets.aceternity.com/code-solution.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[400px] w-[400px] md:h-[500px] md:w-[500px]"
                    slideMode="hover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
