import { useEffect, useState } from "react";

function VerifyEmail() {
  const [status, setStatus] = useState(() => (
    new URLSearchParams(window.location.search).has("uid")
      ? "checking"
      : "error"
  ));

  useEffect(() => {
    const uid = new URLSearchParams(window.location.search).get("uid");

    if (!uid) {
      return;
    }

    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
    fetch(`${apiUrl}/auth/verification-status/${encodeURIComponent(uid)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Verification status request failed.");
        }
        return response.json();
      })
      .then((data) => setStatus(data.verified ? "success" : "pending"))
      .catch(() => setStatus("error"));
  }, []);

  if (status === "checking") {
    return <h2>Checking your verification...</h2>;
  }

  if (status === "pending") {
    return <p>Your email is not verified yet. Please use the link in your email.</p>;
  }

  if (status === "error") {
    return <p>We could not confirm your email verification.</p>;
  }

  return (
    <div>
      <h2>Email verified</h2>
      <p>Your email has been verified successfully. You can now log in.</p>

      <a href="/login">Go to Login</a>
    </div>
  );
}

export default VerifyEmail;