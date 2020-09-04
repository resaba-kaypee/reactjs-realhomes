import React from "react";
import ReactDOM from "react-dom";
import PropertyState from "./context/property/PropertyState";
import AuthState from "./context/auth/AuthState";
import FormState from "./context/form/FormState";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/main.css";
import "./assets/pagination.css";
import "./assets/spinner.css";
import "@brainhubeu/react-carousel/lib/style.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthState>
        <PropertyState>
          <FormState>
            <App />
          </FormState>
        </PropertyState>
      </AuthState>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
