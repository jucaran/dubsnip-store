import React from "react";
import { Link } from "react-router-dom";
// import swal from "sweetalert";
import { CategoryBody } from './CategoryCard_style'
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux/actions/categories";

// Este componente muestra la previsualización de un producto
const CategoryCard = ({ id, name, description}) => {
  const dispatch = useDispatch();
  const deleteCategoryFunction = () => {
    dispatch(deleteCategory(id));
  }

  return (
    <CategoryBody>
      <div className="card_header">
        <h3>{name}</h3>
        <div className="admin_btns">
          <Link to={`/editcategory/${id}`}>edit</Link>
          <button className="delete_btn" onClick={deleteCategoryFunction}>x</button>
        </div>
      </div>
      <div className="card_info">
        <div className="bottom_info">
          <div className="card_description">
            <p>{description}</p>
          </div>
          <Link className="btnInfo" to={`/categories/${id}`}>+</Link>
        </div>
      </div>
    </CategoryBody>
  );
};

export default CategoryCard;
