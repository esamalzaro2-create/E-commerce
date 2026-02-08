import HeroSlider from "../../Components/HeroSlider";
import SlideProduct from "../../Components/slideProduct/SlideProduct";
import "./Home.css";
import React, { useEffect, useState } from "react";
import SPLoading from "../../Components/slideProduct/SPLoading";
import PageTranstion from "../../Components/PageTranstion";

const categoryies = [
  "smartphones",
  "mobile-accessories",
  "tablets",
  "laptops",
  "sports-accessories",
  "womens-watches",
];

function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const results = await Promise.all(
          categoryies.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.log("error Fetching", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);
  console.log(products);

  return (
    <PageTranstion>
      <div>
        <HeroSlider />

        {loading ? (
          <SPLoading />
        ) : (
          categoryies.map((category) => (
            <SlideProduct
              key={category}
              data={products[category]}
              title={category}
            />
          ))
        )}
      </div>
    </PageTranstion>
  );
}

export default Home;
