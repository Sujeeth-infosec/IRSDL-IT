import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Cyber Security", href: "/services#cyber-security" },
    { name: "Data Engineering", href: "/services#data-engineering" },
    { name: "AI/ML Solutions", href: "/services#ai-ml" },
    { name: "Cloud Engineering", href: "/services#cloud" },
    { name: "Software Development", href: "/services#software" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="text-white" style={{backgroundColor: 'rgb(38,18,111)'}}>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/IRSDL LOGO white-01.png" 
                alt="IRSDL Logo" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-background/70">
              Transforming businesses through innovative technology solutions. Your trusted partner for digital excellence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-sm text-background/70">
                  <div className="mb-3">
                    <strong>Tirupati Branch</strong><br />
                    23-7-169, 3rd Floor, Santhi Nagar,<br />
                    MR Palli Circle, Tirupati, AP - 517502
                  </div>
                  <div className="mb-3">
                    <strong>Bangalore Branch</strong><br />
                    57 Novel Business Park, Gajendra Nager,<br />
                    Hosur Road, Anepalya, Bangalore - 560030
                  </div>
                  <div>
                    <strong>Hyderabad Branch</strong><br />
                    Flat No.24, Dollar Hills, Pragathi Nagar,<br />
                    Nizampet, Medchal-Malkajgiri District, Telangana - 500090
                  </div>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contact@irsdl.com" className="text-sm text-background/70 hover:text-primary transition-colors">
                  contact@irsdl.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-4 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © 2025 IRSDL. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} to={link.href} className="text-sm text-background/50 hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
