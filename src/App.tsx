import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Suspense, lazy } from "react";
import LoadingFallback from "@/components/ui/LoadingFallback";

const Index = lazy(() => import("./pages/Index"));
const AProfessora = lazy(() => import("./pages/AProfessora"));
const OPrograma = lazy(() => import("./pages/OPrograma"));
const Contato = lazy(() => import("./pages/Contato"));
const Hub = lazy(() => import("./pages/Hub"));
const HubPost = lazy(() => import("./pages/HubPost"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Admin = lazy(() => import("./pages/Admin"));

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="rafaella-biasi-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/a-professora" element={<AProfessora />} />
              <Route path="/programa" element={<OPrograma />} />
              <Route path="/hub" element={<Hub />} />
              <Route path="/hub/:slug" element={<HubPost />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/login" element={<Login />} />

              {/* Protected Routes */}
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
