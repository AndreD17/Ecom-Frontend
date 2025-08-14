import React, { useEffect, useState } from "react";
import './Popular.css';
import Item from "../Item/Item.jsx";

const API_URL = process.env.REACT_APP_API_URL;


const Popular = () => {
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/popularinwomen`)
            .then(response => response.json())
            .then(data => setPopularProducts(data))
            .catch(error => console.error("Fetch error:", error));
    }, []); 

    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {Array.isArray(popularProducts) && popularProducts.map((item) => (
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

export default Popular;
