import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "@/Components/Navbar/Store/FavoriteSlice";

const ProductCards = ({ product }) => {
  const imageSrc = product.image || "placeholder_image_url";
  const title = product.title || "Ürün Başlığı Bulunamadı";

  const favorites = useSelector((state) => state.favorites.favorite);
  const favoriteState = favorites.find((item) => item.id === product.id);
  const dispatch = useDispatch();

  return (
    <div
      key={product.id}
      className=" mt-5 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
    >
      <div className="flex justify-center">
        {product.image && (
          <img
            className=" lg:h-[20rem] object-cover"
            src={imageSrc}
            alt={title}
          />
        )}
      </div>
      <div className="p-4 sm:p-6">
        <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          {title}
        </h5>
        <div className="flex items-center mb-3">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {product.price} TL
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <Link href={`/Detail/${product.id}`}>
            <button className="btn btn-outline mb-2 sm:mb-0">Learn More</button>
          </Link>
          <div>
            <span onClick={() => dispatch(setFavorite(product))}>
              {favoriteState ? (
                <MdFavorite color="red" size={30} />
              ) : (
                <MdFavoriteBorder size={30} />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCards.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCards;

