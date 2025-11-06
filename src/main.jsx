import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./utils/context/AuthProvider";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { ModalProvider } from "./utils/context/Modal.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <AuthProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </AuthProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
