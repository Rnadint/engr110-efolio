/*
 * App.tsx , ENGR 110 eFolio
 * Academic Editorial Design System
 * Routes: Home, About Me, The Team, Project (5 sub-pages), Contact
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import TheTeam from "./pages/TheTeam";
import Contact from "./pages/Contact";
import ProjectOverview from "./pages/ProjectOverview";
import CommunityPartner from "./pages/CommunityPartner";
import {
  TeamActivities,
  AboutPartner,
  GanttChart,
  ProgressMeetings,
  Reflections,
} from "./pages/ProjectPages";
import Brainstorming from "./pages/Brainstorming";
import ProjectRequirements from "./pages/ProjectRequirements";
import TeamContract from "./pages/TeamContract";
import ExperimentalDesign from "./pages/ExperimentalDesign";
import DataVisualization from "./pages/DataVisualization";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutMe} />
      <Route path="/team" component={TheTeam} />
      <Route path="/project" component={ProjectOverview} />
      <Route path="/project/team-activities" component={TeamActivities} />
      <Route path="/project/partner" component={AboutPartner} />
      <Route path="/community-partner" component={CommunityPartner} />
      <Route path="/project/gantt-chart" component={GanttChart} />
      <Route path="/project/progress-meetings" component={ProgressMeetings} />
      <Route path="/project/reflections" component={Reflections} />
      <Route path="/project/brainstorming" component={Brainstorming} />
      <Route path="/project/requirements" component={ProjectRequirements} />
      <Route path="/project/team-contract" component={TeamContract} />
      <Route path="/project/experimental-design" component={ExperimentalDesign} />
      <Route path="/project/data-visualization" component={DataVisualization} />
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
          <WouterRouter hook={useHashLocation}>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-1">
                <AppRoutes />
              </main>
              <Footer />
            </div>
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
