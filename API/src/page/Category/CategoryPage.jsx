import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../Components/slideProduct/Product";
import "./CategoryPage.css";
function CategoryPage() {
  const { category } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data.products);
      });
  }, [category]);
  console.log(categoryProducts);

  return (
    <div>
      <div className="category-products">
        <div className="container">
          <div className="top-slide">
            <h2>{category}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              consectetur.
            </p>
          </div>
          <div className="products">
            {categoryProducts.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
