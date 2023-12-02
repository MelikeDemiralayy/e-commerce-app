// store.js
import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer, {
  loadFavoritesFromLocalStorage,
  setFavorite, // Burada setFavorite fonksiyonunu import edin
} from "./FavoriteSlice";

const Store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});

Store.dispatch(loadFavoritesFromLocalStorage());
Store.dispatch(setFavorite()); // Örnek bir kullanım

export default Store;
