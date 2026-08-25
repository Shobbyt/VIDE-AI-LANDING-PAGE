import { Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import VerifyEmail from "../Pages/auth/VerifyEmail";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/signin" element={<Signin />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/verify-email" element={<VerifyEmail />} />
    </Routes>
  );
};