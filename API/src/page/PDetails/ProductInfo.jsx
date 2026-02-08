import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaCartArrowDown, FaShare } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { RiStarHalfLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Components/Context/CartContext";
import toast from "react-hot-toast";

function ProductInfo({ product }) {
  const { cartItems, addToCart } = useContext(CartContext);
  const isInCart = cartItems.some((i) => i.id === product.id);
  const navigate = useNavigate();
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-image" />
        <div className="    ">
          <strong>{product.title}</strong>
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
    <div>
      <div className="details-item">
        <h1 className="name">{product.title}</h1>
        <div className="stars">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <RiStarHalfLine />
        </div>
        <p className="price">${product.price}</p>

        <h5>
          Availabillity: <span>{product.availabilityStatus}</span>
        </h5>
        <h5>
          Brand: <span>{product.brand}</span>
        </h5>
        <p className="desc">{product.description}</p>
        <h2>
          <span>Hurry Up! Only {product.stock}products left in stock</span>{" "}
        </h2>
        <h5>
          Return Policy: <span>{product.returnPolicy}</span>
        </h5>

        <button
          onClick={handleAddToCart}
          className={`btn ${isInCart ? "in-cart" : ""}`}
        >
          {isInCart ? "item in Cart" : "Add To Cart"} <FaCartArrowDown />
        </button>

        <div className="icons">
          <span>
            <CiHeart />
          </span>
          <span>
            <FaShare />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
