import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const tabsContent = {
  "cyber-security": {
    title: "Cyber Security Solutions",
    description: "Protect your digital assets with comprehensive security solutions covering vulnerability assessment, penetration testing, cloud security, and compliance audits",
    services: [
      { name: "VAPT", description: "Comprehensive security testing to identify and exploit vulnerabilities in your systems before attackers do" },
      { name: "Cloud Security", description: "Protect your cloud resources with comprehensive security assessments and hardening strategies across AWS, Azure, and GCP" },
      { name: "DevSecOps", description: "Embed security practices throughout your development and deployment pipeline for continuous protection" },
      { name: "Compliance Audits", description: "Ensure your organization meets industry standards and regulatory requirements with comprehensive compliance audits" },
      { name: "Threat Modelling", description: "Proactively identify and analyze potential threats to your systems before they become security incidents" },
      { name: "Security Training", description: "Empower your team with security knowledge and best practices to become your first line of defense" }
    ]
  },
  "data-ai": {
    title: "Data Intelligence & Automation",
    description: "Make your business intelligent by leveraging data and AI/ML technologies to get actionable insights and achieve process automation to drive efficiency, productivity, and growth",
    services: [
      { name: "Data Science Solutions", description: "Unlocking the potential of data, we deliver you expert data engineering, advanced analytics, NLP, and data intelligence solutions" },
      { name: "Artificial Intelligence Development", description: "We utilize our experience working with AI to innovate your product, enhance business operations with automation, and make your business intelligent" },
      { name: "Computer Vision Development", description: "From image recognition to object detection with visual analytics, we tailor computer vision solutions catering to your unique business requirements" },
      { name: "Machine Learning Development", description: "Leverage the power of machine learning and use your datasets to train your algorithms to deliver business insights, automation, and innovation" },
      { name: "AI Integration", description: "Helping businesses to seamlessly integrate advanced AI capabilities (like predictive analytics and forecasting, workflow automation, conversational AI, and more) into their existing systems" },
      { name: "Generative AI Solutions", description: "Our Generative AI team will help you build next-gen, custom Generative AI solutions like chatbots, finance robo-advisors, IT lifecycle project automation, and more" }
    ]
  },
  "cloud": {
    title: "Cloud Engineering services",
    description: "We design, develop, and manage scalable, secure, and agile cloud infrastructures while ensuring seamless move to the cloud with proven strategies. Our cloud engineering services help businesses reduce operational costs and grow their digital capabilities strategically",
    services: [
      { name: "Cloud Migration", description: "Our cloud migration experts help you make a smooth and secure transition from legacy systems to the cloud strategically with minimal downtime for maximum benefits" },
      { name: "Cloud Integration", description: "We help you streamline your workflows, enhance collaboration, and improve overall operational efficiency by helping you seamlessly connect your existing systems with the cloud" },
      { name: "Cloud Managed Services", description: "Focus on your core business while we handle the cloud operations. With cloud managed services, we provide proactive monitoring, maintenance, and optimization to keep your environment secure and efficient" },
      { name: "Cloud Consulting", description: "We guide you through every step of your cloud journey, developing a tailored strategy that aligns with your business goals while mitigating risks and optimizing performance" },
      { name: "Cloud App Development", description: "With expertise in leading cloud platforms like AWS, Microsoft Azure, and Google Cloud, we build, test, and deploy modern cloud applications designed for scalability and high performance" },
      { name: "Cloud Security", description: "Whether you're using private, public, hybrid, or multi-cloud platforms, we help you secure your digital assets stored on the cloud with industry-leading security measures and best practices" }
    ]
  },
  "software": {
    title: "Software Development",
    description: "From ideation to deployment, we help you build custom software that's scalable, secure, and innovative applications that meet your specific business requirements and help you drive growth and operational excellence",
    services: [
      { name: "Software Outsourcing", description: "We offer flexible software development outsourcing services that allow you to scale quickly and focus on your core business while we handle your technical challenges" },
      { name: "Enterprise Software Development", description: "Combining our deep industry expertise with cutting-edge technologies to build enterprise solutions that create scalable digital ecosystems, empowering enterprises to adapt, innovate, and lead in a competitive marketplace" },
      { name: "Software Product Development", description: "From ideation to design to delivery, we cover all the bases while you focus on your core competencies and we build your products" },
      { name: "Startup Software Development", description: "From ideation and discovery phase to prototyping to full-scale development, we help you build market-ready products that are scalable, cost-effective, and positioned to attract early adopters and investors" },
      { name: "Software Consulting", description: "Gain the strategic insights you need to overcome technical challenges, enhance system performance, and align your software solutions with your business objectives" },
      { name: "Software Discovery Phase", description: "By deep-diving into your business needs, challenges, and goals, we help you validate ideas, define clear requirements, and map out a strategic roadmap that lays a rock-solid foundation for your next project to succeed" }
    ]
  },
  "app-development": {
    title: "Application Development",
    description: "Looking to develop a web or mobile app, or need a proof of concept with MVP development? At MindInventory, we offer cutting-edge solutions that not only perform at their best but also provide a superior UX",
    services: [
      { name: "MVP Development", description: "We specialize in crafting scalable MVPs that allow you to validate your ideas, attract early adopters, and secure crucial feedback with a rapid yet robust development approach" },
      { name: "Mobile App Development", description: "Whether it's native Android or iOS app or cross-platform app development, we offer top-notch mobile app development services using robust technologies" },
      { name: "SaaS App Development", description: "Harness the full potential of cloud and a SaaS model to craft an world-class product that wins the hearts of the audience and makes them purchase your services" },
      { name: "Web App Development", description: "Want to take your business online with a website, improve your digital presence, or develop your mission-specific web app? Our web development service covers all" },
      { name: "Application Modernization", description: "Want to improve the performance of your application or update it as per the latest technology trends? App developers at MindInventory can help modernize your app" },
      { name: "Progressive Web App (PWA) Development", description: "Transform your web app into PWA or create PWA from scratch that offers fast, reliable, and engaging experiences that seamlessly bridge the gap between web and mobile" }
    ]
  },
  "digital": {
    title: "Digital Transformation",
    description: "Explore how the dots connect from conceptualization to an agile cycle of digital transformation and app development with the support of robust technologies to bring the leading-edge digital product to life that can transform your business",
    services: [
      { name: "Unreal Development", description: "Leverage Unreal Engine to craft immersive 3D experiences, interactive simulations, and high-quality visualizations that can elevate your brand" },
      { name: "UI UX Design", description: "Get a visually appealing, CX-focused digital design solution through careful sprint planning, UX research, and UI design phases" },
      { name: "Quality Engineering", description: "Effective quality assurance to ensure rapid delivery of quality products without compromising on great user experience" },
      { name: "Digital Twin", description: "We create digital twins of your systems for real-time monitoring, predictive insights, and smarter business decisions" },
      { name: "Dedicated Team Augmentation", description: "Hire talents from our team of tech experts who will work dedicatedly as your extended remote team and meet your requirements" },
      { name: "Digital Marketing", description: "Generate brand awareness, leads, and expand your client base by effectively reaching your target audience with the right noises" }
    ]
  }
};

