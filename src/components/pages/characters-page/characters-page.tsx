import React, { useState, useEffect } from "react";
import s from "./characters-page.module.scss";

import CharacterCard from "./character-card";
import { ICharacter } from "../../../interfaces/character.interface";
import { getCharacters } from "../../../services/character.service";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../../services/local-storage.service";

const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[] | undefined>(
    undefined
  );

  const [form, setForm] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const storageValue = getLocalStorage();
    if (storageValue) {
      setForm(storageValue);
      setInputValue(storageValue);
    }

    getCharacters(form)
      .then((data) => setCharacters(data))
      .catch(() => {
        setCharacters(undefined);
      });
  }, [form]);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(event.target.value);
    setInputValue(event.target.value);
    setLocalStorage(event.target.value);
  };

  return (
    <div className={s.container}>
      <div className={s.mainImg}></div>
      <div className={s.searchContainer}>
        <form>
          <div className={s.searchIcon}></div>
          <input
            className={s.search}
            type="text"
            placeholder="Filter by name..."
            value={inputValue}
            onChange={inputHandler}
          />
        </form>
      </div>
      <div className={s.charactersContainer}>
        {characters &&
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
            ></CharacterCard>
          ))}

        {!characters && (
          <div className={s.noResults}>Sorry no characters with such name.</div>
        )}
      </div>
    </div>
  );
};

export default CharactersPage;
