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
    <div className="flex flex-col items-center justify-center">
      <h4 className="text-2xl font-bold mb-2">Sepetim</h4>

      {cart.map((item) => (
        <div key={item.id} className="flex items-center mb-2">
          <div className="mr-2">
            <img src={item.image} alt={item.title} width="100" />
          </div>
          <div className="flex-grow">
            <h6 className="text-xl">{item.title}</h6>
            <p className="text-sm">{`${item.price} TL - ${item.count} adet`}</p>
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

      <p className="mt-auto mb-2">Total Tutar: {totalAmount.toFixed(2)} TL</p>

      <div className="flex space-x-2">
        <button className="btn btn-contained btn-primary">Satın Al</button>
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
