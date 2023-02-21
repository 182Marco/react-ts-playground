import React from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

// OLD DEPRECATED WAY -> WITH THIS YOU DON'T GET REACT 18 FEATURES
//render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById("root") as HTMLElement
// );

// NEW REACT 18 Gune 2022 WAY
createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <App />
        <ReactQueryDevtools />
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
