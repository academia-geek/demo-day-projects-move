import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Vehicles from "../components/Vehicles/Vehicles";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";


const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        console.log("User is logged in");
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [setIsLoggedIn, setChecking, isLoggedIn]);

  if (checking) {
    return <h1>Espere....</h1>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Home />
            </PublicRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <SignUp />
            </PublicRoutes>
          }
        />
        <Route
          path="/vehicles"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Vehicles />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
