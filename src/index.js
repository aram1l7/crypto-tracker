import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Crypto from "./crypto";
import "./App.css";
import { faBtc } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState("");
  const [nightMode, setNightMode] = useState(false);
  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkingline=false";
    axios
      .get(url)
      .then((res) => {
        setCrypto(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCrypto = crypto.filter((crypto) => crypto.name.toLowerCase().includes(search.toLowerCase()));

  const handleClick = () => {
    setNightMode(!nightMode);
  };

  return (
    <div className={nightMode ? "night-mode" : "light-mode"}>
      <button onClick={handleClick} className="toggler">
        {nightMode ? <FontAwesomeIcon style={{ color: "#fff", transition: "0.5s ease", marginTop: "20px" }} icon={faCloudMoon} /> : <FontAwesomeIcon icon={faSun} />}
      </button>
      <h1 className={nightMode ? "brand-light" : "brand"}>
        <FontAwesomeIcon className="btc" icon={faBtc} />
        Crypto Tracker
      </h1>

      <form>
        <input onChange={handleChange} type="text" placeholder="Enter cryptocurrency..." className={nightMode ? "inputNight" : ""} />
      </form>
      <div className="cryptoContainer">
        {filterCrypto.map((crypto) => {
          return <Crypto nightMode={nightMode} key={crypto.id} name={crypto.name} image={crypto.image} price={crypto.current_price} symbol={crypto.symbol} marketcap={crypto.market_cap} volume={crypto.total_volume} priceChange={crypto.price_change_percentage_24h} />;
        })}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
