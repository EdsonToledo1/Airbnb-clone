import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "../context/context";
import Home from "../pages/Home";
import Host from "../pages/Host";
import Homes from "../pages/Homes";
import Login from "../pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/host" element={<Host />} />
          <Route exact path="/homes/:location" element={<Homes />} />
          <Route exact path="/signup_login" element={<Login />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
