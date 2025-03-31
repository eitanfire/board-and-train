import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications"; // If you're using notifications
import { theme } from "./theme";
import { routeTree } from "./routeTree";

// Import all necessary Mantine styles
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css"; // If using dates
import "@mantine/notifications/styles.css"; // If using notifications

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorSchemeScript forceColorScheme="light" />
    <MantineProvider theme={theme} forceColorScheme="light">
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
