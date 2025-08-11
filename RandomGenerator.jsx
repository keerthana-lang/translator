import React, { useState } from "react";

const words = ["Sunshine", "Adventure", "Galaxy", "Harmony", "Freedom", "Sparkle", "Infinity"];
const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "Your limitation—it’s only your imagination."
];
const jokes = [
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why can’t your nose be 12 inches long? Because then it’d be a foot."
];

export default function RandomGenerator() {
  const [category, setCategory] = useState("word");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const generateRandom = () => {
    let randomItem = "";
    if (category === "word") {
      randomItem = words[Math.floor(Math.random() * words.length)];
    } else if (category === "quote") {
      randomItem = quotes[Math.floor(Math.random() * quotes.length)];
    } else if (category === "joke") {
      randomItem = jokes[Math.floor(Math.random() * jokes.length)];
    }

    setResult(randomItem);
    setHistory((prev) => [randomItem, ...prev].slice(0, 5)); // Keep only last 5
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-500 via-purple-900 to-orange-700 text-white p-6">
      <h1 className="text-3xl font-bold mb-4 drop-shadow-lg">Random Generator</h1>

      <div className="bg-black/40 p-8 rounded-xl shadow-lg w-90 h-70 max-w-md text-center">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-4 rounded-xl mb-4 text-white bg-black w-full"
        >
          <option value="word">Random Word</option>
          <option value="quote">Random Quote</option>
          <option value="joke">Random Joke</option>
        </select>

        <button
          onClick={generateRandom}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg mb-4"
        >
          Generate
        </button>

        {result && (
          <div>
            <p className="text-lg font-semibold drop-shadow-lg mb-2">{result}</p>
            <button
              onClick={copyToClipboard}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
            >
              Copy
            </button>
          </div>
        )}
      </div>

      {history.length > 0 && (
        <div className="mt-6 bg-black/40 p-4 rounded-xl w-full max-w-md">
          <h2 className="text-lg font-bold mb-2">History (last 5)</h2>
          <ul className="list-disc list-inside">
            {history.map((item, index) => (
              <li key={index} className="drop-shadow-lg">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
