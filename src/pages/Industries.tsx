import { SectionHeading } from "@/components/SectionHeading";
import { Activity, Building2, DollarSign, GraduationCap, Heart, ShoppingBag, Sprout, Trophy } from "lucide-react";

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Medical technology solutions",
    icon: Heart,
    details: "Innovative healthcare solutions including patient management systems, telemedicine platforms, and medical data analytics to improve patient care and operational efficiency."
  },
  {
    id: "education",
    title: "Education",
    description: "Educational platform development",
    icon: GraduationCap,
    details: "Comprehensive e-learning platforms, student management systems, and interactive educational tools that enhance learning experiences and administrative efficiency."
  },
  {
    id: "sports",
    title: "Sports",
    description: "Sports analytics and platforms",
    icon: Trophy,
    details: "Advanced sports analytics, performance tracking systems, and fan engagement platforms that revolutionize how sports organizations operate and connect with audiences."
  },
  {
    id: "retail",
    title: "Retail",
    description: "E-commerce and retail solutions",
    icon: ShoppingBag,
    details: "End-to-end e-commerce platforms, inventory management systems, and omnichannel retail solutions that drive sales and enhance customer experiences."
  },
  {
    id: "finance",
    title: "Finance",
    description: "Financial technology services",
    icon: DollarSign,
    details: "Secure fintech solutions including payment gateways, banking applications, investment platforms, and financial analytics tools that transform financial services."
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Property management systems",
    icon: Building2,
    details: "Comprehensive property management platforms, real estate marketplaces, and smart building solutions that streamline operations and enhance property value."
  },
  {
    id: "fitness",
    title: "Fitness",
    description: "Health and fitness applications",
    icon: Activity,
    details: "Cutting-edge fitness tracking apps, workout planning platforms, and wellness management systems that help users achieve their health goals."
  },
  {
    id: "agriculture",
    title: "Agriculture",
    description: "Smart farming and agritech solutions",
    icon: Sprout,
    details: "Modern agricultural technology solutions including farm management systems, crop monitoring platforms, and precision agriculture tools that optimize farming operations."
  }
];

export default function Industries() {
  return (
    <main className="pt-16 lg:pt-20">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Industries We Serve"
              title="Transforming Industries with Technology"
              description="Delivering tailored solutions across diverse sectors to drive innovation and growth"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.id}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-4">
                    {industry.description}
                  </p>
                  <p className="text-muted-foreground">
                    {industry.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
