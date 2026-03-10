
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScheduleCleanAndCheck from "./pages/ScheduleCleanAndCheck";
import Schedule from "./pages/Schedule";
import Dictionary from "./pages/Dictionary";
import DictionaryTerm from "./pages/DictionaryTerm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/schedule-clean-and-check" element={<ScheduleCleanAndCheck />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/dictionary/:slug" element={<DictionaryTerm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
