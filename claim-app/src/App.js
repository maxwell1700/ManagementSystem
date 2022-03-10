import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import LinearStepper from "./components/Form/LinearStepper";

import { useEffect, useState } from "react";

function App() {
  // Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch("/auth", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.status === 200) {
        setauth(true);
        setauth1(false);
      }
      if (res.status === 401) {
        setauth(false);
        setauth1(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      <Navbar auth={auth1} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route
          exact
          path="/login"
          element={auth ? <Home /> : <Login />}
          auth={auth1}
        />
        <Route
          exact
          path="/register"
          element={auth ? <Home /> : <Register />}
        />
        <Route
          exact
          path="/dashboard"
          element={auth1 ? <Home /> : <Dashboard />}
        />
        <Route
          exact
          path="/logout"
          element={auth ? <Logout /> : <Home />}
          auth={auth}
        />

        <Route
          exact
          path="/form"
          element={auth ? <LinearStepper/>: <Login />}
        />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
