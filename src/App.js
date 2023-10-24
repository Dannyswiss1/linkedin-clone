import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route path='/home' element={<Header /> } /> */}
          <Route path='/home' element={<Home />} />
          {/* <Route>
          <Route path='/home' element={<Header /> } />
          <Route path='/home' element={<Home /> }  />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
