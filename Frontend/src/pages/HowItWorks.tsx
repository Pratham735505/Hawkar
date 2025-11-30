import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  UserCircle,
  Search,
  ShoppingCart,
  CheckCircle,
  Store,
  Upload,
  Bell,
  TrendingUp,
  Smartphone,
} from "lucide-react";

const HowItWorks = () => {
  const buyerSteps = [
    {
      icon: UserCircle,
      title: "Create Your Account",
      description: "Sign up in seconds with your mobile number or email. Set your location preferences.",
    },
    {
      icon: Search,
      title: "Discover Vendors",
      description: "Browse nearby vendors on the map. See who's open, what they're selling, and their real-time location.",
    },
    {
      icon: Store,
      title: "Browse Products",
      description: "View vendor catalogs virtually. Check prices, availability, and product details before visiting.",
    },
    {
      icon: MapPin,
      title: "Track or Book",
      description: "Either visit the vendor using GPS navigation or book them to come to your location.",
    },
    {
      icon: ShoppingCart,
      title: "Shop Smart",
      description: "Make purchases with confidence. Preorder for pickup or shop on the spot. Rate your experience.",
    },
  ];

  const vendorSteps = [
    {
      icon: UserCircle,
      title: "Register Your Business",
      description: "Sign up with basic details. Choose your business category and vending zone.",
    },
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Submit required ID proofs and business photos. Our team helps with licensing if needed.",
    },
    {
      icon: MapPin,
      title: "Go Live",
      description: "Turn on your location sharing. Customers can now find you in real-time on the app.",
    },
    {
      icon: Store,
      title: "Showcase Products",
      description: "Add your products with photos and prices. Update your catalog anytime.",
    },
    {
      icon: Bell,
      title: "Receive Bookings",
      description: "Get notified when customers book you or place preorders. Accept and fulfill orders.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Access sales analytics, customer feedback, and expand your reach digitally.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              How <span className="bg-gradient-hero bg-clip-text ">HAWKAR</span> Works
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Simple steps to connect buyers with local vendors in real-time
            </p>
          </div>
        </div>
      </section>

      {/* For Buyers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              For Buyers
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find, track, and shop from local vendors with ease
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {buyerSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero text-white flex items-center justify-center text-2xl font-heading font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 shadow-soft hover:shadow-hover transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-semibold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Summary */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-none shadow-soft">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      What You Save
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 mt-4">
                      <div>
                        <p className="font-semibold text-primary mb-1">Time</p>
                        <p className="text-sm text-muted-foreground">
                          No more searching for vendors or making wasted trips
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-1">Money</p>
                        <p className="text-sm text-muted-foreground">
                          Compare prices and choose the best deals
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-1">Fuel</p>
                        <p className="text-sm text-muted-foreground">
                          Plan efficient routes or book vendors to come to you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Vendors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              For Vendors
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get online, get discovered, and grow your business
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {vendorSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center text-2xl font-heading font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 shadow-soft hover:shadow-hover transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-semibold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Summary */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-none shadow-soft">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      What You Gain
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 mt-4">
                      <div>
                        <p className="font-semibold text-secondary mb-1">Visibility</p>
                        <p className="text-sm text-muted-foreground">
                          Get discovered by thousands of nearby customers
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-secondary mb-1">Protection</p>
                        <p className="text-sm text-muted-foreground">
                          Legal assistance and protection from evictions
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-secondary mb-1">Growth</p>
                        <p className="text-sm text-muted-foreground">
                          Analytics and tools to expand your business
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Powered by Smart Technology
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-soft">
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">GPS Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time location updates using advanced GPS technology
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6 text-center">
                  <Smartphone className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Mobile First</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized for smartphones with offline capabilities
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6 text-center">
                  <Bell className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Instant Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time notifications for bookings and updates
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
