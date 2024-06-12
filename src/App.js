import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/MainPage/Main";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Events from "./components/Events/Events";
import Blogs from "./components/Blogs/Blogs";
import ViewBlog from "./components/Blogs/ViewBlog";
import ViewGallery from "./components/Gallery/ViewGallery";
import Donate from "./components/Donate/Donate";

function App() {
  return (
    <body>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/Blog/:id" element={<ViewBlog />} />
        <Route path="/Gallery/:id" element={<ViewGallery />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
      <Footer />
    </body>
  );
}

export default App;
