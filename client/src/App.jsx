// import { useState } from 'react'
// import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./LinkPages/Home";
import Initiative from "./LinkPages/Initiative";
import AboutDrishti from "./LinkPages/AboutDrishti";
import Form from "./LinkPages/Form";
import ThankYouPage from "./LinkPages/ThankYouPage"
// import HomePage from "./LinkPages/HomePage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-initiative" element={<Initiative />} />
          <Route path="/about-drishti" element={<AboutDrishti />} />
          <Route path="/donate" element={<Form />} />
          <Route path="/thank-you" element={<ThankYouPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
