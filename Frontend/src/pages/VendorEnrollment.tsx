import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Shield,
  Users,
  Globe,
  FileCheck,
  Award,
  CheckCircle,
  Store,
  ShoppingCart,
  Utensils,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
const VendorEnrollment = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              Join the <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">HAWKAR</span> Revolution
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Empower your vending business with digital visibility and legal protection
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary via-accent to-secondary text-white text-base px-8 mt-6">
             <Link to="/vendor-registration"> Get Started - It's Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Who Can Join HAWKAR?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We welcome all types of vendors and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  Street Vendors
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Food Stalls (Veg/Non-Veg)</li>
                  <li>• Sabziwala & Falwala</li>
                  <li>• Chaiwala</li>
                  <li>• Mobile Vendors</li>
                  <li>• Toy Sellers</li>
                  <li>• Clothes & Furniture</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Utensils className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  Restaurants
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fine Dining</li>
                  <li>• Fast Food</li>
                  <li>• Regional Cuisine</li>
                  <li>• Sweet Shops</li>
                  <li>• Bakeries</li>
                  <li>• Cloud Kitchens</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Store className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  Retail Stores
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Kirana Stores</li>
                  <li>• Medical Shops</li>
                  <li>• Book Stores</li>
                  <li>• Gift & Toy Shops</li>
                  <li>• Dairy Shops</li>
                  <li>• Electronics & Hardware</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  Services
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Vehicle Repair</li>
                  <li>• Puncture Services</li>
                  <li>• Bike/Car Servicing</li>
                  <li>• Mobile Mechanics</li>
                  <li>• Electrical Work</li>
                  <li>• Welding Services</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Join HAWKAR?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transform your business with technology and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
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

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Increase Sales
                </h3>
                <p className="text-muted-foreground">
                  Accept pre-orders and online bookings. Manage your inventory digitally and reach customers beyond your physical location.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Legal Protection
                </h3>
                <p className="text-muted-foreground">
                  Get help with licensing and documentation. Vend with confidence knowing you have legal backing and protection.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Easy Setup
                </h3>
                <p className="text-muted-foreground">
                  Simple registration process tailored to your business type. Complete your profile and inventory to go live quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Community Network
                </h3>
                <p className="text-muted-foreground">
                  Join a network backed by NASVI. Connect with fellow vendors and benefit from collective advocacy and support.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Business Tools
                </h3>
                <p className="text-muted-foreground">
                  Access inventory management, payment tracking, and customer feedback tools to grow your business efficiently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                What You Need to Register
              </h2>
              <p className="text-muted-foreground text-lg">
                Simple requirements to get started
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="pt-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Mobile Number & Email</h3>
                      <p className="text-sm text-muted-foreground">
                        Active mobile number for OTP verification and email address for account setup
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Basic Information</h3>
                      <p className="text-sm text-muted-foreground">
                        First name, last name, and business category selection
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
                        Operating hours, products/services offered, accepted payment modes, and location information
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Bank Account Details</h3>
                      <p className="text-sm text-muted-foreground">
                        Bank name, account number, IFSC code, and passbook/cheque upload for payment processing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">License (If Applicable)</h3>
                      <p className="text-sm text-muted-foreground">
                        FSSAI license for restaurants and food businesses. We'll help you get one if you don't have it yet
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Register</h3>
                <p className="text-muted-foreground">
                  Complete the registration form with your mobile number, email, and business category
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Complete Profile</h3>
                <p className="text-muted-foreground">
                  Set up your inventory, operating hours, and add your bank details to activate your account
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Go Live</h3>
                <p className="text-muted-foreground">
                  Start accepting orders and bookings. Your business is now visible to thousands of customers
                </p>
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
              Join thousands of vendors already growing their businesses with HAWKAR. Registration is free and takes less than 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" className="text-base px-8">
               <Link to="/vendor-registration"> Register Now - It's Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-white/10 hover:bg-white/20 border-white/30 text-white"
              > <Link to="/how-it-works">

                Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorEnrollment;