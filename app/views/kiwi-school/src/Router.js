import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default Router;
