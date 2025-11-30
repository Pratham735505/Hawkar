import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Newspaper, GraduationCap, Download, ExternalLink } from "lucide-react";

const Resources = () => {
  const articles = [
    {
      title: "Understanding Street Vending in India: Rights and Opportunities",
      category: "Research",
      description: "Comprehensive research on the street vending ecosystem in India, legal frameworks, and economic impact.",
      date: "March 2024",
    },
    {
      title: "Digital Transformation for Small Businesses: A Guide",
      category: "Guide",
      description: "Step-by-step guide for small vendors to embrace digital tools and grow their business online.",
      date: "February 2024",
    },
    {
      title: "The Street Vendors Act 2014: Know Your Rights",
      category: "Legal",
      description: "Detailed explanation of vendor rights, licensing requirements, and legal protections under Indian law.",
      date: "January 2024",
    },
    {
      title: "Success Stories: How Technology Changed Local Commerce",
      category: "Case Study",
      description: "Real stories from vendors who transformed their businesses through digital adoption.",
      date: "December 2023",
    },
  ];

  const blogs = [
    {
      title: "5 Tips to Increase Your Daily Sales",
      description: "Practical advice for vendors to maximize their earnings and attract more customers.",
      readTime: "5 min read",
    },
    {
      title: "How to Use HAWKAR: A Beginner's Guide",
      description: "Everything you need to know to get started on the HAWKAR platform.",
      readTime: "8 min read",
    },
    {
      title: "Building Customer Loyalty in Street Vending",
      description: "Strategies to turn one-time buyers into regular customers.",
      readTime: "6 min read",
    },
  ];

  const training = [
    {
      title: "Platform Basics",
      description: "Learn how to use HAWKAR app, update your catalog, and manage bookings",
      duration: "2 hours",
    },
    {
      title: "Digital Marketing for Vendors",
      description: "Simple marketing techniques to attract and retain customers online",
      duration: "3 hours",
    },
    {
      title: "Legal Documentation Workshop",
      description: "Understanding licensing requirements and how to obtain necessary permits",
      duration: "2 hours",
    },
    {
      title: "Business Growth Strategies",
      description: "Using analytics and insights to make better business decisions",
      duration: "2.5 hours",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              Resources & <span className="bg-gradient-hero bg-clip-text">Learning</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Knowledge base to help vendors grow and succeed
            </p>
          </div>
        </div>
      </section>

      {/* Articles & Research */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Articles & Research
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              In-depth content about street vending, digital transformation, and vendor empowerment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {article.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Newspaper className="h-8 w-8 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Blog Posts
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Practical tips, guides, and insights for growing your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogs.map((blog, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                    <Button variant="ghost" size="sm">
                      Read
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Training Programs
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Free training sessions to help you master the platform and grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {training.map((program, index) => (
              <Card key={index} className="shadow-soft hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-heading font-semibold">
                          {program.title}
                        </h3>
                        <span className="px-2 py-1 bg-muted text-xs rounded">
                          {program.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {program.description}
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
                        Register for Training
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Downloadable Resources
              </h2>
              <p className="text-muted-foreground text-lg">
                Guides and templates you can download and use
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">Vendor Handbook</h3>
                      <p className="text-xs text-muted-foreground">PDF • 2.5 MB</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete guide covering everything from registration to growing your business
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Download className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">License Checklist</h3>
                      <p className="text-xs text-muted-foreground">PDF • 800 KB</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Step-by-step checklist for obtaining vending licenses in major cities
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Download className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">Business Plan Template</h3>
                      <p className="text-xs text-muted-foreground">DOCX • 1.2 MB</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Template to help you plan and track your business growth goals
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Template
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">Marketing Guide</h3>
                      <p className="text-xs text-muted-foreground">PDF • 1.8 MB</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Simple marketing strategies to attract and retain more customers
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Need More Help?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our support team is always here to assist you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-hero">
                Contact Support
              </Button>
              <Button size="lg" variant="outline">
                Join Community Forum
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
