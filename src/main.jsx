import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./Context/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import {UtilsContextProvider} from './Context/UtilsContext.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <StrictMode>
      <UtilsContextProvider>
        <App/>
      </UtilsContextProvider>
      </StrictMode>
      
    </AuthProvider>
  </BrowserRouter>
);
