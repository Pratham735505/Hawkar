import { Card, CardContent } from "@/components/ui/card";
import { Quote, TrendingUp, Users, Award } from "lucide-react";

const MerchantStories = () => {
  const stories = [
    {
      name: "Ramesh Kumar",
      business: "Fruit Cart Vendor",
      location: "Hazratganj, Lucknow",
      story: "I've been selling fruits for 15 years, but customers could never find me. Since joining HAWKAR, my sales have increased by 40%. Customers book me in advance, and I no longer worry about slow days. The licensing help was invaluable - I finally have proper documentation.",
      impact: {
        salesIncrease: "40%",
        newCustomers: "150+",
        monthlyRevenue: "₹35,000 → ₹49,000",
      },
      quote: "HAWKAR gave my business visibility I never thought possible. Now customers find me, not the other way around.",
    },
    {
      name: "Sunita Devi",
      business: "Street Food Vendor",
      location: "Aminabad, Lucknow",
      story: "As a woman vendor, I faced many challenges. HAWKAR helped me get my license and now I'm visible to thousands online. The preorder feature means I can prepare food in advance with less waste. My family's income has doubled.",
      impact: {
        salesIncrease: "95%",
        newCustomers: "200+",
        monthlyRevenue: "₹20,000 → ₹39,000",
      },
      quote: "This platform empowered me to grow beyond my neighborhood. I'm now planning to expand my menu!",
    },
    {
      name: "Vijay Singh",
      business: "Mobile Vegetable Vendor",
      location: "Gomti Nagar, Lucknow",
      story: "I used to struggle finding customers in new areas. With HAWKAR's real-time tracking, customers book me to come to their society. No more wasted fuel driving around. The booking system has made my life so much easier.",
      impact: {
        salesIncrease: "60%",
        newCustomers: "120+",
        monthlyRevenue: "₹28,000 → ₹44,800",
      },
      quote: "Technology transformed my traditional business. I wish this existed years ago!",
    },
    {
      name: "Anita Sharma",
      business: "Kirana Store Owner",
      location: "Indira Nagar, Lucknow",
      story: "Our small kirana store was losing customers to big supermarkets. HAWKAR helped us go digital - now customers check if we're open, preorder items, and we've gained many new regular customers. The virtual catalog showcases all our products.",
      impact: {
        salesIncrease: "35%",
        newCustomers: "300+",
        monthlyRevenue: "₹85,000 → ₹114,750",
      },
      quote: "We're competing with big stores now. Our personalized service plus digital convenience is unbeatable.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              Merchant <span className="bg-gradient-hero bg-clip-text">Success Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Real transformations from vendors who joined the HAWKAR platform
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-soft text-center">
              <CardContent className="pt-8">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-heading font-bold text-primary mb-2">58%</div>
                <p className="text-sm text-muted-foreground">Average Sales Increase</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="pt-8">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-heading font-bold text-secondary mb-2">2,500+</div>
                <p className="text-sm text-muted-foreground">Vendors Transformed</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="pt-8">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-heading font-bold text-accent mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {stories.map((story, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Vendor Info */}
                    <div className="space-y-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-hero text-white flex items-center justify-center text-3xl font-heading font-bold">
                        {story.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold">{story.name}</h3>
                        <p className="text-sm text-primary font-medium">{story.business}</p>
                        <p className="text-sm text-muted-foreground">{story.location}</p>
                      </div>

                      {/* Impact Metrics */}
                      <div className="pt-4 space-y-3 border-t">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Sales Increase</p>
                          <p className="text-lg font-heading font-bold text-primary">
                            {story.impact.salesIncrease}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">New Customers</p>
                          <p className="text-lg font-heading font-bold text-secondary">
                            {story.impact.newCustomers}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Monthly Revenue</p>
                          <p className="text-sm font-semibold text-accent">
                            {story.impact.monthlyRevenue}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Story Content */}
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h4 className="font-heading font-semibold mb-3 text-lg">Their Journey</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {story.story}
                        </p>
                      </div>

                      {/* Quote */}
                      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
                        <Quote className="h-8 w-8 text-primary mb-3" />
                        <p className="text-foreground font-medium italic">
                          "{story.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
              Before vs. After HAWKAR
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-heading font-semibold mb-6 text-center">
                    Before HAWKAR
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">
                        Customers couldn't find vendors easily
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">
                        No digital presence or visibility
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">
                        Licensing challenges and legal fears
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">
                        Limited customer reach
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">
                        Unpredictable daily income
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">
                        No business growth tools or insights
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* After */}
              <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-heading font-semibold mb-6 text-center">
                    After HAWKAR
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span className="text-sm font-medium">
                        Real-time location visibility to thousands
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span className="text-sm font-medium">
                        Complete digital storefront and catalog
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span className="text-sm font-medium">
                        Legal support and licensing assistance
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span className="text-sm font-medium">
                        Expanded customer base across the city
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span className="text-sm font-medium">
                        Steady income with bookings and preorders
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span className="text-sm font-medium">
                        Sales analytics and growth insights
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              What Vendors Say
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <Quote className="h-6 w-6 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "Best decision for my business. The platform is simple to use and support team is always helpful. My earnings have grown significantly."
                  </p>
                  <p className="text-sm font-semibold">- Mohan Lal, Tea Stall Owner</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <Quote className="h-6 w-6 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "Finally, street vendors like us have a proper platform. The licensing help was exactly what I needed. Thank you HAWKAR!"
                  </p>
                  <p className="text-sm font-semibold">- Rajesh Kumar, Mobile Vendor</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MerchantStories;
