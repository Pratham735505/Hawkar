import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import VendorEnrollment from "./pages/VendorEnrollment";
import VendorRegistration from "./pages/VendorRegistration";
import MerchantStories from "./pages/MerchantStories";
import BuiltWithHawkar from "./pages/BuiltWithHawkar";
import Transformation from "./pages/Transformation";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Grievance from "./pages/Grievance";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/vendor-enrollment" element={<VendorEnrollment />} />
            <Route path="/vendor-registration" element={<VendorRegistration />} />
            <Route path="/merchant-stories" element={<MerchantStories />} />
            <Route path="/built-with-hawkar" element={<BuiltWithHawkar />} />
            <Route path="/transformation" element={<Transformation />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/grievance" element={<Grievance />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