const tabs = [
  { key: "cyber-security", label: "Cyber Security" },
  { key: "data-ai", label: "Data & AI" },
  { key: "cloud", label: "Cloud" },
  { key: "software", label: "Software" },
  { key: "app-development", label: "App Development" },
  { key: "digital", label: "Digital" },
];

export function ServicesTabbed() {
  const [activeTab, setActiveTab] = useState("cyber-security");
  const activeContent = tabsContent[activeTab as keyof typeof tabsContent];

  return (
    <div className="mt-12">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === tab.key
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
          {activeContent.title}
          <ArrowUpRight className="w-6 h-6" />
        </h3>
        <p className="text-gray-600 max-w-4xl mx-auto">{activeContent.description}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-center">
        {/* Left Column - First 3 items */}
        <div className="space-y-6">
          {activeContent.services.slice(0, 3).map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-primary mt-1 group-hover:translate-x-1 transition-transform" />
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                    {service.name}
                  </h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center - Illustration */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-4 border border-white/20 rounded-2xl"></div>
              <div className="absolute top-8 left-8 w-8 h-8 bg-white/20 rounded"></div>
              <div className="absolute top-12 right-12 w-6 h-6 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-16 left-12 w-4 h-8 bg-red-400 rounded"></div>
              <div className="absolute bottom-12 right-8 w-10 h-6 bg-white/25 rounded"></div>
              <div className="absolute top-1/3 left-1/4 w-12 h-8 bg-white/15 rounded-lg"></div>
              <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-white/20 rounded-full"></div>
            </div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-white">{activeTab === "cyber-security" ? "SECURITY" : activeTab === "data-ai" ? "AI/ML" : activeTab.toUpperCase()}</h3>
            </div>
          </div>
        </div>

        {/* Right Column - Last 3 items */}
        <div className="space-y-6">
          {activeContent.services.slice(3, 6).map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-primary mt-1 group-hover:translate-x-1 transition-transform" />
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                    {service.name}
                  </h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
