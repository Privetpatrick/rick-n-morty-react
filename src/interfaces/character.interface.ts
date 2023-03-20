export interface ICharacter {
  id: number;
  name: string;
  gender: string;
  image: string;
  status: string;
  species: string;
  origin: {
    name: string;
    url: string;
  };
  type?: string;
}
