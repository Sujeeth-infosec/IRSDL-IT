import { SectionHeading } from "@/components/SectionHeading";
import { Target, Eye, Heart, Users, Award, Zap, Shield, Lightbulb } from "lucide-react";

const values = [
  { icon: Heart, title: "Client First", description: "Your success is our priority" },
  { icon: Shield, title: "Integrity", description: "Honest and transparent partnerships" },
  { icon: Zap, title: "Innovation", description: "Constantly pushing boundaries" },
  { icon: Users, title: "Collaboration", description: "Working together for results" },
];

const leadership = [
  { name: "John Smith", role: "CEO & Founder", image: "/placeholder.svg" },
  { name: "Sarah Johnson", role: "CTO", image: "/placeholder.svg" },
  { name: "Michael Chen", role: "VP Engineering", image: "/placeholder.svg" },
  { name: "Emily Davis", role: "VP Sales", image: "/placeholder.svg" },
];

const timeline = [
  { year: "2010", title: "Founded", description: "Started with a vision to transform businesses" },
  { year: "2015", title: "Global Expansion", description: "Opened offices in 5 countries" },
  { year: "2018", title: "AI Division", description: "Launched dedicated AI/ML practice" },
  { year: "2020", title: "Cloud Excellence", description: "Achieved AWS Premier Partner status" },
];

export default function About() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                We Build the Future of Technology
              </h1>
              <p className="text-lg text-muted-foreground">
                NexaTech is a leading technology solutions company dedicated to helping businesses navigate the digital landscape. With expertise spanning cybersecurity, AI/ML, cloud engineering, and digital transformation, we deliver innovative solutions that drive real results.
              </p>
            </div>
            <div className="aspect-video rounded-2xl bg-secondary overflow-hidden">
              <img src="/placeholder.svg" alt="About NexaTech" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-primary-foreground/80">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We strive to be the trusted partner that helps organizations navigate the complexities of digital transformation.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in technology consulting, recognized for our technical excellence, innovative solutions, and unwavering commitment to client success. We envision a world where technology empowers every business to achieve its full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            description="Our core values guide everything we do"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Leadership"
            title="Meet Our Team"
            description="The experienced professionals driving our success"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="group text-center">
                <div className="aspect-square rounded-2xl bg-secondary overflow-hidden mb-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">{person.name}</h3>
                <p className="text-sm text-muted-foreground">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Journey"
            title="Company Timeline"
            description="Key milestones in our growth story"
          />
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border inline-block">
                    <span className="text-sm font-medium text-primary">{item.year}</span>
                    <h3 className="font-display font-semibold text-foreground mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-primary relative z-10" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
