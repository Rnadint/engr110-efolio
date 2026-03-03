/*
 * App.tsx — ENGR 110 eFolio
 * Academic Editorial Design System
 * Routes: Home, About Me, The Team, Project (5 sub-pages), Contact
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import TheTeam from "./pages/TheTeam";
import Contact from "./pages/Contact";
import ProjectOverview from "./pages/ProjectOverview";
import {
  TeamActivities,
  AboutPartner,
  GanttChart,
  ProgressMeetings,
  Reflections,
} from "./pages/ProjectPages";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutMe} />
      <Route path="/team" component={TheTeam} />
      <Route path="/project" component={ProjectOverview} />
      <Route path="/project/team-activities" component={TeamActivities} />
      <Route path="/project/partner" component={AboutPartner} />
      <Route path="/project/gantt-chart" component={GanttChart} />
      <Route path="/project/progress-meetings" component={ProgressMeetings} />
      <Route path="/project/reflections" component={Reflections} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
