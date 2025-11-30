import { Card, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  MapPin,
  Database,
  Shield,
  Zap,
  Cloud,
  Users,
  TrendingUp,
  Bell,
  Lock,
} from "lucide-react";

const BuiltWithHawkar = () => {
  const technologies = [
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description: "Built specifically for smartphones with offline capabilities. Works seamlessly on low-end devices and slow internet connections.",
      features: ["Progressive Web App", "Offline Mode", "Low Data Usage"],
    },
    {
      icon: MapPin,
      title: "Real-Time GPS Tracking",
      description: "Advanced location technology that provides accurate real-time tracking of vendors with minimal battery consumption.",
      features: ["Live Location", "Route Optimization", "Geofencing"],
    },
    {
      icon: Database,
      title: "Scalable Database",
      description: "Robust database infrastructure that handles thousands of vendors and millions of transactions efficiently.",
      features: ["Fast Queries", "Data Security", "24/7 Availability"],
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "Real-time push notifications keep both vendors and customers informed about bookings, status updates, and opportunities.",
      features: ["Push Alerts", "SMS Fallback", "Email Updates"],
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security protecting user data with encryption and secure authentication systems.",
      features: ["Data Encryption", "Secure Auth", "Privacy Compliant"],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Reliable cloud hosting ensures the platform is always available with automatic scaling during peak times.",
      features: ["99.9% Uptime", "Auto-scaling", "Fast CDN"],
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Vendor Management",
      description: "Complete vendor onboarding, verification, and management system with document handling and compliance tracking.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics for vendors to track sales, customer behavior, and business growth metrics.",
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "Multiple payment options with secure transaction processing and automatic settlement systems.",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed with quick loading times and smooth user experience even on slower networks.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              Built With HAWKAR
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Cutting-edge technology powering India's local commerce transformation
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Technology
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enterprise-grade tools and infrastructure built for reliability and scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <tech.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {tech.description}
                  </p>
                  <div className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Platform Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive tools designed specifically for India's street vendors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Infrastructure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
              Support & Resources
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-soft text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Round-the-clock customer support through multiple channels
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Legal Assistance</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert legal support for licensing and documentation
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Training Programs</h3>
                  <p className="text-sm text-muted-foreground">
                    Regular training sessions on platform usage and business growth
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
              Why Our Platform Stands Out
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold mb-4">Built for India</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Works on 2G/3G networks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Hindi and regional language support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Low data consumption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Optimized for budget smartphones</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold mb-4">Vendor-Centric Design</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Simple, intuitive interface</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Minimal training required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Voice commands support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Battery-efficient operation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold mb-4">Scalable & Reliable</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Handles millions of users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>99.9% uptime guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Automatic backup systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Load balancing for peak times</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold mb-4">Security First</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>End-to-end encryption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Secure payment processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Data privacy compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Regular security audits</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuiltWithHawkar;
