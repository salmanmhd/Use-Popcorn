import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StartRating";
import "./index.css";
import App from "./App";
import Position from "./Position";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Position />
  </React.StrictMode>
);
