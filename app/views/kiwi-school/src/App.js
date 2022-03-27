import "./bootstrap-5.1.3-dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router.js";

export default function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
}
