import React from "react";
import NavBar from "./components/NavBar";
import CryptoSection from "./components/CryptoSection";

function App() {
  return (
    <div className="w-full h-screen bg-yellow-500 flex flex-col justify-between">
      <NavBar />
      <CryptoSection />
    </div>
  );
}

export default App;
