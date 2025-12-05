import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "./MegaMenu";
import { IndustriesMegaMenu } from "./IndustriesMegaMenu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "./MobileNav";
import { LocationSelector } from "./LocationSelector";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasMegaMenu: true, megaMenuType: "services" },
  { name: "Industries", href: "/industries", hasMegaMenu: true, megaMenuType: "industries" },
  { name: "Work", href: "/case-studies" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/IRSDL LOGO-01.png" 
              alt="IRSDL Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (item.hasMegaMenu) {
                    if (hoverTimeout) clearTimeout(hoverTimeout);
                    setIsMegaMenuOpen(true);
                    setActiveMegaMenu(item.megaMenuType || null);
                  }
                }}
                onMouseLeave={() => {
                  if (item.hasMegaMenu) {
                    const timeout = setTimeout(() => {
                      setIsMegaMenuOpen(false);
                      setActiveMegaMenu(null);
                    }, 150);
                    setHoverTimeout(timeout);
                  }
                }}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-secondary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
                {item.hasMegaMenu && isMegaMenuOpen && activeMegaMenu === item.megaMenuType && (
                  <div 
                    onMouseEnter={() => {
                      if (hoverTimeout) clearTimeout(hoverTimeout);
                    }} 
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setIsMegaMenuOpen(false);
                        setActiveMegaMenu(null);
                      }, 150);
                      setHoverTimeout(timeout);
                    }}
                  >
                    {activeMegaMenu === 'services' && <MegaMenu />}
                    {activeMegaMenu === 'industries' && <IndustriesMegaMenu />}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <LocationSelector />
            <Button variant="ghost" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Book A Call
            </Button>
            <Button size="sm" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 p-0">
              <MobileNav onClose={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
