import sofa from "./assets/sofa.png";
import sofaGif from "./assets/sofa.gif";
import close from "./assets/close.svg";
import i360 from "./assets/360.svg";

import Button from "./components/Button";

import "./App.css";
import { useState } from "react";

function App() {
  const [useGif, setGif] = useState(false);

  const handle3D = () => {
    setGif(!useGif);
  };

  return (
    <div className="container">
      <div className="image-container">
        {useGif ? (
          <div className="image-content">
            <img src={sofaGif} alt="3D product" width="449px" height="253px" />
            <img className="icons" src={close} alt="close" onClick={handle3D} />
          </div>
        ) : (
          <div className="image-content">
            <img src={sofa} alt="Product" width="449px" height="253px" />
            <img
              className="icons"
              src={i360}
              alt="360 icon"
              onClick={handle3D}
            />
          </div>
        )}
      </div>

      <div className="description-container">
        <p className="code">CÓDIGO: 42404</p>
        <h1>Sofá Margot II - Rosé</h1>
        <p className="price">R$ 4.000</p>

        <Button />
      </div>
    </div>
  );
}

export default App;
