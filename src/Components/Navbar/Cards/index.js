// ProductCards.js
import React from "react";
import Link from "next/link";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "@/pages/Store/FavoriteSlice";

const ProductCards = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorite);
  const isFavorite = favorites.some((item) => item._id === product._id);

  const handleFavoriteClick = () => {
    dispatch(setFavorite(product));
  };

  const imageSrc = product.image || "placeholder_image_url";
  const title = product.title || "Ürün Başlığı Bulunamadı";

  return (
    <div
      key={product._id}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      {product.image && (
        <img
          className="p-8 rounded-t-lg w-full"
          src={imageSrc}
          alt="product image"
        />
      )}
      <div className="px-5 py-4 md:p-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="flex items-center mt-2.5 mb-5"></div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
            {product.price}
          </span>
          <div className="flex mt-4 md:mt-0">
            <Link href={`/detail/${product._id}`}>Learn More</Link>
            <button onClick={handleFavoriteClick} className="ml-4">
              {isFavorite ? (
                <MdFavorite size={24} color="red" />
              ) : (
                <MdFavoriteBorder size={24} color="gray" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
