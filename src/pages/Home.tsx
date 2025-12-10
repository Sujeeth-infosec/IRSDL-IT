import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Play, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ServicesTabbed } from "@/components/ServicesTabbed";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SEOHead } from "@/components/SEOHead";
import { SocialShare } from "@/components/SocialShare";
import { servicesData, testimonials, caseStudies, technologies } from "@/data/servicesData";
import { trackEvent } from "@/components/Analytics";
import { TechOrbitDisplay } from "@/components/ui/tech-orbit-display";


// Removed site statistics (project/client/retention numbers) per request

const whyChooseUs = [
  "Expert team with deep technical knowledge",
  "Agile methodology for faster delivery",
  "24/7 support and maintenance",
  "Transparent communication",
  "Scalable and secure solutions",
  "Industry-leading best practices",
];

const techIcons = [
  {
    component: () => (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
        alt="React" 
        className="w-8 h-8"
      />
    ),
    className: 'size-[40px] border-none bg-transparent',
    duration: 20,
    delay: 0,
    radius: 80,
    path: true,
    reverse: false,
  },
  {
    component: () => (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
        alt="Node.js" 
        className="w-8 h-8"
      />
    ),
    className: 'size-[40px] border-none bg-transparent',
    duration: 20,
    delay: 10,
    radius: 80,
    path: true,
    reverse: false,
  },
  {
    component: () => (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
        alt="Python" 
        className="w-10 h-10"
      />
    ),
    className: 'size-[50px] border-none bg-transparent',
    radius: 140,
    duration: 25,
    delay: 0,
    path: true,
    reverse: false,
  },
  {
    component: () => (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" 
        alt="AWS" 
        className="w-10 h-10"
      />
    ),
    className: 'size-[50px] border-none bg-transparent',
    radius: 140,
    duration: 25,
    delay: 12,
    path: true,
    reverse: false,
  },
  {
    component: () => (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" 
        alt="Docker" 
        className="w-8 h-8"
      />
    ),
    className: 'size-[40px] border-none bg-transparent',
    duration: 30,
    delay: 5,
    radius: 200,
    path: true,
    reverse: true,
  },
  {
    component: () => (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" 
        alt="Kubernetes" 
        className="w-8 h-8"
      />
    ),
    className: 'size-[40px] border-none bg-transparent',
    duration: 30,
    delay: 15,
    radius: 200,
    path: true,
    reverse: true,
  },
  {
    component: () => (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
        alt="JavaScript" 
        className="w-8 h-8"
      />
    ),
    className: 'size-[40px] border-none bg-transparent',
    duration: 35,
    delay: 8,
    radius: 260,
    path: true,
    reverse: false,
  },
  {
    component: () => (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" 
        alt="Java" 
        className="w-8 h-8"
      />
    ),
    className: 'size-[40px] border-none bg-transparent',
    duration: 35,
    delay: 20,
    radius: 260,
    path: true,
    reverse: false,
  },
  {
    component: () => (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
        alt="Next.js" 
        className="w-8 h-8"
      />
    ),
    className: 'size-[40px] border-none bg-transparent',
    duration: 40,
    delay: 10,
    radius: 320,
    path: true,
    reverse: true,
  },
  {
    component: () => (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
        alt="PostgreSQL" 
        className="w-8 h-8"
      />
    ),
    className: 'size-[40px] border-none bg-transparent',
    duration: 40,
    delay: 25,
    radius: 320,
    path: true,
    reverse: true,
  },
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
      <WavyBackground 
        className="max-w-6xl mx-auto"
        containerClassName="min-h-[90vh]"
        colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
        waveWidth={50}
        backgroundFill="#ffffff"
        blur={10}
        speed="slow"
        waveOpacity={0.3}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <EncryptedText
                  text="Transform Your Business with "
                  encryptedClassName="text-neutral-500"
                  revealedClassName="text-[rgb(38,18,111)]"
                  revealDelayMs={30}
                />
                <span>
                  <EncryptedText
                    text="Innovative Technology"
                    encryptedClassName="text-neutral-500"
                    revealedClassName="text-[rgb(107,87,249)]"
                    revealDelayMs={30}
                  />
                </span>
              </h1>
              

              
              <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary pl-4">
                "To improve is to change, To be perfect is to have changed often"
              </blockquote>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <LiquidButton 
                  size="xl"
                  onClick={() => handleCTAClick('Get Started')}
                >
                  Get Started
                </LiquidButton>
              </div>
              
              <div className="pt-4">
                <SocialShare 
                  title="IRSDL IT - Professional IT Services"
                  description="Transform your business with innovative technology solutions"
                  className="justify-start"
                />
              </div>
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
      </WavyBackground>

      {/* Services Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Services"
            title="Comprehensive Technology Solutions"
            description="From cybersecurity to AI, we offer end-to-end services to drive your digital transformation"
          />
          
          <ServicesTabbed />
          
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
      <section className="py-24 bg-secondary/30">
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
          
          <TechOrbitDisplay iconsArray={techIcons} />
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" style={{backgroundColor: '#5B5BD6'}}>
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your technology goals. Get in touch with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ContactForm>
              <Button size="lg" variant="secondary" onClick={() => handleCTAClick('Contact Us')}>
                Contact Us
              </Button>
            </ContactForm>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => handleCTAClick('View Our Work')}>
              <Link to="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
