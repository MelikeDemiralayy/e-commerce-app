import { configureStore } from "@reduxjs/toolkit";
import FavoriteReducer, {
  loadFavoritesFromLocalStorage,
} from "./FavoriteSlice";
import cartReducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    favorites: FavoriteReducer,
    cart: cartReducer,
  },
});
store.dispatch(loadFavoritesFromLocalStorage());
