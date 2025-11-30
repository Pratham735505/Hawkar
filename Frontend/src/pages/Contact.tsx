import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full">
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              Contact <span className="bg-gradient-hero bg-clip-text ">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Get in touch with our team. We're here to help!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have questions? Want to partner with us? Or just want to say hello? We'd love to hear from you!
                </p>
              </div>

              <div className="space-y-4">
                <Card className="shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold">Address</h3>
                        <p className="text-sm text-muted-foreground">Lucknow, Uttar Pradesh, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold">Email</h3>
                        <p className="text-sm text-muted-foreground">contact@hawkar.in</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold">WhatsApp</h3>
                        <a href="https://wa.me/919XXXXXXXXX" className="text-sm text-primary hover:underline">
                          +91 9XXXXXXXXX
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full gradient-hero">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
