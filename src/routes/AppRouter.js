import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Profile from "../components/Profile";
import RegisterPrest from "../components/RegisterPrest";
import Sidebar from "../components/Sidebar";
import SignUp from "../components/SignUp/SignUp";
import Vehicles from "../components/Vehicles/Vehicles";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";


const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    //obtenga el usuario
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        console.log("User is logged in");
        setIsLoggedIn(true);

        //traer el token 
        user.getIdToken()
        .then((token)=>{console.log('El token es: ', token)})

      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [setIsLoggedIn, setChecking, isLoggedIn]);

  if (checking) {
    return <div>
    <Spinner animation="border" variant="success" />
</div>
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
              <Footer/>
            </PublicRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <SignUp />
              <Footer/>
            </PublicRoutes>
          }
        />
        
        <Route
          path="/vehicles"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar/>
              <Vehicles />
              <Footer/>
            </PrivateRoutes>
          }
        />
      
      <Route
          path="/profile"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar/>
              <Profile />
              <Footer/>
            </PrivateRoutes>
          }
        />

<Route
          path="/rpresta"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar/>
              <RegisterPrest />
              <Footer/>
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
