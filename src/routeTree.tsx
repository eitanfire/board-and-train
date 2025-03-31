import { createRootRoute, createRoute } from "@tanstack/react-router";
import WelcomePage from "./routes/WelcomePage";
import AhimsaHeader from "./components/Header"; // Import the AhimsaHeader component
import { Outlet } from "@tanstack/react-router";
import BoardAndTrainForm from "./routes/BoardAndTrainForm";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"; // Import the devtools
import AboutPage from "./routes/AboutPage";

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <AhimsaHeader />
      <Outlet />
      <TanStackRouterDevtools />
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

// Create the route tree
export const routeTree = rootRoute.addChildren([
  welcomeRoute,
  aboutRoute,
  contactRoute,
]);
