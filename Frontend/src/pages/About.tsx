import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Award } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Yash Tiwari",
      role: "Founder",
      description: "Visionary entrepreneur with expertise in tech innovation and social impact. Driving HAWKAR's mission to empower street vendors.",
      skills: ["Product Strategy", "Business Development", "Tech Leadership"],
    },
    {
      name: "Shrikant Singh",
      role: "IT Expert",
      description: "Technology specialist with deep expertise in building scalable platforms. Architecting HAWKAR's tech infrastructure.",
      skills: ["System Architecture", "Cloud Computing", "Mobile Development"],
    },
    {
      name: "Mayank",
      role: "Head Developer",
      description: "Experienced full-stack developer with proven track record in building successful applications. Leading HAWKAR's development team.",
      skills: ["Full Stack Development", "UI/UX", "Database Design"],
      achievements: ["Built 5+ production apps", "10+ years experience", "Tech mentor"],
    },
    {
      name: "Omkar Verma",
      role: "Legal & Compliance",
      description: "Legal expert specializing in vendor licensing and government compliance. Ensuring vendors get proper legal protection.",
      skills: ["Licensing", "Government Relations", "Compliance Management"],
      experience: ["Vendor licensing expert", "Govt. liaison", "Legal documentation"],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Empowering India's street vendors and transforming local commerce through technology
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-heading font-bold mb-6">Company Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Legal Name</p>
                    <p className="font-semibold">TAPRI TECH PRIVATE LIMITED</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Brand Name</p>
                    <p className="font-semibold">HAWKAR</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Year of Incorporation</p>
                    <p className="font-semibold">2023</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Headquarters</p>
                    <p className="font-semibold">Lucknow, Uttar Pradesh, India</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Current Stage</p>
                    <p className="font-semibold">Ideation, Bootstrapped</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground">
                  To digitally transform India's unorganized retail sector by connecting street vendors and local businesses with customers through innovative technology, empowering them with tools for growth, legal protection, and sustainable livelihoods.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground">
                  To create a vibrant ecosystem where every street vendor and local business in India has digital visibility, legal recognition, and equal opportunity to thrive in the modern economy while preserving the essence of traditional commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>
                HAWKAR was born from a simple observation: India's 18 million+ street vendors and countless local businesses form the backbone of our economy, yet they remain invisible in the digital age. These entrepreneurs face daily challenges - customers can't find them, they lack legal protection, and they have no platform to showcase their offerings.
              </p>
              <p>
                In 2023, our founding team came together in Lucknow with a shared vision: to bridge this gap using technology. We saw how ride-hailing apps transformed transportation and food delivery apps changed dining. We asked ourselves - why not apply the same innovation to help street vendors?
              </p>
              <p>
                Today, HAWKAR is building a comprehensive platform that gives vendors digital visibility, helps them with licensing, connects them with customers in real-time, and provides them with tools to grow their businesses. We're not just building an app; we're building a movement to recognize and empower the unorganized sector that contributes significantly to India's GDP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate individuals working together to transform India's local commerce
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="shadow-soft hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-white text-2xl font-heading font-bold flex-shrink-0">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold">{member.name}</h3>
                      <p className="text-sm text-primary font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{member.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  {member.achievements && (
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm font-semibold mb-2">Achievements:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {member.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-center gap-2">
                            <Award className="h-3 w-3 text-accent flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {member.experience && (
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm font-semibold mb-2">Experience:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {member.experience.map((exp) => (
                          <li key={exp} className="flex items-center gap-2">
                            <Users className="h-3 w-3 text-secondary flex-shrink-0" />
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="pt-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Empowerment</h3>
                <p className="text-muted-foreground text-sm">
                  We believe in empowering every vendor with tools and opportunities to succeed in the digital economy.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="pt-6 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  We continuously innovate to create solutions that truly address the challenges faced by local businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="pt-6 text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground text-sm">
                  We operate with complete transparency, building trust with both vendors and customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
