import React from "react";

function ProductImages({ product }) {
  return (
    <div>
      <div className="img-item">
        <div className="big-img">
          <img id="big_img" src={product.images[0]} alt={product.title} />
        </div>
        {product.images.map((img, index) => (
          <div className="small-img " key={index}>
            <img
              src={img}
              alt={product.title}
              onClick={() => (document.getElementById("big_img").src = img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
