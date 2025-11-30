import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle } from "lucide-react";

const VendorRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    vendorName: "",
    businessType: "",
    phone: "",
    location: "",
    description: "",
    termsAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registration Submitted!",
      description: "Thank you for registering. Our team will review your application and contact you within 24-48 hours.",
    });

    // Reset form
    setFormData({
      vendorName: "",
      businessType: "",
      phone: "",
      location: "",
      description: "",
      termsAccepted: false,
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Vendor <span className="bg-gradient-hero bg-clip-text ">Registration</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join HAWKAR and start growing your business today
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Registration Form</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill in your details to create your vendor account
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Vendor Name */}
                  <div className="space-y-2">
                    <Label htmlFor="vendorName">
                      Vendor Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="vendorName"
                      placeholder="Enter your name or business name"
                      value={formData.vendorName}
                      onChange={(e) =>
                        setFormData({ ...formData, vendorName: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Business Type */}
                  <div className="space-y-2">
                    <Label htmlFor="businessType">
                      Business Type <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, businessType: value })
                      }
                      required
                    >
                      <SelectTrigger id="businessType">
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="street-vendor">Street Vendor</SelectItem>
                        <SelectItem value="kirana-store">Kirana Store</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="retail-shop">Retail Shop</SelectItem>
                        <SelectItem value="ferry-vendor">Ferry Vendor</SelectItem>
                        <SelectItem value="local-market">Local Market Stall</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">
                      Vending Location <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="location"
                      placeholder="Enter your primary vending location"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      e.g., "Near City Mall, Hazratganj" or "Main Market, Aminabad"
                    </p>
                  </div>

                  {/* Business Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Business Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your business and what products you sell"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      rows={4}
                    />
                  </div>

                  {/* ID Proof Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="idProof">
                      ID Proof Upload <span className="text-destructive">*</span>
                    </Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Aadhaar, PAN, Voter ID, or any govt-issued ID (Max 5MB)
                      </p>
                      <Input
                        id="idProof"
                        type="file"
                        accept="image/*,.pdf"
                        className="hidden"
                        required
                      />
                    </div>
                  </div>

                  {/* Shop Photos Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="shopPhotos">
                      Shop/Cart Photos <span className="text-destructive">*</span>
                    </Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Clear photos of your shop, cart, or stall (Max 5MB each)
                      </p>
                      <Input
                        id="shopPhotos"
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        required
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, termsAccepted: checked as boolean })
                      }
                    />
                    <div className="space-y-1">
                      <Label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        I accept the terms and conditions
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        By registering, you agree to HAWKAR's terms of service and privacy policy
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-hero"
                  >
                    Submit Registration
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="mt-8 shadow-soft bg-gradient-to-br from-primary/5 to-accent/5 border-none">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold mb-2">What Happens Next?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Our team will review your application within 24-48 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>We'll verify your documents and contact you via phone</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>If you need licensing help, our legal team will assist you</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Once approved, you'll receive login credentials to start</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorRegistration;
