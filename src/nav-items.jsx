import { Home, Code, MessageSquare } from "lucide-react";
import Index from "./pages/Index.jsx";
import Build from "./pages/Build.jsx";
import Chat from "./pages/Chat.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Build",
    to: "/build",
    icon: <Code className="h-4 w-4" />,
    page: <Build />,
  },
  {
    title: "Chat",
    to: "/chat",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <Chat />,
  },
];
