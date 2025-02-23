import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./error.jsx";
import {
  Navbar,
  Hero,
  Events,
  Guildelines,
  Set1,
  Set2,
  Judges,
  About,
  Verify,
  Login,
} from "./components";
import BoxesLoader from "./components/hero/preload.jsx";
import ReactGA from "react-ga";

ReactGA.initialize("K6F7N5MR4K");
ReactGA.pageview(window.location.pathname + window.location.search);

const Main = () => {
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem("hasVisited") ? false : true;
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisited", "true"); // Mark as visited
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer if component unmounts
    }
  }, [loading]);

  return (
    <BrowserRouter>
      {loading ? (
        <BoxesLoader />
      ) : (
        <Routes>
          <Route
            path="*"
            element={
              <div className="bg-error">
                <Navbar /> <Error />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="bg">
                <Navbar />
                <Hero />
              </div>
            }
          />
          <Route
            path="/events"
            element={
              <div className="events-bg">
                <Navbar />
                <Events />
              </div>
            }
          />
          <Route
            path="/guidelines"
            element={
              <div className="guidelines-bg">
                <Navbar />
                <Guildelines />
              </div>
            }
          />
          <Route
            path="/set2"
            element={
              <div className="set2-bg">
                <Navbar />
                <Set2 />
              </div>
            }
          />
          <Route
            path="/set1"
            element={
              <div className="set1-bg">
                <Navbar />
                <Set1 />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <Navbar />
                <About />
              </div>
            }
          />
          <Route
            path="/judges"
            element={
              <div>
                <Navbar />
                <Judges />
              </div>
            }
          />
          <Route path="/qr/verify/:id" element={<Verify />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

// Render the component into the root div
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
