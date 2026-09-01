import { AppRoutes } from "./routes/AppRoutes";
import AnimatedBackground from "./Components/AnimatedBackground";

const App = () => {
  return (
    <>
      <AnimatedBackground />

      <AppRoutes />
    </>
  );
};

export default App;