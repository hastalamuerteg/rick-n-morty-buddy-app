//Services
import { getData } from "./http";

export async function apiGetCharacters() {
  const { results } = await getData("character");
  return results;
}

export async function apiGetCharactersById(id: number) {
  const response = await getData(`character/${id}`);
  return response;
}

export async function apiGetCharacterByName(name: string) {
  const { results } = await getData(`character/?name=${name}`);
  return results;
}
