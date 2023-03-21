import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OneCharacterPage from "./components/pages/one-character-page/one-character-page";

import CharactersPage from "./components/pages/characters-page/characters-page";
import { CharactersProvider } from "./contexts/characters.context";

function App() {
  return (
    <BrowserRouter>
      <CharactersProvider>
        <main>
          <Routes>
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/character/:id" element={<OneCharacterPage />} />
            <Route path="*" element={<Navigate to="/characters" />} />
          </Routes>
        </main>
      </CharactersProvider>
    </BrowserRouter>
  );
}

export default App;
