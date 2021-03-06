import axios from "axios";

require("dotenv").config();

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`
});

export const getFirePokemon = async () => {
  const { data } = await api.get("type/fire/");
  return data.pokemon;
};

export const getWaterPokemon = async () => {
  const { data } = await api.get("type/water/");
  return data.pokemon;
};

export const getGrassPokemon = async () => {
  const { data } = await api.get("type/grass/");
  return data.pokemon;
};

export const getPokemonInfo = async (id: string) => {
  const { data } = await api.get(`pokemon/${id}`);
  return data;
};
