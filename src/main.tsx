import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "./graphql/queries.ts";
import { NotificationContextProvider } from "./context/NotificationContext.tsx";


createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={apolloClient}>
    <NotificationContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </NotificationContextProvider>
  </ApolloProvider>
  
);
