import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Coimbatore from "./pages/coimbatore/Index";
import Erode from "./pages/erode/Index";
import Tiruppur from "./pages/tiruppur/Index";
import Karur from "./pages/karur/Index";
import Salem from "./pages/salem/Index";
import Namakkal from "./pages/namakkal/Index";
import Dindigul from "./pages/dindigul/Index";
import CandidatesList from "./pages/CandidatesList";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/coimbatore" element={<Coimbatore />} />
              <Route path="/erode" element={<Erode />} />
              <Route path="/tiruppur" element={<Tiruppur />} />
              <Route path="/karur" element={<Karur />} />
              <Route path="/salem" element={<Salem />} />
              <Route path="/namakkal" element={<Namakkal />} />
              <Route path="/dindigul" element={<Dindigul />} />
              <Route path="/candidates-2026" element={<CandidatesList />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
