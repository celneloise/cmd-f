import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AIChatbot from "./components/AIChatbot";
import Index from "./pages/Index";
import AssessmentPage from "./pages/AssessmentPage";
import SelfHelpPage from "./pages/SelfHelpPage";
import CrisisPage from "./pages/CrisisPage";
import TherapistMatchPage from "./pages/TherapistMatchPage";
import VolunteerPage from "./pages/VolunteerPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/self-help" element={<SelfHelpPage />} />
          <Route path="/crisis" element={<CrisisPage />} />
          <Route path="/therapist-match" element={<TherapistMatchPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIChatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
