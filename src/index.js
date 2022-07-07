import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataHabitProvider } from "../src/context/data-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataHabitProvider>
      <App />
    </DataHabitProvider>
  </React.StrictMode>
);
