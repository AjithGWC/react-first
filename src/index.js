import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Sample from "./sample"
import Index1 from "./index1"
import Index2 from "./index2"
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <div className="grid grid-cols-4 gap-4 p-2 mt-10">
      <App />
      <Sample />
      <Index1 />
      <Index2 />
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
