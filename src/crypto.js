import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountUp } from "@fortawesome/free-solid-svg-icons";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";

const Crypto = ({ nightMode, name, image, price, symbol, marketcap, priceChange, volume }) => {
  return (
    <div
      className="cryptoDiv"
      style={{
        backgroundColor: nightMode ? "rgba(233, 233, 233, 0.833)" : "",
      }}
    >
      <img src={image} className="cryptoImg" />
      <div>
        <h1 className="heading">{name}</h1>
        <p>{symbol.toUpperCase()}</p>
        <span>${price.toLocaleString()}</span>
        <p>Market Cap: ${marketcap.toLocaleString()}</p>
        <p>Volume (24h):${volume.toLocaleString()}</p>
        {priceChange > 0 ? (
          <div className="icons">
            <FontAwesomeIcon icon={faSortAmountUp} />
            <p style={{
              color:nightMode ? "#009632" : ''
            }}>{priceChange.toFixed(2) + "%"}</p>
          </div>
        ) : (
          <div className="icons2">
            <FontAwesomeIcon icon={faSortAmountDown} />
            <p>{priceChange.toFixed(2) + "%"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Crypto;
