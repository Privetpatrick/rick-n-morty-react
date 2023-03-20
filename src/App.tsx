import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OneCharacterPage from "./components/one-character-page/one-character-page";

import CharactersPage from "./components/pages/characters-page/characters-page";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/character/:id" element={<OneCharacterPage />} />
          <Route path="*" element={<Navigate to="/characters" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
