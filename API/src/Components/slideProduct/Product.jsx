import React, { useContext } from "react";
import { IoStarSharp } from "react-icons/io5";
import { RiStarHalfLine } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

function Product({ item }) {
  const { cartItems, addToCart } = useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === item.id);

  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-image" />
        <div className="    ">
          <strong>{item.title}</strong>
          Added To Cart
          <div>
            <button className="btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 }
    );
  };

  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/products/${item.id}`}>
        <span className="status_cart">
          <FaCheck /> in Cart
        </span>
        <div className="img-product">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="name-product">{item.title}</p>
        <div className="stars">
          {item.rating}
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <RiStarHalfLine />
        </div>
        <p className="price">
          <span>${item.price}</span>
        </p>
      </Link>
      <div className="icons">
        <span className="btn-cart" onClick={handleAddToCart}>
          <FaCartArrowDown />
        </span>
        <span>
          <CiHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;
