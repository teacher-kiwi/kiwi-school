import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      console.log(token);
    } else {
      navigate("/login");
    }
  }, [navigate]);
  return <h1>홈</h1>;
}
