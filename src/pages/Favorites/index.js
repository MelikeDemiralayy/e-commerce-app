// FavoritesPage.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadFavoritesFromLocalStorage } from "../Store/FavoriteSlice";
import ProductCards from "@/Components/Navbar/Cards";

function FavoritesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch favorites data on the client side
    dispatch(loadFavoritesFromLocalStorage());
  }, []);

  const favorites = useSelector((state) => state.favorites.favorite);

  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-8">
      {favorites.length > 0 ? (
        favorites.map((favorite) => (
          <ProductCards key={favorite._id} product={favorite} />
        ))
      ) : (
        <p>No favorites found.</p>
      )}
    </div>
  );
}

export default FavoritesPage;
