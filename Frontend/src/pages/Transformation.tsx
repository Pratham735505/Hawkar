import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Building, IndianRupee, Shield, Globe } from "lucide-react";

const Transformation = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              Transforming the{" "}
              <span className="bg-gradient-hero bg-clip-text">
                Unorganised Sector
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Digitizing India's informal economy for inclusive growth
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
              India's Unorganised Retail Landscape
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="shadow-soft text-center">
                <CardContent className="pt-8">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-primary mb-2">
                    18M+
                  </div>
                  <p className="text-sm text-muted-foreground">Street Vendors in India</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft text-center">
                <CardContent className="pt-8">
                  <Building className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-secondary mb-2">
                    90%
                  </div>
                  <p className="text-sm text-muted-foreground">Retail is Unorganised</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft text-center">
                <CardContent className="pt-8">
                  <IndianRupee className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-accent mb-2">
                    10%
                  </div>
                  <p className="text-sm text-muted-foreground">Contribution to GDP</p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-accent/5 border-none">
              <CardContent className="pt-8 pb-8">
                <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                  <p>
                    India's unorganised retail sector is the backbone of its economy, employing millions and serving communities across the country. Street vendors and small retailers contribute significantly to India's GDP, yet they face numerous challenges including lack of visibility, legal protection, and access to modern tools.
                  </p>
                  <p>
                    The COVID-19 pandemic highlighted the vulnerability of this sector. With limited digital presence, many vendors struggled to reach customers during lockdowns. This crisis accelerated the need for digital transformation in the informal economy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
              Challenges Faced by the Sector
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-destructive">
                    Traditional Challenges
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-sm">Invisibility</p>
                        <p className="text-xs text-muted-foreground">
                          No digital presence or way for customers to find them
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-sm">Licensing Issues</p>
                        <p className="text-xs text-muted-foreground">
                          Complex paperwork and bureaucratic hurdles
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-sm">Eviction Fears</p>
                        <p className="text-xs text-muted-foreground">
                          Constant threat of harassment and eviction
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-sm">Limited Reach</p>
                        <p className="text-xs text-muted-foreground">
                          Restricted to immediate neighborhood only
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-sm">No Growth Tools</p>
                        <p className="text-xs text-muted-foreground">
                          Lack of analytics and business insights
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-sm">Income Uncertainty</p>
                        <p className="text-xs text-muted-foreground">
                          Unpredictable daily earnings and customer flow
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
                    HAWKAR Solutions
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-sm">Digital Visibility</p>
                        <p className="text-xs text-muted-foreground">
                          Real-time location sharing and online storefront
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-sm">Licensing Support</p>
                        <p className="text-xs text-muted-foreground">
                          Expert assistance with documentation and processes
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-sm">Legal Protection</p>
                        <p className="text-xs text-muted-foreground">
                          NASVI partnership for vendor rights and advocacy
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-sm">Expanded Market</p>
                        <p className="text-xs text-muted-foreground">
                          Access to customers across entire city
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-sm">Business Analytics</p>
                        <p className="text-xs text-muted-foreground">
                          Sales tracking and growth insights dashboard
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <div>
                        <p className="font-medium text-sm">Stable Income</p>
                        <p className="text-xs text-muted-foreground">
                          Booking system ensures predictable earnings
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
              Our Impact on the Sector
            </h2>

            <div className="space-y-8">
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        Digital Inclusion
                      </h3>
                      <p className="text-muted-foreground">
                        Bringing street vendors into the digital economy, giving them tools that were previously available only to organized retail. Over 2,500 vendors have gained online presence through our platform, reaching customers they couldn't access before.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        Legal Empowerment
                      </h3>
                      <p className="text-muted-foreground">
                        Through our partnership with NASVI and legal support services, hundreds of vendors have obtained proper licenses and documentation. This legal recognition provides security and dignity to their livelihood.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        Economic Growth
                      </h3>
                      <p className="text-muted-foreground">
                        Vendors on our platform have seen an average 58% increase in sales. The booking and preorder systems create predictable income streams, helping families plan better and invest in business growth.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        Community Building
                      </h3>
                      <p className="text-muted-foreground">
                        HAWKAR has created a connected community of vendors who support each other, share best practices, and collectively advocate for their rights. This network effect strengthens the entire ecosystem.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Building an Inclusive Digital Economy
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Our vision is to create a future where every street vendor in India has digital visibility, legal protection, and equal opportunity to thrive. We're not just building a platform - we're building a movement for economic empowerment and inclusive growth.
            </p>
            <div className="pt-8">
              <div className="inline-block bg-white/10 rounded-lg px-6 py-4 backdrop-blur">
                <p className="text-sm opacity-90 mb-2">Target by 2025</p>
                <p className="text-4xl font-heading font-bold">1 Million</p>
                <p className="text-sm opacity-90 mt-1">Vendors Digitized</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transformation;
