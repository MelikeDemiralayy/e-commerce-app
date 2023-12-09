import { setFilter } from "@/pages/Store/FavoriteSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setFilter(query));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ara..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Ara</button>
    </div>
  );
};
export default SearchBar;
