import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Car,
  Store,
  Smartphone,
  ShoppingBag,
  TrendingUp,
  Shield,
  Users,
  Globe,
  FileText,
  Award,
} from "lucide-react";

const Services = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              Our <span className="bg-gradient-hero bg-clip-text text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive solutions for buyers and sellers in India's local commerce ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Buyer Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              For Buyers
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Smart shopping features that save your time, money, and fuel while connecting you with local vendors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Real-Time Location Tracking
                </h3>
                <p className="text-muted-foreground mb-4">
                  Find street vendors and retail stores near you in real-time. See their exact location on the map and track their movement throughout the day.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Live GPS tracking of mobile vendors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Distance calculation from your location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Route guidance to vendor location</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Shop Open/Close Status
                </h3>
                <p className="text-muted-foreground mb-4">
                  Check if shops are currently open before heading out. Real-time status updates ensure you never make wasted trips.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Live open/closed indicators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Operating hours information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Holiday and break time notifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Book Hawker Like a Cab
                </h3>
                <p className="text-muted-foreground mb-4">
                  Book street hawkers to come to your location just like booking a cab. Convenient shopping delivered to your doorstep.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>One-tap booking system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Estimated arrival time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Real-time tracking of booked vendor</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Virtual Store Interaction
                </h3>
                <p className="text-muted-foreground mb-4">
                  Browse vendor catalogs virtually before visiting. See products, prices, and availability from the comfort of your home.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Digital product catalogs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Real-time inventory updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Price comparison across vendors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Travel Assistant
                </h3>
                <p className="text-muted-foreground mb-4">
                  Smart route planning for efficient shopping. Get suggestions based on your location, preferences, and real-time vendor availability.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Optimized shopping routes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Multi-stop planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Time and fuel savings calculator</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Preorders & Curbside Pickup
                </h3>
                <p className="text-muted-foreground mb-4">
                  Order ahead and pick up at your convenience. No waiting in queues, just grab and go shopping experience.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Advance order placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Scheduled pickup times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Order ready notifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seller Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              For Vendors & Sellers
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Comprehensive solutions to digitize your business, increase visibility, and grow your sales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Licensing Help
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get expert assistance in obtaining proper vending licenses and identity documentation. Our legal team guides you through the entire process.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>License application support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Documentation assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Government liaison services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Eviction-Free Vending
                </h3>
                <p className="text-muted-foreground mb-4">
                  Vend with confidence and legal protection. Our partnership with NASVI ensures you're protected from unlawful evictions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Legal protection framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>NASVI collaboration benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Rights awareness programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Online Visibility
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get discovered by thousands of potential customers online. Build your digital presence and reach customers you never could before.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Digital storefront creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Location-based discovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Customer reviews and ratings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Real-Time Product Showcasing
                </h3>
                <p className="text-muted-foreground mb-4">
                  Display your products and prices digitally. Update inventory in real-time and let customers know what's available instantly.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Digital product catalog</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Instant inventory updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Photo uploads and descriptions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Sales Boost
                </h3>
                <p className="text-muted-foreground mb-4">
                  Increase your sales with booking system, preorders, and wider customer reach. Analytics help you understand and grow your business.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Booking and preorder system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Sales analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Customer base expansion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  NASVI Collaboration
                </h3>
                <p className="text-muted-foreground mb-4">
                  Benefit from our partnership with National Association of Street Vendors of India. Access resources, training, and community support.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Community network access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Training and skill development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Advocacy and representation</span>
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
            <Award className="h-16 w-16 mx-auto opacity-90" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90">
              Join HAWKAR today and experience the transformation in local commerce
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/vendor-enrollment">Become a Vendor</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 bg-white/10 hover:bg-white/20 border-white/30"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
