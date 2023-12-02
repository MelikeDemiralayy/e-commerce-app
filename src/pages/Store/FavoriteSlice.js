// FavoriteSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

export const FavoriteSlice = createSlice({
  name: "Favorites",
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      // Favori ekleme veya kaldırma işlemleri burada yapılır
      // ...
    },
    loadFavoritesFromLocalStorage: (state) => {
      if (typeof window !== "undefined") {
        const storedFavorites =
          JSON.parse(localStorage.getItem("favorites")) || [];
        state.favorite = storedFavorites;
      }
    },
  },
});

export const { setFavorite, loadFavoritesFromLocalStorage } =
  FavoriteSlice.actions;

export default FavoriteSlice.reducer;
