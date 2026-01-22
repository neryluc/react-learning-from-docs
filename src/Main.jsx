import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

const rootDiv = document.getElementById("root");

createRoot(rootDiv).render(<RouterProvider router={router} />);
