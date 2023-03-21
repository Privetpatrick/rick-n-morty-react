import React, { useState, createContext } from "react";

import { ICharacter } from "../interfaces/character.interface";

interface ICharactersContext {
  characters: ICharacter[];
  setCharacters: React.Dispatch<React.SetStateAction<ICharacter[]>>;
}

const initialState = {
  characters: [],
  setCharacters: (characters: ICharacter[]) => {},
} as ICharactersContext;

const CharactersContext = createContext<ICharactersContext>(initialState);

interface Props {
  children: React.ReactNode;
}

const CharactersProvider: React.FC<Props> = ({ children }) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersProvider, CharactersContext };
