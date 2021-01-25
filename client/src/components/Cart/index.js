import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartContainer } from "./style.js";
import {
  getCart,
  deleteProduct,
  changeQuantity,
  getGuestCart,
  deleteProductGuest,
  changeQuantityGuest,
  changeQGuestLS,
  showCart,
} from "../../redux/actions/cart";
import { Link } from "react-router-dom";

export default function Cart() {
  const user = useSelector(({ users }) => users.user);
  const cart = useSelector(({ cart }) => cart.cart);
  const show = useSelector(({ cart }) => cart.showCart);
  const dispatch = useDispatch();
  const status = useSelector(({ cart }) => cart.status);
  const urlActual = window.location.href;
  const userId = user?.id;

  useEffect(() => {
    if (user?.id) dispatch(getCart(user.id));
    if (!user) dispatch(getGuestCart(cart));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const restQuantity = (quantity, productId, product) => {
    if (quantity > 1) {
      quantity -= 1;
      if (user) dispatch(changeQuantity(user?.id, quantity, productId));
      else {
        dispatch(changeQuantityGuest(quantity, productId, product));
        dispatch(changeQGuestLS(quantity, productId));
      }
    }
  };

  const addQuantity = (quantity, productId, stock, product) => {
    if (quantity < stock) {
      quantity += 1;
      if (user) dispatch(changeQuantity(user?.id, quantity, productId));
      else {
        dispatch(changeQuantityGuest(quantity, productId, product));
        dispatch(changeQGuestLS(quantity, productId));
      }
    }
  };

  const handleDelete = (productId) => {
    if (user) {
      dispatch(deleteProduct(user?.id, productId));
    }
    if (!user) {
      dispatch(deleteProductGuest(productId));
    }
  };

  if (
    urlActual === "http://localhost:3000/cartDetail" ||
    urlActual === "http://localhost:3000/" + userId + "/checkout"
  ) {
    return null;
  } else if (show) {
    if (status === "loading") return <></>;
    return (
      <CartContainer>
        {!cart?.length ? (
          <h3>You didn't add any products yet!</h3>
        ) : (
          <>
            <h4 className="cart_title">My products:</h4>
            <div className="products">
              {cart?.map((product, i) => {
                const { quantity } = product.Order_Product;
                return (
                  <div className="product_line" key={i}>
                    <h3 className="product_name">{product.name}</h3>
                    <div className="product_detail">
                      <div className="quantity">
                        <button
                          onClick={() =>
                            restQuantity(quantity, product.id, product)
                          }
                          className="product_btn"
                        >
                          -
                        </button>
                        <span>Quantity: {quantity}</span>
                        <button
                          onClick={() =>
                            addQuantity(
                              quantity,
                              product.id,
                              product.stock,
                              product
                            )
                          }
                          className="product_btn"
                        >
                          +
                        </button>
                      </div>
                      {/* <span>Price: ${product.price.toFixed(2)}</span> */}
                      <span>${product.price.toFixed(2)}</span>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="product_btn"
                      >
                        x
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="product_line">
                <div className="total">
                  <span className="total_title">Total:</span>
                  <span className="total_price">
                    $
                    {cart
                      ?.reduce((acc, curr) => {
                        return acc + curr.price * curr.Order_Product.quantity;
                      }, 0)
                      .toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="finish">
              <Link
                onClick={() => dispatch(showCart(!show))}
                to={`/cartDetail`}
              >
                More info
              </Link>
            </div>
          </>
        )}
      </CartContainer>
    );
  } else return null;
}
