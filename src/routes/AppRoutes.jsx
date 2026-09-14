import { Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import VerifyEmail from "../Pages/auth/VerifyEmail";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsAndConditions from "../Pages/TermsAndConditions";
import ForgotPassword from "../Components/ForgotPassword";
import ResetLink from "../Pages/ResetLink";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/signin" element={<Signin />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/privacy" element={<PrivacyPolicy />} />

      <Route path="/terms" element={<TermsAndConditions />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/verify-email" element={<VerifyEmail />} />

       <Route path="/reset-link" element={<ResetLink />} />


    </Routes>
  );
};