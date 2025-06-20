import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/contact" className="[&.active]:font-bold">
          About
        </Link>{" "}
        <Link to="/admin" className="[&.active]:font-bold">
          Admin Dashboard
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  ),
});