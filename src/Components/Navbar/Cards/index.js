import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "@/pages/Store/FavoriteSlice";

const ProductCards = ({ product }) => {
  const imageSrc = product.image || "placeholder_image_url";
  const title = product.title || "Ürün Başlığı Bulunamadı";

  const favorites = useSelector((state) => state.favorites.favorite);
  const favoriteState = favorites.find((item) => item.id === product.id);
  const dispatch = useDispatch();

  return (
    <div
      key={product.id}
      className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      {product.image && (
        <img className="p-8 rounded-t-lg w-full" src={imageSrc} alt={title} />
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
            <Link href={`/Detail/${product.id}`}>
              <button className="btn btn-outline">Learn More</button>
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
