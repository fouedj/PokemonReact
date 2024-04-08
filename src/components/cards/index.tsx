import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface CardProps {
  title?: string;
  imageUrl?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  id?:any;
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  buttonText,
  onButtonClick,
  id
}) => {
const navigate=useNavigate()
const handleButtonClicked=()=>{
navigate(`/pokemon/${id}`)
}
  return (
    <div className="col-md-3 col-sm-6">
      <div className="single-shop-product">
        <div className="product-upper">
          <img src={imageUrl} />
        </div>
        <h2>
          <Link to={`/pokemon/${id}`}>{title}</Link>
        </h2>

        <div className="product-option-shop">
          <button
            className="add_to_cart_button"
            data-quantity="1"
            data-product_sku=""
            data-product_id="70"
            rel="nofollow"
            onClick={handleButtonClicked}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
