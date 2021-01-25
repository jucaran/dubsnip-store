import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ConfirmData() {
  const status = useSelector(({ order }) => order.status);
  const order = useSelector(({ order }) => order.one);

  useEffect(() => {
    
  }, [order]);

  if (status === 'loading') return <h2>Loading...</h2>
  if (order) {
    return (
      <div>
        <h2>Confirm Shipping Information </h2>
        <p>Shipping Address: {order?.shippingAddress}</p>
        <p>PC: {order?.postalCode}</p>
        <p>Phone Number: {order?.phoneNumber}</p>
        <p>Comments: {order?.comments}</p>
        <p>Products</p>
        {/* <ol className="products">
      {order?.products.map((product, i) =>{
      return(
      <li key={i}>
      <p>{product.name}</p>
      <p>{product.Order_Product.price}</p>
      <p>{product.Order_Product.quantity}</p>
      </li>
      )}
      )}
      </ol> */}
      </div>
    );
  }
}
