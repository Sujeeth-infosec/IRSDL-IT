import { Shield, Database, Brain, Cloud, Code, Smartphone, Lightbulb } from "lucide-react";

export const servicesData = {
  "cyber-security": {
    title: "Cyber Security",
    icon: Shield,
    description: "Protect your digital assets with comprehensive security solutions",
    services: [
      { name: "VAPT", description: "Vulnerability Assessment & Penetration Testing" },
      { name: "Code Review", description: "Security-focused code analysis" },
      { name: "Cloud Security", description: "Secure your cloud infrastructure" },
      { name: "DevSecOps", description: "Security integrated into DevOps" },
      { name: "Compliance Audits", description: "Meet regulatory requirements" },
      { name: "Threat Modelling", description: "Identify potential threats" },
      { name: "Incident Response", description: "Rapid response to security incidents" },
      { name: "Security Training", description: "Educate your team on security" },
    ],
  },
  "data-engineering": {
    title: "Data Engineering",
    icon: Database,
    description: "Transform raw data into actionable insights",
    services: [
      { name: "Data Engineering Services", description: "Build robust data pipelines" },
      { name: "Data Analytics", description: "Extract insights from your data" },
      { name: "BI Solutions", description: "Business Intelligence dashboards" },
      { name: "Data Pipelines", description: "Automated data workflows" },
      { name: "Data Warehousing", description: "Centralized data storage" },
      { name: "Data Governance", description: "Manage data quality & compliance" },
      { name: "Data Integration", description: "Connect disparate data sources" },
      { name: "Big Data Services", description: "Handle massive datasets" },
    ],
  },
  "ai-ml": {
    title: "AI/ML",
    icon: Brain,
    description: "Leverage artificial intelligence for business growth",
    services: [
      { name: "Machine Learning", description: "Custom ML model development" },
      { name: "LLM Integrations", description: "Large Language Model solutions" },
      { name: "Computer Vision", description: "Image & video analysis" },
      { name: "NLP Solutions", description: "Natural Language Processing" },
      { name: "Predictive Analytics", description: "Forecast future trends" },
      { name: "AI Consulting", description: "Strategic AI implementation" },
      { name: "MLOps", description: "ML operations & deployment" },
      { name: "Generative AI", description: "Content generation solutions" },
    ],
  },
  cloud: {
    title: "Cloud",
    icon: Cloud,
    description: "Scale your infrastructure with cloud solutions",
    services: [
      { name: "Cloud Migration", description: "Move to the cloud seamlessly" },
      { name: "Cloud Architecture", description: "Design scalable cloud systems" },
      { name: "DevOps Services", description: "Automate your operations" },
      { name: "Kubernetes", description: "Container orchestration" },
      { name: "Serverless", description: "Event-driven architecture" },
      { name: "Multi-Cloud", description: "Leverage multiple cloud providers" },
      { name: "Cloud Optimization", description: "Reduce cloud costs" },
      { name: "Infrastructure as Code", description: "Automated infrastructure" },
    ],
  },
  software: {
    title: "Software",
    icon: Code,
    description: "Build custom software solutions",
    services: [
      { name: "Custom Development", description: "Tailored software solutions" },
      { name: "Web Development", description: "Modern web applications" },
      { name: "API Development", description: "Robust API solutions" },
      { name: "Microservices", description: "Scalable architecture" },
      { name: "Legacy Modernization", description: "Update outdated systems" },
      { name: "Quality Assurance", description: "Comprehensive testing" },
      { name: "Product Engineering", description: "End-to-end product development" },
      { name: "Maintenance & Support", description: "Ongoing technical support" },
    ],
  },
  application: {
    title: "Application",
    icon: Smartphone,
    description: "Create engaging mobile and web applications",
    services: [
      { name: "Mobile Apps", description: "iOS & Android development" },
      { name: "Progressive Web Apps", description: "App-like web experiences" },
      { name: "Cross-Platform", description: "React Native & Flutter" },
      { name: "UI/UX Design", description: "User-centered design" },
      { name: "App Modernization", description: "Update legacy applications" },
      { name: "App Integration", description: "Connect with existing systems" },
      { name: "App Security", description: "Secure your applications" },
      { name: "Performance Optimization", description: "Fast, efficient apps" },
    ],
  },
  digital: {
    title: "Digital",
    icon: Lightbulb,
    description: "Transform your business digitally",
    services: [
      { name: "Digital Strategy", description: "Roadmap for digital success" },
      { name: "IT Consulting", description: "Expert technology guidance" },
      { name: "Process Automation", description: "Automate business processes" },
      { name: "Digital Marketing Tech", description: "Marketing technology solutions" },
      { name: "E-commerce Solutions", description: "Online commerce platforms" },
      { name: "CRM Integration", description: "Customer relationship systems" },
      { name: "ERP Solutions", description: "Enterprise resource planning" },
      { name: "IoT Solutions", description: "Internet of Things development" },
    ],
  },
};

export const industries = [
  "Healthcare",
  "Finance & Banking",
  "E-commerce & Retail",
  "Manufacturing",
  "Education",
  "Real Estate",
  "Logistics",
  "Media & Entertainment",
];

export const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "Their expertise in cloud architecture transformed our infrastructure. We've seen 40% cost reduction and 99.9% uptime.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    role: "CEO, DataFlow Inc",
    content: "The AI/ML solutions they built have revolutionized our data processing. Highly recommend their team.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Emily Rodriguez",
    role: "VP Engineering, SecureNet",
    content: "Outstanding cybersecurity services. They identified vulnerabilities we never knew existed.",
    avatar: "/placeholder.svg",
  },
];

export const caseStudies = [
  {
    title: "Healthcare Data Platform",
    category: "Data Engineering",
    description: "Built a HIPAA-compliant data platform processing 10M+ records daily",
    image: "/placeholder.svg",
  },
  {
    title: "AI-Powered Fraud Detection",
    category: "AI/ML",
    description: "Developed ML models that reduced fraud by 85% for a financial institution",
    image: "/placeholder.svg",
  },
  {
    title: "Cloud Migration Success",
    category: "Cloud",
    description: "Migrated legacy systems to AWS, reducing costs by 50%",
    image: "/placeholder.svg",
  },
  {
    title: "E-commerce Platform",
    category: "Software",
    description: "Built a scalable platform handling 100K+ concurrent users",
    image: "/placeholder.svg",
  },
  {
    title: "Security Transformation",
    category: "Cyber Security",
    description: "Implemented zero-trust architecture for enterprise client",
    image: "/placeholder.svg",
  },
  {
    title: "Mobile Banking App",
    category: "Application",
    description: "Developed a secure mobile banking solution with 1M+ users",
    image: "/placeholder.svg",
  },
];
