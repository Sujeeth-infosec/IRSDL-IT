import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Data Science Solutions",
    description: "Unlocking the potential of data, we deliver you expert data engineering, advanced analytics, NLP, and data intelligence solutions",
    icon: "📊"
  },
  {
    title: "Machine Learning Development", 
    description: "Leverage the power of machine learning and use your datasets to train your algorithms to deliver business insights, automation, and innovation",
    icon: "🤖"
  },
  {
    title: "Artificial Intelligence Development",
    description: "We utilize our experience working with AI to innovate your product, enhance business operations with automation, and make your business intelligent",
    icon: "🧠"
  },
  {
    title: "AI Integration",
    description: "Helping businesses to seamlessly integrate advanced AI capabilities (like predictive analytics and forecasting, workflow automation, conversational AI, and more) into their existing systems",
    icon: "🔗"
  },
  {
    title: "Computer Vision Development",
    description: "From image recognition to object detection with visual analytics, we tailor computer vision solutions catering to your unique business requirements",
    icon: "👁️"
  },
  {
    title: "Generative AI Solutions",
    description: "Our Generative AI team will help you build next-gen, custom Generative AI solutions like chatbots, finance robo-advisors, IT lifecycle project automation, and more",
    icon: "✨"
  }
];

export default function DataAI() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white text-sm font-medium">
                Data & AI
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Data Intelligence & Automation
              <ArrowUpRight className="inline-block w-8 h-8 ml-2" />
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Make your business intelligent by leveraging data and AI/ML technologies to get actionable insights and achieve process automation to drive efficiency, productivity, and growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              {services.slice(0, 2).map((service, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary/20 transition-colors">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                        {service.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Column - Large Visual */}
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-3xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI/ML</h3>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-12 h-12 rounded-lg bg-white/10"></div>
                <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-white/20"></div>
                <div className="absolute top-1/2 right-4 w-6 h-6 rounded bg-white/15"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {services.slice(2).map((service, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary/20 transition-colors">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                        {service.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}