import { createRootRoute, createRoute } from "@tanstack/react-router";
import WelcomePage from "./routes/WelcomePage";
import ShantiHeader from "./components/ShantiHeader"; // Import the ShantiHeader component
import { Outlet } from "@tanstack/react-router";
import BoardAndTrainForm from "./routes/BoardAndTrainForm";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"; // Import the devtools
import AboutPage from "./routes/AboutPage";
import AdminDashboard from "./routes/admin";

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <ShantiHeader />
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  ),
});

// Define child routes
export const welcomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: WelcomePage,
});

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: BoardAndTrainForm,
});

export const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminDashboard,
});

// Create the route tree
export const routeTree = rootRoute.addChildren([
  welcomeRoute,
  aboutRoute,
  contactRoute,
  adminRoute,
]);
