import axios from "axios";

import { ICharacter } from "../interfaces/character.interface";
import { GET_CHARACTERS, GET_CHARACTERS_BY_NAME } from "../shared/constants";

export const getCharacters = async (
  params: string = ""
): Promise<ICharacter[]> => {
  if (!params) {
    const response = await axios.get(GET_CHARACTERS);
    return response.data.results as ICharacter[];
  } else {
    const response = await axios.get(GET_CHARACTERS_BY_NAME + params);
    return response.data.results as ICharacter[];
  }
};

export const getCharacterById = async (id: string): Promise<ICharacter> => {
  const response = await axios.get(GET_CHARACTERS + "/" + id);
  return response.data;
};
