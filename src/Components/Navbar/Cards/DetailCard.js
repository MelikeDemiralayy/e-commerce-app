import Link from 'next/link';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Components/Navbar/Store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    toast.success("Ürün başarıyla sepete eklendi");
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
    <div className="h-screen ">
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={product.image} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <div>
            {" "}
            <h3 className="price">{product.price} TL</h3>
          </div>
          <div className="card-actions justify-between">
            <div>
              <button
                className="bg-grey text-white px-2 py-1 rounded"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <span className="w-8 text-center">{count}</span>
              <button
                className="bg-grey text-white px-2 py-1 rounded"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
            <div>
              {" "}
              <Link href={`/update-product/${product.id}`}>Update Product</Link>
            </div>
            <div>
              <button onClick={handleAddToCart}>
                {" "}
                <MdOutlineAddShoppingCart size={25} />
              </button>
              <ToastContainer position="bottom-right" autoClose={3000} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;

