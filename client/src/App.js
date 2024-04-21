import React, { Component } from "react";
import logo from "./logo.jpg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home  from "./Components/Home";
import Banner from "./Components/Banner";

function App() {
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/home")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return ( <Router>
      <Routes>
      <Route index element={<Banner />} />
      <Route path="/home" element={<Home />} />
      </Routes>
  </Router>
  );
}

export default App;