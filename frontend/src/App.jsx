import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import { Toaster } from 'react-hot-toast'; // Assuming you're using react-hot-toast
import Index from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Threats from "./pages/Threats";
import ReportIncident from "./pages/ReportIncident";
import IncidentsDashboard from "./pages/IncidentsDashboard";
import AIAnalysis from "./pages/AIAnalysis";
import ActivityLog from "./pages/ActivityLog";
import Notifications from "./pages/Notifications";
import Community from "./pages/Community";
import About from "./pages/About";
import RaiseComplaint from "./pages/RaiseComplaint";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();
  
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/raise-complaint" element={<RaiseComplaint/>} />

          {/* inside the website after logging */}
          <Route path="/threats" element={<Threats/>} />
          <Route path="/report-incident" element={<ReportIncident/>} />
          <Route path="/incidents" element={<IncidentsDashboard/>} />
          <Route path="/ai-analysis" element={<AIAnalysis/>} />
          <Route path="/activity-log" element={<ActivityLog/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;