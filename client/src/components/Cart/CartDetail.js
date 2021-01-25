import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartDetailContainer } from "./CartDetail_style.js";
import {
  deleteProduct,
  changeQuantity,
  deleteCart,
  deleteProductGuest,
  changeQuantityGuest,
  deleteCartGuest,
  changeQGuestLS,
} from "../../redux/actions/cart";
import { Link } from "react-router-dom";
import StyledLoading from "../StyledComponents/StyledLoading.jsx";

export default function CartDetail() {
  const user = useSelector(({ users }) => users.user);
  const cart = useSelector(({ cart }) => cart.cart);
  const dispatch = useDispatch();
  const status = useSelector(({ cart }) => cart.status);
  const [click , setClick] = useState(false);
  const locationMail = window.location.href
  const location = true
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

  const handleDeleteCart = () => {
    if (!user) {
      dispatch(deleteCartGuest());
    }
    if (user?.id) dispatch(deleteCart(user.id));
  };

function handleClick(e){
  e.preventDefault()
  setClick(true)
  localStorage.setItem("location", JSON.stringify(location))
}

  if (cart) {
    if (status === "loading") return <StyledLoading />;
    else
      return (
        <CartDetailContainer>
          {!cart?.length ? (
            <h2>You didn't add any products yet!</h2>
          ) : (
            <>
              <div className="products">
                <div className="delet">
                  <button onClick={() => handleDeleteCart()} className="btnDC">
                    Delete cart
                  </button>
                </div>
                {cart.map((product, i) => {
                  const { quantity } = product.Order_Product;
                  return (
                    <div className="product_line" key={i}>
                      <h3 className="product_name">Product: {product.name}</h3>
                      <div className="product_detail">
                        <div className="quantity">
                          <button
                            onClick={() => restQuantity(quantity, product.id)}
                            className="product_btn"
                          >
                            -
                          </button>
                          <span>Quantity: {quantity}</span>
                          <button
                            onClick={() =>
                              addQuantity(quantity, product.id, product.stock)
                            }
                            className="product_btn"
                          >
                            +
                          </button>
                        </div>
                        <span>Price: ${product.price.toFixed(2)}</span>
                        <span>
                          Subtotal: ${(product.price * quantity).toFixed(2)}
                        </span>
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
              </div>
              <div className="finish">
                <span className="total">
                  Total $
                  {cart
                      ?.reduce((acc, curr) => {
                        return acc + curr.price * curr.Order_Product.quantity;
                      }, 0)
                      .toFixed(2)}
                </span>
                <div className="btnBDiv">
                {user ?
                  <Link to={`/${user.id}/checkout`}>
                   <button className="btnB">Buy</button>
                  </Link> : 
                  <button className="btnB" onClick={handleClick}>
                  Buy</button>}
                {click?
                 <div className="yourUser">
                        <p>Do you have a user yet?</p>
                        <Link to={{ pathname: '/login', state: { locationMail } }}>
                          <button className="yes">Yes</button>
                        </Link>
                        <Link to={{ pathname: '/signup', state: { locationMail } }}>
                          <button className="no">No</button>
                        </Link>
                </div> : null
                }
                </div>
              </div>
            </>
          )}
        </CartDetailContainer>
      );
  } else return null;
}