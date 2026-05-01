import { useState, useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import PasswordScreen from "./components/PasswordScreen";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("authenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <PasswordScreen onAuthenticate={() => setIsAuthenticated(true)} />;
  }

  return <RouterProvider router={router} />;
}
