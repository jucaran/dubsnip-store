import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../media/Logo-dark-bkg.svg";
import { HomeContainer } from "./style";
import LastProducts from "../Product/LastProducts";

export default function Home() {
  const [showNewProducts, setShowNewProducts] = useState(false);
  return (
    <div>
      {showNewProducts ? (
        <LastProducts setShowNewProducts={setShowNewProducts} />
      ) : null}
      <HomeContainer>
        <div className="bkg"></div>
        <div className="dark_blur">
          <div className="logo_container">
            <img src={logo} alt="dubsNIP" />
          </div>
          <div className="hero_txt">
            <h1 className="title">Where the music finds you</h1>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <Link to="/products">
              <span className="cta">SEE MORE</span>
            </Link>
            <button
              className="ctaButton"
              onClick={() => setShowNewProducts(!showNewProducts)}
            >
              <div>¡NEW PRODUCTS!</div>
            </button>
          </div>
        </div>
      </HomeContainer>
    </div>
  );
}
