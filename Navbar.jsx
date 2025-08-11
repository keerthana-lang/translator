import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black/75 p-6 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-4xl text-white px-2 py-4 text-left font-bold">🌍 My Multi-Tool</h1>
        <div className="flex gap-9">
          <Link to="/" className="hover:text-yellow-300 text-xl">Home</Link>
          <Link to="/translator" className="hover:text-yellow-200 text-xl">Translator</Link>
          <Link to="/random" className="hover:text-yellow-200 text-xl">Random Generator</Link>
        </div>
      </div>
    </nav>
  );
}
