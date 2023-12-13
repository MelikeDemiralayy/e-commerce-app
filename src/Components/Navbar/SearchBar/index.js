import { setFilter } from "@/pages/Store/FavoriteSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoSearch } from "react-icons/io5";

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
        placeholder="Search Product..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>
        <IoSearch size={20} />
      </button>
    </div>
  );
};
export default SearchBar;
