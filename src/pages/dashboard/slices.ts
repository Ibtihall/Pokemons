import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PokemonDataService from "./service";

export const getPokemons = createAsyncThunk(
  "pokemon",
  async (page:number) => {
    const res = await PokemonDataService.getAll(page);
    return res.data.results;
  }
);

export const getPokemonByName = createAsyncThunk(
  "pokemon/:name",
  async ( name:string ) => {
    const res = await PokemonDataService.get(name);
    return res.data;
  }
);
const initialState:any ={
    pokemons:[],
    status: null,
    test: null,
}
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers:{},
  extraReducers: {
    [getPokemons.fulfilled.toString()]: (state, action) => {
      state.pokemons = [
        ...state.pokemons,
        ...action.payload,

      ];
      state.status='success'
    },
    [getPokemonByName.fulfilled.toString()]: (state, action) => {
      state.test = {...action.payload};
    },
  },
});
const { reducer } = pokemonSlice;
export default reducer;