import React from "react";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Analytics from "./componets/Analytics";
import Newletter from "./componets/Newletter";
import Card from "./componets/Card";
import Footer from "./componets/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newletter/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
