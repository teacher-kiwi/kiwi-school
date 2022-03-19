import "./bootstrap-5.1.3-dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";

import Router from "./Router.js";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Router></Router>
      </ThemeProvider>
    </BrowserRouter>
  );
}
