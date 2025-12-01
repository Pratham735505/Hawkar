import { useState, useEffect } from "react";
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
import { CheckCircle, ArrowRight, ArrowLeft, Upload, Plus, X } from "lucide-react";

const CompleteProfileSetup = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [registrationData, setRegistrationData] = useState(null);
  
  const [profileData, setProfileData] = useState({
    // Business Details
    shopName: "",
    openingHours: "",
    closingHours: "",
    carryBag: null,
    paymentModes: [],
    preOrders: null,
    homeDelivery: null,
    deliveryPartners: [],
    emergencyService: null,
    
    // Products/Services
    categories: [],
    items: {},
    
    // Bank Details
    bankName: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
    passbookFile: null,
    
    // Declaration
    termsAccepted: false,
  });

  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Load registration data from session storage
    const storedData = sessionStorage.getItem('hawkar_registration');
    if (storedData) {
      setRegistrationData(JSON.parse(storedData));
    }
  }, []);

  const handleNext = () => {
    if (step === 1) {
      if (!profileData.shopName || !profileData.openingHours || !profileData.closingHours) {
        toast({
          title: "Required Fields",
          description: "Please fill in all required business details.",
          variant: "destructive",
        });
        return;
      }
    }
    
    if (step === 2) {
      if (selectedItems.length === 0) {
        toast({
          title: "Add Products/Services",
          description: "Please add at least one product or service.",
          variant: "destructive",
        });
        return;
      }
    }

    if (step === 3) {
      if (!profileData.bankName || !profileData.accountNumber || !profileData.ifscCode) {
        toast({
          title: "Required Fields",
          description: "Please fill in all bank details.",
          variant: "destructive",
        });
        return;
      }
      if (profileData.accountNumber !== profileData.confirmAccountNumber) {
        toast({
          title: "Account Number Mismatch",
          description: "Account numbers do not match.",
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

  const handleAddItem = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter(i => i !== item));
  };

  const renderBusinessDetails = () => {
    const isStreetVendor = registrationData?.vendorType === "street-vendor";
    const isRestaurant = registrationData?.vendorType === "restaurant";
    const isRetailStore = registrationData?.vendorType === "retail-store";
    const isStableVendor = registrationData?.subCategory === "stable";

    return (
      <div className="space-y-6">
        {/* Shop/Business Name */}
        <div className="space-y-2">
          <Label htmlFor="shopName">
            {isRestaurant ? "Restaurant Name" : isRetailStore ? "Shop Name" : "Business Name"} 
            <span className="text-destructive">*</span>
          </Label>
          <Input
            id="shopName"
            placeholder={`Enter your ${isRestaurant ? "restaurant" : isRetailStore ? "shop" : "business"} name`}
            value={profileData.shopName}
            onChange={(e) => setProfileData({ ...profileData, shopName: e.target.value })}
          />
        </div>

        {/* Operating Hours */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="openingHours">Opening Hours <span className="text-destructive">*</span></Label>
            <Input
              id="openingHours"
              type="time"
              value={profileData.openingHours}
              onChange={(e) => setProfileData({ ...profileData, openingHours: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="closingHours">Closing Hours <span className="text-destructive">*</span></Label>
            <Input
              id="closingHours"
              type="time"
              value={profileData.closingHours}
              onChange={(e) => setProfileData({ ...profileData, closingHours: e.target.value })}
            />
          </div>
        </div>

        {/* Payment Modes */}
        <div className="space-y-2">
          <Label>Accepted Payment Modes <span className="text-destructive">*</span></Label>
          <div className="grid grid-cols-2 gap-3">
            {["Cash", "UPI", "Card", "Net Banking"].map((mode) => (
              <div key={mode} className="flex items-center space-x-2">
                <Checkbox
                  id={mode}
                  checked={profileData.paymentModes.includes(mode)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setProfileData({
                        ...profileData,
                        paymentModes: [...profileData.paymentModes, mode],
                      });
                    } else {
                      setProfileData({
                        ...profileData,
                        paymentModes: profileData.paymentModes.filter((m) => m !== mode),
                      });
                    }
                  }}
                />
                <Label htmlFor={mode} className="cursor-pointer">{mode}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Carry Bag Option */}
        {(isStreetVendor || isRetailStore) && (
          <div className="space-y-2">
            <Label>Do you provide carry bags?</Label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setProfileData({ ...profileData, carryBag: true })}
                className={`flex-1 p-3 border-2 rounded-lg transition-all ${
                  profileData.carryBag === true
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setProfileData({ ...profileData, carryBag: false })}
                className={`flex-1 p-3 border-2 rounded-lg transition-all ${
                  profileData.carryBag === false
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* Pre-orders */}
        <div className="space-y-2">
          <Label>Are you comfortable taking pre-orders with pre-payments?</Label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setProfileData({ ...profileData, preOrders: true })}
              className={`flex-1 p-3 border-2 rounded-lg transition-all ${
                profileData.preOrders === true
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setProfileData({ ...profileData, preOrders: false })}
              className={`flex-1 p-3 border-2 rounded-lg transition-all ${
                profileData.preOrders === false
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* Home Delivery for Restaurants */}
        {isRestaurant && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Do you provide home delivery service?</Label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setProfileData({ ...profileData, homeDelivery: true })}
                  className={`flex-1 p-3 border-2 rounded-lg transition-all ${
                    profileData.homeDelivery === true
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setProfileData({ ...profileData, homeDelivery: false })}
                  className={`flex-1 p-3 border-2 rounded-lg transition-all ${
                    profileData.homeDelivery === false
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {profileData.homeDelivery && (
              <div className="space-y-2">
                <Label>Select Delivery Partners</Label>
                <div className="grid grid-cols-2 gap-3">
                  {["Self Delivery", "Zomato", "Swiggy", "Dunzo"].map((partner) => (
                    <div key={partner} className="flex items-center space-x-2">
                      <Checkbox
                        id={partner}
                        checked={profileData.deliveryPartners.includes(partner)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setProfileData({
                              ...profileData,
                              deliveryPartners: [...profileData.deliveryPartners, partner],
                            });
                          } else {
                            setProfileData({
                              ...profileData,
                              deliveryPartners: profileData.deliveryPartners.filter((p) => p !== partner),
                            });
                          }
                        }}
                      />
                      <Label htmlFor={partner} className="cursor-pointer">{partner}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Emergency Service for Repair */}
        {(registrationData?.subCategory === "repair" || 
          (isStreetVendor && isStableVendor)) && (
          <div className="space-y-2">
            <Label>Are you flexible in providing emergency services at extra charges?</Label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setProfileData({ ...profileData, emergencyService: true })}
                className={`flex-1 p-3 border-2 rounded-lg transition-all ${
                  profileData.emergencyService === true
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setProfileData({ ...profileData, emergencyService: false })}
                className={`flex-1 p-3 border-2 rounded-lg transition-all ${
                  profileData.emergencyService === false
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderInventorySetup = () => {
    const subCategory = registrationData?.subCategory;
    
    // Define items based on subcategory
    const getItemsByCategory = () => {
      switch(subCategory) {
        case "kirana":
          return {
            "Flour & Grains": ["Wheat Flour", "Rice", "Gram Flour", "Corn Flour"],
            "Pulses": ["Toor Dal", "Moong Dal", "Chana Dal", "Masoor Dal"],
            "Oils": ["Mustard Oil", "Sunflower Oil", "Coconut Oil", "Olive Oil"],
            "Dairy": ["Milk", "Butter", "Ghee", "Paneer"],
            "Spices": ["Turmeric", "Red Chili", "Coriander", "Cumin"],
          };
        case "medical":
          return {
            "Pain Relief": ["Paracetamol", "Ibuprofen", "Aspirin"],
            "Antibiotics": ["Amoxicillin", "Azithromycin"],
            "Vitamins": ["Vitamin C", "Vitamin D", "Multivitamin"],
            "Digestive": ["Antacid", "Digestion Tablets"],
          };
        case "book":
          return {
            "School Books": ["Class 1-5", "Class 6-8", "Class 9-10", "Class 11-12"],
            "Competitive Exams": ["IIT-JEE", "NEET", "CAT", "UPSC"],
            "College": ["Engineering", "Medical", "Commerce", "Arts"],
          };
        default:
          return {
            "General Items": ["Item 1", "Item 2", "Item 3"],
          };
      }
    };

    const categories = getItemsByCategory();

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-heading font-semibold mb-4">Select Your Products/Services</h3>
          
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="mb-6">
              <h4 className="font-medium mb-3">{category}</h4>
              <div className="grid grid-cols-2 gap-3">
                {items.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleAddItem(item)}
                    className={`p-3 border-2 rounded-lg text-left transition-all ${
                      selectedItems.includes(item)
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{item}</span>
                      {selectedItems.includes(item) && (
                        <CheckCircle className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Items */}
        {selectedItems.length > 0 && (
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-4">
              <h4 className="font-medium mb-3">Selected Items ({selectedItems.length})</h4>
              <div className="flex flex-wrap gap-2">
                {selectedItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border"
                  >
                    <span className="text-sm">{item}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Custom Item Input */}
        <div className="space-y-2">
          <Label>Add Custom Item (Optional)</Label>
          <div className="flex gap-2">
            <Input placeholder="Enter item name" />
            <Button type="button" variant="outline">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const renderBankDetails = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="bankName">Bank Name <span className="text-destructive">*</span></Label>
        <Select
          value={profileData.bankName}
          onValueChange={(value) => setProfileData({ ...profileData, bankName: value })}
        >
          <SelectTrigger id="bankName">
            <SelectValue placeholder="Select your bank" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sbi">State Bank of India</SelectItem>
            <SelectItem value="hdfc">HDFC Bank</SelectItem>
            <SelectItem value="icici">ICICI Bank</SelectItem>
            <SelectItem value="axis">Axis Bank</SelectItem>
            <SelectItem value="pnb">Punjab National Bank</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="accountNumber">Account Number <span className="text-destructive">*</span></Label>
        <Input
          id="accountNumber"
          type="text"
          placeholder="Enter account number"
          value={profileData.accountNumber}
          onChange={(e) => setProfileData({ ...profileData, accountNumber: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmAccountNumber">Re-enter Account Number <span className="text-destructive">*</span></Label>
        <Input
          id="confirmAccountNumber"
          type="text"
          placeholder="Re-enter account number"
          value={profileData.confirmAccountNumber}
          onChange={(e) => setProfileData({ ...profileData, confirmAccountNumber: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="ifscCode">IFSC Code <span className="text-destructive">*</span></Label>
        <Input
          id="ifscCode"
          placeholder="Enter IFSC code"
          value={profileData.ifscCode}
          onChange={(e) => setProfileData({ ...profileData, ifscCode: e.target.value.toUpperCase() })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="passbook">Upload Passbook/Cheque <span className="text-destructive">*</span></Label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground mb-1">
            Click to upload or drag and drop
          </p>
          <p className="text-xs text-muted-foreground">
            Bank passbook or cancelled cheque (Max 5MB)
          </p>
          <Input
            id="passbook"
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={(e) => setProfileData({ ...profileData, passbookFile: e.target.files[0] })}
          />
        </div>
      </div>

      <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
        <Checkbox
          id="bankDeclaration"
          checked={profileData.termsAccepted}
          onCheckedChange={(checked) => setProfileData({ ...profileData, termsAccepted: checked })}
        />
        <div className="space-y-1">
          <Label htmlFor="bankDeclaration" className="text-sm font-medium cursor-pointer">
            I declare that the bank details provided are correct
          </Label>
          <p className="text-xs text-muted-foreground">
            All payments will be processed to this account. Ensure the details are accurate.
          </p>
        </div>
      </div>
    </div>
  );

  const renderFinalReview = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h3 className="text-2xl font-heading font-bold mb-2">Profile Setup Complete!</h3>
        <p className="text-muted-foreground">
          Your profile has been successfully set up. Our team will review your application.
        </p>
      </div>

      <Card className="bg-muted/50">
        <CardContent className="pt-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Business Name:</span>
            <span className="font-medium">{profileData.shopName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Operating Hours:</span>
            <span className="font-medium">{profileData.openingHours} - {profileData.closingHours}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Payment Modes:</span>
            <span className="font-medium">{profileData.paymentModes.join(", ")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Products/Services:</span>
            <span className="font-medium">{selectedItems.length} items</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Bank:</span>
            <span className="font-medium">{profileData.bankName.toUpperCase()}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-none">
        <CardContent className="pt-6">
          <h4 className="font-heading font-semibold mb-4">What Happens Next?</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Our team will review your application within 24-48 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>We'll verify your documents and bank details</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>You'll receive login credentials via email and SMS</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Once approved, you can start accepting orders immediately!</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Button
        size="lg"
        className="w-full bg-gradient-to-r from-primary via-accent to-secondary text-white"
        onClick={() => {
          toast({
            title: "Application Submitted!",
            description: "Thank you for completing your profile. We'll contact you soon.",
          });
          // Clear session storage
          sessionStorage.removeItem('hawkar_registration');
        }}
      >
        Submit Application
      </Button>
    </div>
  );

  if (!registrationData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground mb-4">
              Please complete the registration process first.
            </p>
            <Button onClick={() => window.location.href = '/vendor-registration'}>
              Go to Registration
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-heading font-bold mb-2">
              Complete Your <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Profile</span>
            </h1>
            <p className="text-muted-foreground">
              Welcome, {registrationData.firstName}! Let's set up your business profile
            </p>
          </div>

          {/* Progress Steps */}
          {step < 5 && (
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[1, 2, 3, 4].map((s) => (
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
                    {s < 4 && (
                      <div
                        className={`w-20 h-1 mx-2 transition-all ${
                          step > s ? "bg-primary" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground max-w-xl mx-auto">
                <span>Business Details</span>
                <span>Inventory</span>
                <span>Bank Details</span>
                <span>Review</span>
              </div>
            </div>
          )}

          {/* Form Card */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">
                {step === 1 && "Business Details"}
                {step === 2 && "Setup Inventory"}
                {step === 3 && "Add Bank Details"}
                {step === 4 && "Final Review"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {step === 1 && renderBusinessDetails()}
              {step === 2 && renderInventorySetup()}
              {step === 3 && renderBankDetails()}
              {step === 4 && renderFinalReview()}

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
                    {step === 3 ? "Review & Submit" : "Continue"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfileSetup;