import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
           <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
             <div className="descriptionbox-nav-box fade">Reviews (122)</div>
           </div>
           <div className="descriptionbox-description">
            <p>An ecommerce website is an online platform that facilitates buying and selling of products or services
               over the internet, the platform serves as virtual marketplace where businesses and individuals showcase 
               their products, interact with customers, and conduct transactions without the need for physical presense.
               E-Commerce websites have gained immense popularity due to their convenience accessibility, and global reach they offer.</p>
               <p>E-commerce websites typically display products or services, a detailed descriptions, images, prices, and any availlable
                varibales (e.g., sizes, colors).Each product usually has its own dedicated page with relevan informations.
            </p>
           </div>
        </div>
    )
}

export default DescriptionBox;