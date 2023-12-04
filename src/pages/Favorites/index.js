import { useSelector, useDispatch } from "react-redux";
import { loadFavoritesFromLocalStorage } from "../Store/FavoriteSlice";
import { useEffect, useState } from "react";
import ProductCards from "@/Components/Navbar/Cards";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFavoritesFromLocalStorage());
  }, [dispatch]);
  const reduxFavorites = useSelector((state) => state.favorites.favorite);
  useEffect(() => {
    setFavorites(reduxFavorites);
  }, [reduxFavorites]);
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-8">
      {favorites.length > 0 ? (
        favorites.map((favorite) => (
          <ProductCards key={favorite.id} product={favorite} />
        ))
      ) : (
        <p>No favorites found.</p>
      )}
    </div>
  );
}

export default FavoritesPage;
