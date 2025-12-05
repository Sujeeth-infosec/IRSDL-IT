import { useState } from "react";
import { Link } from "react-router-dom";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { servicesData } from "@/data/servicesData";
import { ContactForm } from "./ContactForm";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const industriesData = [
  { name: "Healthcare", href: "/industries#healthcare" },
  { name: "Education", href: "/industries#education" },
  { name: "Sports", href: "/industries#sports" },
  { name: "Retail", href: "/industries#retail" },
  { name: "Finance", href: "/industries#finance" },
  { name: "Real Estate", href: "/industries#real-estate" },
  { name: "Fitness", href: "/industries#fitness" },
];

export function AnimatedNavbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed top-10 inset-x-0 max-w-4xl mx-auto z-50">
      <Menu setActive={setActive}>
        <Link to="/" className="text-black dark:text-white hover:opacity-90">
          Home
        </Link>
        
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="grid grid-cols-2 gap-6 text-sm p-4">
            {Object.entries(servicesData).map(([key, data]) => (
              <div key={key}>
                <h4 className="font-semibold text-black dark:text-white mb-2">{data.title}</h4>
                <div className="space-y-1">
                  {data.services.slice(0, 4).map((service) => (
                    <HoveredLink key={service.name} href={`/services#${key}`}>
                      {service.name}
                    </HoveredLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Industries">
          <div className="flex flex-col space-y-2 text-sm">
            {industriesData.map((industry) => (
              <HoveredLink key={industry.name} href={industry.href}>
                {industry.name}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>

        <Link to="/case-studies" className="text-black dark:text-white hover:opacity-90">
          Work
        </Link>

        <Link to="/about" className="text-black dark:text-white hover:opacity-90">
          About
        </Link>

        <ContactForm>
          <Button size="sm" variant="outline" className="gap-2">
            <Mail className="w-4 h-4" />
            Contact
          </Button>
        </ContactForm>
      </Menu>
    </div>
  );
}