import React, { useState } from "react";

const Translator = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "hi", name: "Hindi" },
    { code: "ta", name: "Tamil" },
    { code: "te", name: "Telugu" },
    { code: "ko", name: "Korean" }, // Added Korean
    { code: "ja", name: "Japanese" }
  ];

  const translateText = async () => {
    if (!text.trim()) return;
    try {
      const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(
          text
        )}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      const translated = data[0][0][0]; // extract translated text
      setTranslatedText(translated);
    } catch (error) {
      console.error("Translation failed:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 via-purple-900 to-orange-700 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-6">🌍 Language Translator</h1>

      <div className="bg-black rounded-2xl shadow-lg p-6 w-full max-w-lg">
        <textarea
          className="w-full p-3 border rounded-lg mb-4"
          rows="4"
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="flex gap-4 mb-4">
          <select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="p-2 border rounded-lg flex-1"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>

          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="p-2 border rounded-lg flex-1"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={translateText}
          className="w-full bg-indigo-800 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Translate
        </button>

        {translatedText && (
          <div className="mt-4 p-3 border rounded-lg bg-gray-900">
            <h2 className="font-semibold">Translated Text:</h2>
            <p>{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
