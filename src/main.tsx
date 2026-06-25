// import * as Sentry from "@sentry/react";
// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";

// Sentry.init({
//   dsn: import.meta.env["VITE_SENTRY_DSN"] as string | undefined,
//   environment: import.meta.env.MODE,
// });

// createRoot(document.getElementById("root")!).render(
//   <Sentry.ErrorBoundary fallback={<p>An error occurred, please refresh.</p>}>
//     <App />
//   </Sentry.ErrorBoundary>,
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
