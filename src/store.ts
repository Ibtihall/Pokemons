import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './pages/dashboard/slices';
import thunkMiddleware from 'redux-thunk';
const reducer = {
  pokemons: pokemonReducer
}
const store = configureStore({
  reducer: reducer,
  middleware: [thunkMiddleware],
})
export default store;


