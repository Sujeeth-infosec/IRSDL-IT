import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SEOHead } from "@/components/SEOHead";
import { SocialShare } from "@/components/SocialShare";
import { servicesData, testimonials, caseStudies, technologies } from "@/data/servicesData";
import { trackEvent } from "@/components/Analytics";

// Removed site statistics (project/client/retention numbers) per request

const whyChooseUs = [
  "Expert team with deep technical knowledge",
  "Agile methodology for faster delivery",
  "24/7 support and maintenance",
  "Transparent communication",
  "Scalable and secure solutions",
  "Industry-leading best practices",
];

export default function Home() {
  const handleCTAClick = (action: string) => {
    trackEvent('click', 'CTA', action);
  };

  return (
    <main className="pt-16 lg:pt-20">
      <SEOHead 
        title="IRSDL IT - Professional IT Services & Digital Solutions"
        description="Leading IT services company providing cybersecurity, AI/ML, cloud engineering, and digital transformation solutions for businesses worldwide."
        keywords="IT services, cybersecurity, AI ML, cloud engineering, digital transformation, web development"
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Trusted badge removed */}
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your Business with{" "}
                <span className="text-gradient">Innovative Technology</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                We deliver cutting-edge solutions in Cyber Security, AI/ML, Cloud Engineering, and Digital Transformation to accelerate your growth.
              </p>
              
              <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary pl-4">
                "To improve is to change, To be perfect is to have changed often"
              </blockquote>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <InteractiveHoverButton 
                  text="Get Started" 
                  className="w-40 h-12" 
                  onClick={() => handleCTAClick('Get Started')}
                />
              </div>
              
              <div className="pt-4">
                <SocialShare 
                  title="IRSDL IT - Professional IT Services"
                  description="Transform your business with innovative technology solutions"
                  className="justify-start"
                />
              </div>
              
              {/* Hero stats removed */}
            </div>
            
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 animate-float">
                <div className="w-full h-full rounded-2xl bg-card border border-border shadow-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🚀</span>
                    </div>
                    <p className="font-display font-semibold text-foreground">Innovation Hub</p>
                    <p className="text-sm text-muted-foreground mt-2">Where ideas become reality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Services"
            title="Comprehensive Technology Solutions"
            description="From cybersecurity to AI, we offer end-to-end services to drive your digital transformation"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(servicesData).slice(0, 8).map(([key, data]) => (
              <ServiceCard
                key={key}
                title={data.title}
                description={data.description}
                icon={data.icon}
                href={`/services#${key}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services" className="gap-2">
                View All Services <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Why Choose Us"
                title="Your Trusted Technology Partner"
                description="We combine technical expertise with business acumen to deliver solutions that drive real results"
                centered={false}
              />
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild size="lg" className="mt-8">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            {/* Stats cards removed */}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Technologies"
            title="Technologies We Master"
            description="We leverage the latest technologies to build robust, scalable solutions"
          />
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all cursor-default"
              >
                <span className="font-medium text-foreground">{tech.name}</span>
                <span className="text-xs text-muted-foreground ml-2">({tech.category})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Work"
            title="Case Studies"
            description="Explore how we've helped businesses achieve their goals"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/case-studies" className="gap-2">
                View All Case Studies <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your technology goals. Get in touch with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" onClick={() => handleCTAClick('Contact Us')}>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => handleCTAClick('View Our Work')}>
              <Link to="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
