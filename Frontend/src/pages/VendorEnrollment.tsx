import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Shield,
  Users,
  Globe,
  FileCheck,
  Award,
  CheckCircle,
} from "lucide-react";

const VendorEnrollment = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              Join the <span className="bg-gradient-hero bg-clip-text ">HAWKAR</span> Revolution
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Empower your vending business with digital visibility and legal protection
            </p>
            <Button asChild size="lg" className="gradient-hero text-base px-8 mt-6">
              <Link to="/vendor-registration">Get Started - It's Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Join HAWKAR?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transform your street vending business with technology and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Digital Visibility
                </h3>
                <p className="text-muted-foreground">
                  Get discovered by thousands of customers online. Your business becomes visible to everyone in your area looking for your products.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Increase Sales
                </h3>
                <p className="text-muted-foreground">
                  Reach more customers through bookings, preorders, and online catalog. Expand your customer base beyond your immediate location.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Legal Protection
                </h3>
                <p className="text-muted-foreground">
                  Get help with licensing and documentation. Vend with confidence knowing you have legal backing and protection from evictions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Licensing Support
                </h3>
                <p className="text-muted-foreground">
                  Our legal team helps you obtain proper vending licenses and required documentation. Navigate government processes with ease.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Community Network
                </h3>
                <p className="text-muted-foreground">
                  Join a network backed by NASVI. Connect with fellow vendors, access training programs, and benefit from collective advocacy.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Business Growth Tools
                </h3>
                <p className="text-muted-foreground">
                  Access sales analytics, customer feedback, and business insights. Make data-driven decisions to grow your business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                What You Need to Join
              </h2>
              <p className="text-muted-foreground text-lg">
                Simple requirements to get started
              </p>
            </div>

            <Card className="shadow-soft">
              <CardContent className="pt-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Valid ID Proof</h3>
                      <p className="text-sm text-muted-foreground">
                        Aadhaar card, PAN card, Voter ID, or any government-issued photo identification
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Business Photos</h3>
                      <p className="text-sm text-muted-foreground">
                        Clear photos of your cart/shop/stall and the products you sell
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Mobile Number</h3>
                      <p className="text-sm text-muted-foreground">
                        Active mobile number for account verification and customer communication
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Business Details</h3>
                      <p className="text-sm text-muted-foreground">
                        Basic information about your business type, location, and operating hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Vending License (Optional)</h3>
                      <p className="text-sm text-muted-foreground">
                        If you already have one, great! If not, we'll help you get it
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What You Get
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive support and tools to grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <h3 className="text-lg font-heading font-semibold mb-4">For Free</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Digital storefront with your products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Real-time location visibility to customers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Booking and preorder system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic sales analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Customer reviews and ratings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <h3 className="text-lg font-heading font-semibold mb-4">Additional Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Licensing assistance and documentation help</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Legal protection through NASVI partnership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Training on using the platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Community support and networking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Ongoing technical support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Join thousands of vendors already growing their businesses with HAWKAR. Registration is free and takes less than 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/vendor-registration">Register Now - It's Free</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 bg-white/10 hover:bg-white/20 border-white/30"
              >
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorEnrollment;
