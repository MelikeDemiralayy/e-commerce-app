import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartTotal, removeFromCart } from "../Store/cartSlice";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalAmount } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (id, count) => {
    dispatch(removeFromCart({ id, count }));
  };

  const handleGetTotal = () => {
    dispatch(getCartTotal());
  };

  useEffect(() => {
    handleGetTotal();
  }, [cart]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-md mx-auto p-4  h-screen">
      <h4 className="text-2xl font-bold mb-4">Sepetim</h4>

      {cart.map((item) => (
        <div key={item.id} className="flex items-center mb-4">
          <div className="mr-2">
            <img src={item.image} alt={item.title} width="50" />
          </div>
          <div className="flex-grow">
            <h6 className="text-lg">{item.title}</h6>
            <p className="text-xs">{`${item.price} TL - ${item.count} adet`}</p>
          </div>
          <div>
            <button
              className="btn btn-active btn-ghost"
              onClick={() => handleRemoveFromCart(item.id, item.count)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
      <div>
        <p className="mt-4 mb-2">Toplam Tutar: {totalAmount.toFixed(2)} TL</p>
        <div className="flex space-x-2">
          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
          >
            <svg
              aria-hidden="true"
              className="h-4 me-2 -ms-1 w-7"
              viewBox="0 0 601 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M359.01 179.504C359.01 278.647 278.639 359.004 179.5 359.004C80.361 359.004 0 278.643 0 179.504C0 80.3709 80.362 0.00390625 179.5 0.00390625C278.637 0.00390625 359.01 80.3749 359.01 179.504Z"
                fill="#D9222A"
              />
              <path
                d="M420.489 0C374.11 0 331.846 17.596 299.989 46.467C293.499 52.356 287.441 58.704 281.864 65.463H318.131C323.096 71.5 327.667 77.85 331.816 84.475H268.181C264.354 90.597 260.9 96.944 257.839 103.483H342.152C345.046 109.668 347.583 116.013 349.753 122.487H250.24C248.15 128.721 246.408 135.067 245.023 141.495H354.963C357.652 153.985 359.008 166.726 359.005 179.503C359.005 199.438 355.751 218.615 349.751 236.524H250.238C252.402 243.001 254.938 249.348 257.834 255.532H342.15C339.087 262.073 335.631 268.421 331.803 274.545H268.178C272.325 281.165 276.897 287.511 281.863 293.541H318.122C312.552 300.313 306.492 306.668 299.992 312.554C331.849 341.42 374.109 359.008 420.492 359.008C519.631 359.008 600.002 278.647 600.002 179.508C600.002 80.379 519.631 0.00799561 420.492 0.00799561"
                fill="#EE9F2D"
              />
              <path
                d="M576.07 279.564C576.07 276.365 578.662 273.763 581.866 273.763C585.07 273.763 587.662 276.365 587.662 279.564C587.662 282.763 585.07 285.365 581.866 285.365C578.662 285.365 576.07 282.763 576.07 279.564ZM581.866 283.972C584.3 283.971 586.273 281.998 586.274 279.564C586.274 277.132 584.303 275.162 581.872 275.16H581.866C579.437 275.157 577.466 277.123 577.462 279.551V279.565C577.46 281.998 579.43 283.971 581.862 283.973C581.863 283.972 581.865 283.972 581.866 283.972V283.972ZM581.083 282.112H579.896V277.016H582.045C582.495 277.016 582.953 277.016 583.35 277.27C583.763 277.549 583.996 278.041 583.996 278.549C583.996 279.12 583.658 279.653 583.112 279.861L584.05 282.111H582.735L581.956 280.094H581.085V282.112H581.083ZM582.878 280.195C582.478 280.195 582.136 279.861 582.136 279.464C582.136 279.069 582.478 278.733 582.878 278.733C583.274 278.733 583.611 279.069 583.611 279.464C583.611 279.861 583.274 280.195 582.878 280.195Z"
                fill="white"
              />
            </svg>
            Pay with MasterCard
          </button>
        </div>{" "}
        <button
          className="btn btn-contained btn-secondary"
          onClick={handleClearCart}
        >
          Sepeti Temizle
        </button>
      </div>
    </div>
  );
};

export default Cart;
