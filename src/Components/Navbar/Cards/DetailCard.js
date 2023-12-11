import Link from 'next/link';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/pages/Store/cartSlice";

const DetailCard = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrease = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        count: count,
      })
    );
  };

  if (!product) {
    return <div>Ürün detayı bulunamadı.</div>;
  }

  return (
    <div>
      <Link href={`/Detail/${product.id}`}>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={product.image} alt="Product" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">{product.price}</div>{" "}
            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                <button
                  className="bg-primary text-white px-2 py-1 rounded"
                  onClick={handleDecrease}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <span className="w-8 text-center">{count}</span>
                <button
                  className="bg-primary text-white px-2 py-1 rounded"
                  onClick={handleIncrease}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
              <button
                className="bg-primary text-white px-4 py-2 rounded"
                onClick={handleAddToCart}
              >
                Add to Cart <MdOutlineAddShoppingCart size={25} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 inline-block ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DetailCard;
