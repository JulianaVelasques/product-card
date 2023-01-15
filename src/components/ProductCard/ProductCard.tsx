import { useState } from "react";

import sofa from "../../assets/sofa.png";
import sofaGif from "../../assets/sofa.gif";
import close from "../../assets/close.svg";
import i360 from "../../assets/360.svg";

import Button from "../Button/Button";

import "./ProductCard.css";

function ProductCard() {
  const [useGif, setGif] = useState(false);

  const handle3D = () => {
    setGif(!useGif);
  };

  return (
    <>
      <div className="image-container">
        <div className="image-content">
          <img
            src={useGif ? sofaGif : sofa}
            alt={useGif ? "Product in 3D" : "Product image"}
            width="449px"
            height="253px"
          />
          <img
            className="icons"
            src={useGif ? close : i360}
            alt={useGif ? "Close icon" : "360 icon"}
            onClick={handle3D}
          />
        </div>
      </div>

      <div className="description-container">
        <p className="code">CÓDIGO: 42404</p>
        <h1>Sofá Margot II - Rosé</h1>
        <p className="price">R$ 4.000</p>

        <Button />
      </div>
    </>
  );
}

export default ProductCard;
