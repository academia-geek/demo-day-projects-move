import { getAuth, onAuthStateChanged, onIdTokenChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailCar from "../components/DetailCar";
import Footer from "../components/Footer";
import Home from "../components/Home/Home";
import HomePrivate from "../components/HomePrivate";
import Login from "../components/Login/Login";
import NavbarPriv from "../components/NavbarPriv";
import Profile from "../components/Profile";
import RegisterPrest from "../components/Prestador/RegisterPrest";
import Sidebar from "../components/Sidebar";
import SignUp from "../components/SignUp/SignUp";
import GamaAlta from "../components/Vehicles/GamaAlta";
import GamaMedia from "../components/Vehicles/GamaMedia";
import Economicos from "../components/Vehicles/Economicos";
import Electricos from "../components/Vehicles/Electricos";
import Vehicles from "../components/Vehicles/Vehicles";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import HomeP from "../components/Prestador/HomeP";
import DetailPrestador from "../components/Prestador/DetailPrestador";

const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    false || localStorage.getItem("auth") === true
  );

  const [token, setToken] = useState("");
  useEffect(() => {
    const auth = getAuth();

    //obtenga el usuario
    onIdTokenChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        localStorage.setItem("auth", "true");

        //traer el token
        user.getIdToken().then((token) => {
          setToken(token);
          localStorage.setItem("token", token);
        });
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [setIsLoggedIn, setChecking, isLoggedIn]);

  if (checking) {
    return (
      <div>
        <Spinner animation="border" variant="success" />
      </div>
    );
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
              <Footer />
            </PublicRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <SignUp />
              <Footer />
            </PublicRoutes>
          }
        />
        <Route
          path="/homepriv"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar />
              <HomePrivate />
              <Footer />
            </PrivateRoutes>
          }
        />
        <Route
          path="/vehicles"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar />
              <Vehicles />
              <Footer />
            </PrivateRoutes>
          }
        />
        <Route
          path="/galta"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar />
              <NavbarPriv />
              <GamaAlta />
              <Footer />
            </PrivateRoutes>
          }
        />
        <Route
          path="/gmedia"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar />
              <NavbarPriv />
              <GamaMedia />
              <Footer />
            </PrivateRoutes>
          }
        />
        <Route
          path="/economicos"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar />
              <NavbarPriv />
              <Economicos />
              <Footer />
            </PrivateRoutes>
          }
        />
        <Route
          path="/electricos"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar />
              <NavbarPriv />
              <Electricos />
              <Footer />
            </PrivateRoutes>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar />
              <Profile />
              <Footer />
            </PrivateRoutes>
          }
        />
       
        <Route
          path="/detail/:id"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar />
              <DetailCar />
              <Footer />
            </PrivateRoutes>
          }
        />

        <Route
          path="/rpresta"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar />
              <RegisterPrest />
              <Footer />
            </PrivateRoutes>
          }
        />
        <Route
          path="/homep"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar />
              <HomeP />
              <Footer />
            </PrivateRoutes>
          }
        />
        <Route
          path="/detailp/:id"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <Sidebar />
              <DetailPrestador />
              <Footer />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
