import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
