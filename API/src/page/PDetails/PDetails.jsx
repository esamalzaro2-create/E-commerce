import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PDetails.css";
import SlideProduct from "../../Components/slideProduct/SlideProduct";
import PDetailsLoading from "./PDetailsLoading";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTranstion from "../../Components/PageTranstion";
function PDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingrelatedProducts, setLoadingRelatedProducts] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoadingRelatedProducts(false));
  }, [product?.category]);

  if (!product) return <p>Product Not Found</p>;
  return (
    <PageTranstion key={id}>
      <div>
        {loading ? (
          <PDetailsLoading />
        ) : (
          <div className="item-details">
            <div className="container">
              <ProductImages product={product} />

              <ProductInfo product={product} />
            </div>
          </div>
        )}

        {loadingrelatedProducts ? (
          <p>Loading...</p>
        ) : (
          <SlideProduct
            key={product.category}
            data={relatedProducts}
            title={product.category.replace("-", " ")}
          />
        )}
      </div>
    </PageTranstion>
  );
}

export default PDetails;
