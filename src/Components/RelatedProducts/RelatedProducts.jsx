import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";

const API_URL = process.env.REACT_APP_API_URL;

const RelatedProducts = ({ category, excludeId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/allproducts`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) => item.category === category && item.id !== excludeId
        );
        setRelatedProducts(filtered.slice(0, 4));
      })
      .catch((err) => console.error("Error fetching related products:", err));
  }, [category, excludeId]);

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
