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
    isLoading: true,
    pokeDetails: null,
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
      state.isLoading=false;
    },
    [getPokemons.pending.toString()]: (state, action) => {
      state.isLoading=true;
    },
    [getPokemonByName.fulfilled.toString()]: (state, action) => {
      state.pokeDetails = {...action.payload};
      state.isLoading=false;

    },
    [getPokemonByName.pending.toString()]: (state, action) => {
      state.isLoading=true;
    },
  },
});
const { reducer } = pokemonSlice;
export default reducer;