import React from "react";

interface CardProps {
  title?: string;
  imageUrl?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="single-shop-product">
        <div className="product-upper">
          <img src={imageUrl} />
        </div>
        <h2>
          <a href="">{title}</a>
        </h2>

        <div className="product-option-shop">
          <a
            className="add_to_cart_button"
            data-quantity="1"
            data-product_sku=""
            data-product_id="70"
            rel="nofollow"
            onClick={onButtonClick}
            //href="/canvas/shop/?add-to-cart=70"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
