import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

export const FavoriteSlice = createSlice({
  name: "Favorites",
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      if (typeof window !== "undefined") {
        const currentFavorites =
          JSON.parse(localStorage.getItem("Favorites")) || [];
        let updatedFavorites;
        if (currentFavorites.find((item) => item.id === action.payload.id)) {
          updatedFavorites = currentFavorites.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          updatedFavorites = [...currentFavorites, action.payload];
        }
        localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
        state.favorite = updatedFavorites;
      }
    },
    loadFavoritesFromLocalStorage: (state) => {
      if (typeof window !== "undefined") {
        const storedFavorites =
          JSON.parse(localStorage.getItem("Favorites")) || [];
        state.favorite = storedFavorites;
      }
    },
  },
});

export const { setFavorite, loadFavoritesFromLocalStorage } =
  FavoriteSlice.actions;

export default FavoriteSlice.reducer;
