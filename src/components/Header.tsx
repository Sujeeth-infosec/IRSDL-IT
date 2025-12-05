import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "./MegaMenu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "./MobileNav";

const navItems = [
  { name: "Services", href: "/services", hasMegaMenu: true },
  { name: "Industries", href: "/industries" },
  { name: "Work", href: "/case-studies" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">N</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">NexaTech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setIsMegaMenuOpen(true)}
                onMouseLeave={() => item.hasMegaMenu && setIsMegaMenuOpen(false)}
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
                {item.hasMegaMenu && isMegaMenuOpen && <MegaMenu />}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
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
