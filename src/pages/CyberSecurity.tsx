import { Link } from "react-router-dom";
import { Shield, Code, Cloud, Lock, AlertCircle, Zap, BookOpen, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import ExpandableServiceCards from "@/components/ui/expandable-service-cards";

const services = [
  {
    id: "vapt",
    title: "VAPT",
    subtitle: "Vulnerability Assessment & Penetration Testing",
    description: "Comprehensive security testing to identify and exploit vulnerabilities in your systems before attackers do.",
    icon: Shield,
    features: [
      "Network vulnerability scanning",
      "Application penetration testing",
      "Web application security testing",
      "Wireless security assessment",
      "Social engineering assessment",
      "Detailed reporting and remediation guidance"
    ],
    benefits: [
      "Identify security weaknesses before they're exploited",
      "Reduce risk of data breaches",
      "Meet compliance requirements",
      "Improve overall security posture",
      "Gain actionable security insights"
    ]
  },
  {
    id: "code-review",
    title: "Code Review",
    subtitle: "Security-focused Code Analysis",
    description: "In-depth analysis of your codebase to identify security vulnerabilities, weak patterns, and best practice violations.",
    icon: Code,
    features: [
      "Source code security analysis",
      "OWASP vulnerability detection",
      "Secure coding practices review",
      "Dependency vulnerability scanning",
      "Architecture review",
      "Custom security policy validation"
    ],
    benefits: [
      "Catch vulnerabilities during development",
      "Reduce technical debt",
      "Improve code quality and maintainability",
      "Ensure compliance with security standards",
      "Train developers on secure coding"
    ]
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    subtitle: "Secure Your Cloud Infrastructure",
    description: "Protect your cloud resources with comprehensive security assessments and hardening strategies.",
    icon: Cloud,
    features: [
      "Cloud infrastructure assessment (AWS, Azure, GCP)",
      "IAM and access control review",
      "Data encryption verification",
      "Network security configuration",
      "Cloud compliance assessment",
      "Continuous monitoring setup"
    ],
    benefits: [
      "Secure multi-cloud environments",
      "Prevent cloud-native attacks",
      "Optimize security costs",
      "Ensure regulatory compliance",
      "Implement zero-trust architecture"
    ]
  },
  {
    id: "devsecops",
    title: "DevSecOps",
    subtitle: "Security Integrated into DevOps",
    description: "Embed security practices throughout your development and deployment pipeline for continuous protection.",
    icon: Lock,
    features: [
      "CI/CD pipeline security",
      "Infrastructure as code security",
      "Container security",
      "Secret management",
      "Automated security testing",
      "Security policy enforcement"
    ],
    benefits: [
      "Detect vulnerabilities early in the pipeline",
      "Reduce time-to-fix security issues",
      "Automate security compliance",
      "Enable faster, safer deployments",
      "Shift security left"
    ]
  },
  {
    id: "compliance-audits",
    title: "Compliance Audits",
    subtitle: "Meet Regulatory Requirements",
    description: "Ensure your organization meets industry standards and regulatory requirements with comprehensive compliance audits.",
    icon: CheckCircle,
    features: [
      "GDPR compliance assessment",
      "ISO 27001 compliance review",
      "PCI-DSS audit",
      "HIPAA compliance verification",
      "SOC 2 readiness assessment",
      "Internal control evaluation"
    ],
    benefits: [
      "Achieve and maintain compliance",
      "Reduce audit preparation time",
      "Avoid regulatory penalties",
      "Build customer trust",
      "Document security controls"
    ]
  },
  {
    id: "threat-modeling",
    title: "Threat Modelling",
    subtitle: "Identify Potential Threats",
    description: "Proactively identify and analyze potential threats to your systems before they become security incidents.",
    icon: AlertCircle,
    features: [
      "Threat identification and analysis",
      "Attack surface mapping",
      "Risk prioritization",
      "Mitigation strategy development",
      "Architecture threat review",
      "Incident scenario planning"
    ],
    benefits: [
      "Understand potential attack vectors",
      "Prioritize security investments",
      "Develop effective defense strategies",
      "Reduce security blind spots",
      "Improve incident preparedness"
    ]
  },
  {
    id: "incident-response",
    title: "Incident Response",
    subtitle: "Rapid Response to Security Incidents",
    description: "Expert response to security incidents with minimal downtime and maximum damage control.",
    icon: Zap,
    features: [
      "24/7 incident response team",
      "Rapid containment and isolation",
      "Forensic investigation",
      "Root cause analysis",
      "Recovery assistance",
      "Incident reporting and documentation"
    ],
    benefits: [
      "Minimize breach impact",
      "Reduce incident response time",
      "Preserve evidence for investigation",
      "Ensure legal compliance",
      "Restore operations quickly"
    ]
  },
  {
    id: "security-training",
    title: "Security Training",
    subtitle: "Educate Your Team on Security",
    description: "Empower your team with security knowledge and best practices to become your first line of defense.",
    icon: BookOpen,
    features: [
      "Security awareness training",
      "Secure coding workshops",
      "Phishing and social engineering training",
      "Incident response drills",
      "Compliance training",
      "Custom security curriculum"
    ],
    benefits: [
      "Reduce human security errors",
      "Build security culture",
      "Improve threat awareness",
      "Ensure regulatory compliance",
      "Empower employees as security advocates"
    ]
  }
];

const whyChooseUs = [
  "Expert team with certified security professionals",
  "Industry-leading tools and methodologies",
  "Comprehensive reporting and actionable insights",
  "Continuous support and remediation guidance",
  "Proven track record across industries",
  "Customized approaches for your unique needs"
];

export default function CyberSecurity() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Comprehensive Cyber Security Services
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Protect Your <span className="text-gradient">Digital Assets</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              From vulnerability assessments to incident response, we provide comprehensive cyber security solutions to protect your organization from evolving threats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Get Security Assessment <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Expandable Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Services"
            title="Complete Cyber Security Solutions"
            description="Click on any service to explore detailed information"
          />

          <ExpandableServiceCards services={services} />
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Deep Dive"
            title="Service Details"
            description="Explore each service in detail"
          />

          <div className="space-y-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-3xl font-bold text-foreground">{service.title}</h3>
                        <p className="text-primary font-medium">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-display font-semibold text-foreground mb-4">Features & Capabilities</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-display font-semibold text-foreground mb-4">Benefits</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <Icon className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                      <p className="text-muted-foreground">{service.title} Visualization</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Why Choose Us"
            title="Your Trusted Security Partner"
            description="We combine expertise with cutting-edge tools and methodologies"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason) => (
              <div key={reason} className="flex items-start gap-4 p-6 rounded-xl bg-secondary/50">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            description="Our proven methodology ensures comprehensive security coverage"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Assessment", description: "Understand your environment and security needs" },
              { step: "2", title: "Planning", description: "Develop a customized security roadmap" },
              { step: "3", title: "Execution", description: "Implement comprehensive security measures" },
              { step: "4", title: "Monitoring", description: "Continuous monitoring and improvement" }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/placeholder.svg')" }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Start with a comprehensive security assessment. Our experts will identify vulnerabilities and create a roadmap for improvement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
