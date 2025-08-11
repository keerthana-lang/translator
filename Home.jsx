import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-r from-red-500 via-purple-900 to-orange-700">
      <h1 className="text-5xl font-bold mb-6">Welcome to My Multi-Tool App</h1>
      <p className="text-lg text-white/80 mb-12">Choose what you want to use today 🚀</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link to="/translator" className="bg-white/20 p-8 rounded-2xl hover:bg-white/30 transition">
          <h2 className="text-3xl font-semibold mb-2">🌏 Translator</h2>
          <p>Translate text into multiple languages instantly.</p>
        </Link>

        <Link to="/random" className="bg-white/20 p-8 rounded-2xl hover:bg-white/30 transition">
          <h2 className="text-3xl font-semibold mb-2">🎲 Random Generator</h2>
          <p>Generate random numbers, words, and more.</p>
        </Link>
      </div>
    </div>
  );
}
