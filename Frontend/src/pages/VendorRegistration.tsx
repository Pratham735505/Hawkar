import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

const VendorRegistration = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  
  const [formData, setFormData] = useState({
    mobile: "",
    otp: "",
    firstName: "",
    lastName: "",
    email: "",
    vendorType: "",
    subCategory: "",
    fssaiLicense: "",
    hasFSSAI: null,
    vendingPermission: "",
    hasVendingPermission: null,
  });

  const handleSendOTP = () => {
    if (!formData.mobile || formData.mobile.length !== 10) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }
    setOtpSent(true);
    toast({
      title: "OTP Sent",
      description: "Please check your mobile for the OTP code.",
    });
  };

  const handleVerifyOTP = () => {
    if (!formData.otp || formData.otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the 6-digit OTP sent to your mobile.",
        variant: "destructive",
      });
      return;
    }
    setOtpVerified(true);
    toast({
      title: "OTP Verified",
      description: "Your mobile number has been verified successfully.",
    });
  };

  const handleNext = () => {
    if (step === 1) {
      if (!otpVerified) {
        toast({
          title: "Verification Required",
          description: "Please verify your mobile number first.",
          variant: "destructive",
        });
        return;
      }
      if (!formData.firstName || !formData.lastName || !formData.email) {
        toast({
          title: "Required Fields",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }
    }
    
    if (step === 2) {
      if (!formData.vendorType) {
        toast({
          title: "Select Business Type",
          description: "Please select your business type to continue.",
          variant: "destructive",
        });
        return;
      }
    }
    
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const renderVendorTypeSelection = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Select Your Business Type <span className="text-destructive">*</span></Label>
        <Select
          value={formData.vendorType}
          onValueChange={(value) => {
            setFormData({ ...formData, vendorType: value, subCategory: "" });
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose your business category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="street-vendor">Street Vendor</SelectItem>
            <SelectItem value="restaurant">Restaurant</SelectItem>
            <SelectItem value="retail-store">Retail Store</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {formData.vendorType === "street-vendor" && (
        <div className="space-y-2">
          <Label>Street Vendor Type <span className="text-destructive">*</span></Label>
          <Select
            value={formData.subCategory}
            onValueChange={(value) => setFormData({ ...formData, subCategory: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select vendor type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stable">Stable Vendor (Fixed Location)</SelectItem>
              <SelectItem value="mobile">Mobile Vendor (Moving)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {formData.vendorType === "retail-store" && (
        <div className="space-y-2">
          <Label>Store Type <span className="text-destructive">*</span></Label>
          <Select
            value={formData.subCategory}
            onValueChange={(value) => setFormData({ ...formData, subCategory: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select store type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kirana">Kirana Store</SelectItem>
              <SelectItem value="medical">Medical Store</SelectItem>
              <SelectItem value="book">Book Store</SelectItem>
              <SelectItem value="gift-toy">Gift & Toy Shop</SelectItem>
              <SelectItem value="dairy">Dairy Shop</SelectItem>
              <SelectItem value="sweets">Sweet Shop</SelectItem>
              <SelectItem value="bakery">Bakery</SelectItem>
              <SelectItem value="hardware">Hardware Store</SelectItem>
              <SelectItem value="electronics">Electronics Store</SelectItem>
              <SelectItem value="repair">Repair Services</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {formData.vendorType && formData.subCategory && (
        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">
                In the next steps, you'll provide detailed information about your products, services, operating hours, and payment methods.
              </p>
            </CardContent>
          </Card>

          {/* FSSAI License for Food Businesses */}
          {(formData.vendorType === "restaurant" || 
            (formData.vendorType === "street-vendor" && formData.subCategory === "stable") ||
            (formData.vendorType === "retail-store" && (formData.subCategory === "sweets" || formData.subCategory === "bakery"))) && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Do you have FSSAI License? <span className="text-destructive">*</span></Label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, hasFSSAI: true, fssaiLicense: "" })}
                    className={`flex-1 p-4 border-2 rounded-lg transition-all ${
                      formData.hasFSSAI === true
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium">Yes, I have</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, hasFSSAI: false, fssaiLicense: "" })}
                    className={`flex-1 p-4 border-2 rounded-lg transition-all ${
                      formData.hasFSSAI === false
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium">No, I don't have</div>
                  </button>
                </div>
              </div>

              {formData.hasFSSAI === true && (
                <div className="space-y-2">
                  <Label htmlFor="fssai">FSSAI License Number <span className="text-destructive">*</span></Label>
                  <Input
                    id="fssai"
                    placeholder="Enter your FSSAI license number"
                    value={formData.fssaiLicense}
                    onChange={(e) => setFormData({ ...formData, fssaiLicense: e.target.value })}
                  />
                </div>
              )}

              {formData.hasFSSAI === false && (
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-4">
                    <p className="text-sm text-amber-800 mb-2">
                      FSSAI license is required for food businesses. We can help you get one!
                    </p>
                    <a href="#apply-fssai" className="text-sm text-primary hover:underline font-medium">
                      Apply for FSSAI License →
                    </a>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Vending Permission */}
          {formData.vendorType === "street-vendor" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Do you have Vending Permission Letter? <span className="text-destructive">*</span></Label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, hasVendingPermission: true, vendingPermission: "" })}
                    className={`flex-1 p-4 border-2 rounded-lg transition-all ${
                      formData.hasVendingPermission === true
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium">Yes, I have</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, hasVendingPermission: false, vendingPermission: "" })}
                    className={`flex-1 p-4 border-2 rounded-lg transition-all ${
                      formData.hasVendingPermission === false
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium">No, I don't have</div>
                  </button>
                </div>
              </div>

              {formData.hasVendingPermission === true && (
                <div className="space-y-2">
                  <Label htmlFor="vending">Vending Permission Number <span className="text-destructive">*</span></Label>
                  <Input
                    id="vending"
                    placeholder="Enter your vending permission number"
                    value={formData.vendingPermission}
                    onChange={(e) => setFormData({ ...formData, vendingPermission: e.target.value })}
                  />
                </div>
              )}

              {formData.hasVendingPermission === false && (
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-4">
                    <p className="text-sm text-amber-800 mb-2">
                      Don't worry! We'll help you get a vending permission letter.
                    </p>
                    <a href="/apply-vending-permission" className="text-sm text-primary hover:underline font-medium">
                      Apply for Vending Permission Letter →
                    </a>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderSuccessMessage = () => (
    <div className="text-center space-y-6 py-8">
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
        <CheckCircle className="h-12 w-12 text-green-600" />
      </div>
      <div>
        <h3 className="text-2xl font-heading font-bold mb-2">Registration Initiated!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for starting your registration with HAWKAR. You will now proceed to complete your detailed business profile.
        </p>
      </div>
      
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-none max-w-md mx-auto">
        <CardContent className="pt-6">
          <h4 className="font-heading font-semibold mb-4">Next Steps:</h4>
          <ul className="space-y-3 text-sm text-left">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">1.</span>
              <span>Complete your detailed business profile with products and services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">2.</span>
              <span>Set up your inventory and operating hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">3.</span>
              <span>Add your bank account details for payments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">4.</span>
              <span>Review and submit for approval</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Button 
        size="lg" 
        className="bg-gradient-to-r from-primary via-accent to-secondary text-white"
        onClick={() => {
          // Store registration data
          const registrationData = JSON.stringify(formData);
          sessionStorage.setItem('hawkar_registration', registrationData);
          // Redirect to profile setup
          window.location.href = '/complete-profile';
        }}
      >
        Continue to Profile Setup
      </Button>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-heading font-bold mb-2">
              Vendor <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Registration</span>
            </h1>
            <p className="text-muted-foreground">Join HAWKAR and start growing your business today</p>
          </div>

          {/* Progress Steps */}
          {step < 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                        step >= s
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`w-16 h-1 mx-4 transition-all ${
                          step > s ? "bg-primary" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground max-w-md mx-auto">
                <span>Account Setup</span>
                <span>Business Type</span>
                <span>Confirmation</span>
              </div>
            </div>
          )}

          {/* Form Card */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">
                {step === 1 && "Create Your Account"}
                {step === 2 && "Select Business Type"}
                {step === 3 && "Confirm Details"}
                {step === 4 && "Success!"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <div className="space-y-6">
                  {/* Mobile Number */}
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number <span className="text-destructive">*</span></Label>
                    <div className="flex gap-2">
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="Enter 10-digit mobile number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        maxLength={10}
                        disabled={otpVerified}
                        className="flex-1"
                      />
                      {!otpSent && !otpVerified && (
                        <Button onClick={handleSendOTP} variant="outline">
                          Send OTP
                        </Button>
                      )}
                      {otpVerified && (
                        <Button disabled variant="outline" className="bg-green-50">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          Verified
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* OTP Input */}
                  {otpSent && !otpVerified && (
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP <span className="text-destructive">*</span></Label>
                      <div className="flex gap-2">
                        <Input
                          id="otp"
                          type="text"
                          placeholder="Enter 6-digit OTP"
                          value={formData.otp}
                          onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                          maxLength={6}
                          className="flex-1"
                        />
                        <Button onClick={handleVerifyOTP}>
                          Verify
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Didn't receive OTP? <button className="text-primary hover:underline">Resend</button>
                      </p>
                    </div>
                  )}

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name <span className="text-destructive">*</span></Label>
                      <Input
                        id="firstName"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name <span className="text-destructive">*</span></Label>
                      <Input
                        id="lastName"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {step === 2 && renderVendorTypeSelection()}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Name:</span>
                      <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Mobile:</span>
                      <span className="font-medium">{formData.mobile}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Email:</span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Business Type:</span>
                      <span className="font-medium capitalize">{formData.vendorType?.replace("-", " ")}</span>
                    </div>
                    {formData.subCategory && (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Category:</span>
                        <span className="font-medium capitalize">{formData.subCategory?.replace("-", " ")}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
                    <Checkbox id="terms" />
                    <div className="space-y-1">
                      <Label htmlFor="terms" className="text-sm font-medium cursor-pointer">
                        I accept the terms and conditions
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        By registering, you agree to HAWKAR's terms of service and privacy policy
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && renderSuccessMessage()}

              {/* Navigation Buttons */}
              {step < 4 && (
                <div className="flex gap-3 mt-8">
                  {step > 1 && (
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    className="flex-1 bg-gradient-to-r from-primary via-accent to-secondary text-white"
                  >
                    {step === 3 ? "Submit Registration" : "Continue"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Help Text */}
          {step < 4 && (
            <Card className="mt-6 bg-gradient-to-br from-primary/5 to-accent/5 border-none">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold mb-2">What Happens After Registration?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Complete your detailed business profile with inventory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Add your bank account details to activate payments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Our team will review and approve within 24-48 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Start accepting orders and grow your business!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorRegistration;