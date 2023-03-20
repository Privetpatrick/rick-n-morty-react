import React from "react";
import s from "./character-card.module.scss";
import { useNavigate } from "react-router-dom";

import { ICharacter } from "../../../interfaces/character.interface";

interface Props {
  character: ICharacter;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  const navigate = useNavigate();

  const toCharacterPage = () => {
    navigate("/character/" + character.id);
  };

  return (
    <div className={s.container} onClick={toCharacterPage}>
      <div className={s.imageContainer}>
        <img
          className={s.characterImage}
          alt={character.name}
          src={character.image}
        />
      </div>

      <div className={s.characterInfo}>
        <div className={s.name}>{character.name}</div>
        <div className={s.species}>{character.species}</div>
      </div>
    </div>
  );
};

export default CharacterCard;
