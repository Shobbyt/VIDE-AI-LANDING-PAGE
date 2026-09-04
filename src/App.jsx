import { useEffect, useState } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import AnimatedBackground from "./Components/AnimatedBackground";
import LoadingScreen from "./Components/LoadingScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}

      <AnimatedBackground />

      <AppRoutes />
    </>
  );
};

export default App;