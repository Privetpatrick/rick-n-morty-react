import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import s from "./one-character-page.module.scss";
import {
  getCharacterById,
  getCharacterByIdFromArray,
} from "../../../services/character.service";
import { ICharacter } from "../../../interfaces/character.interface";
import { CharactersContext } from "../../../contexts/characters.context";

const OneCharacterPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const [id, setId] = useState<string>(params.id!);
  const { characters, setCharacters } = useContext(CharactersContext);

  const [character, setCharacter] = useState<ICharacter>();
  const navigate = useNavigate();

  useEffect(() => {
    if (characters.length === 0) {
      getCharacterById(id).then((data) => setCharacter(data));
    } else {
      const character = getCharacterByIdFromArray(id, characters);
      setCharacter(character);
    }
  }, [id]);

  const back = () => {
    navigate("/characters");
  };

  return (
    <div className={s.container}>
      <button className={s.back} onClick={back}>
        <div className={s.backIcon}></div>
        <div>Go back</div>
      </button>

      <img
        className={s.characterImage}
        src={character?.image}
        alt={character?.name}
      />
      <h1 className={s.name}>{character?.name}</h1>
      <div className={s.informationContainer}>
        <h4 className={s.header}>Information</h4>
        <div className={s.infoItem}>
          <p className={s.title}>Gender</p>
          <p className={s.content}>{character?.gender}</p>
          <div className={s.divider}></div>
        </div>
        <div className={s.infoItem}>
          <p className={s.title}>Status</p>
          <p className={s.content}>{character?.status}</p>
          <div className={s.divider}></div>
        </div>
        <div className={s.infoItem}>
          <p className={s.title}>Species</p>
          <p className={s.content}>{character?.species}</p>
          <div className={s.divider}></div>
        </div>
        <div className={s.infoItem}>
          <p className={s.title}>Origin</p>
          <p className={s.content}>{character?.origin.name}</p>
          <div className={s.divider}></div>
        </div>
        <div className={s.infoItem}>
          <p className={s.title}>Type</p>
          <p className={s.content}>
            {character?.type ? character?.type : "Unknown"}
          </p>
          <div className={s.divider}></div>
        </div>
      </div>
    </div>
  );
};

export default OneCharacterPage;
