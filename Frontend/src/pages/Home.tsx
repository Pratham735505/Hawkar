import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  ShoppingBag,
  Store,
  Car,
  Smartphone,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Transforming Daily for India
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with local vendors in real-time. Track, book, and shop with ease.
              Empowering India's street vendors and local businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="gradient-hero text-base px-8">
                <Link to="/vendor-enrollment">Become a Vendor</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How HAWKAR Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Connecting buyers and vendors through innovative technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Real-Time Location
                </h3>
                <p className="text-muted-foreground">
                  Track street vendors and retail stores in real-time. Know exactly where
                  they are and when they're available.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Shop Status
                </h3>
                <p className="text-muted-foreground">
                  Check if shops are open or closed before heading out. Save time and fuel
                  with accurate status updates.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Book Like a Cab
                </h3>
                <p className="text-muted-foreground">
                  Book hawkers just like booking a cab. Get fresh products delivered to your
                  location hassle-free.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Virtual Store
                </h3>
                <p className="text-muted-foreground">
                  Browse vendor catalogs virtually. See products, prices, and availability
                  before visiting.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Travel Assistant
                </h3>
                <p className="text-muted-foreground">
                  Plan your shopping route efficiently. Get suggestions based on your
                  location and preferences.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="shadow-soft hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Preorder & Pickup
                </h3>
                <p className="text-muted-foreground">
                  Order ahead and pick up at your convenience. No waiting, no hassle, just
                  grab and go.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                For Buyers
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Save Time & Money</h3>
                    <p className="text-muted-foreground text-sm">
                      Know where vendors are before you go. No more unnecessary trips or wasted fuel.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Store className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Shop Smarter</h3>
                    <p className="text-muted-foreground text-sm">
                      Browse products, compare prices, and make informed decisions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Easy Booking</h3>
                    <p className="text-muted-foreground text-sm">
                      Book vendors to come to you. Convenient shopping at your doorstep.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                For Vendors
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Increase Sales</h3>
                    <p className="text-muted-foreground text-sm">
                      Reach more customers through digital visibility. Grow your business online.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Legal Protection</h3>
                    <p className="text-muted-foreground text-sm">
                      Get help with licensing. Vend without fear of eviction with proper documentation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Community Support</h3>
                    <p className="text-muted-foreground text-sm">
                      Join a network backed by NASVI. Access resources and support for growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Businesses That Benefit
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              HAWKAR empowers various types of local businesses across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Kirana Stores", icon: "🏪" },
              { name: "Restaurants", icon: "🍽️" },
              { name: "Street Vendors", icon: "🛒" },
              { name: "Retail Shops", icon: "🏬" },
              { name: "Ferry Vendors", icon: "🚤" },
              { name: "Local Markets", icon: "🏪" },
            ].map((business) => (
              <Card
                key={business.name}
                className="text-center shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="text-4xl mb-3">{business.icon}</div>
                  <h3 className="font-heading font-semibold text-sm">
                    {business.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
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
              Join thousands of vendors already benefiting from HAWKAR. Get started today
              and grow your business digitally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/vendor-registration">Register Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 bg-white/10 hover:bg-white/20 border-white/30"
              >
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
