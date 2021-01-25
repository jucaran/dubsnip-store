import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/actions/products";
import { addProductToCart,
         addProductGuest,
} from "../../redux/actions/cart";
import { CardBody } from "./ProductCard_style";

// Este componente muestra la previsualización de un producto
const ProductCard = ({ id, name, description, price, picture, stock }) => {
  const dispatch = useDispatch();
  const user = useSelector(({ users }) => users.user);


  const handleDelete = async () => {
    dispatch(deleteProduct(id));
  };
  const handleAdd = (id) => {
    if (!user) {
       dispatch(addProductGuest(null, id))
       }
       
    if (user?.id) dispatch(addProductToCart(user.id, id));
  };

  return (
    <CardBody>
      <div className="card_header">
        <Link to={`/products/${id}`}>
          <h3>{name}</h3>
        </Link>
        {user?.isAdmin ? (
          <div className="admin_btns">
            <Link to={`/editproduct/${id}`}>edit</Link>
            <button className="delete_btn" onClick={handleDelete}>
              x
            </button>
          </div>
        ) : null}
      </div>
      <div className="img_container">
        <img src={picture} alt="" />
      </div>
      <div className="card_info">
        <p className="card_price">Price ${price}</p>
        <div className="bottom_info">
          <p className="card_description">{description}</p>
          <span
            className="add_btn"
            onClick={() => handleAdd(id)}
         
          >
            +
          </span>
        </div>
        {!stock && <p className="stock">Not available</p>}
      </div>
    </CardBody>
  );
};

export default ProductCard;
