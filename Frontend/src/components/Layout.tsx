import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Vendor Enrollment", path: "/vendor-enrollment" },
  { name: "Merchant Stories", path: "/merchant-stories" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-heading font-bold bg-gradient-hero bg-clip-text ">
                HAWKAR
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.path) ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* WhatsApp CTA 
            <div className="hidden lg:block">
              <Button asChild size="sm" className="gradient-hero">
                <a
                  href="https://wa.me/919XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact Us
                </a>
              </Button>
            </div>
                */}
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium py-2 transition-colors hover:text-primary",
                    isActive(item.path) ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild size="sm" className="gradient-hero w-full">
                <a
                  href="https://wa.me/919XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact Us
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold bg-gradient-hero bg-clip-text text-transparent">
                HAWKAR
              </h3>
              <p className="text-sm text-muted-foreground">
                Transforming daily shopping & travel for India
              </p>
              <p className="text-xs text-muted-foreground">
                © 2023 TAPRI TECH PRIVATE LIMITED
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/vendor-enrollment" className="text-muted-foreground hover:text-primary transition-colors">
                    Become a Vendor
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/grievance" className="text-muted-foreground hover:text-primary transition-colors">
                    Grievance Redressal
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                    Help & Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Lucknow, Uttar Pradesh</li>
                <li>India</li>
                <li>
                  <a
                    href="mailto:contact@hawkar.in"
                    className="hover:text-primary transition-colors"
                  >
                    contact@hawkar.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
