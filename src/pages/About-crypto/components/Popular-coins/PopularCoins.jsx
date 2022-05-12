import React, { useEffect, useState } from 'react';
import '../Popular-coins/popular-coins.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PopularCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className='popular-heading'>
        Some of the more popular CryptoCurrency's
      </h1>
      <div className='popular-main-container'>
        <div className='popular-content-container'>
          {coins
            .filter((_, idx) => idx < 4)
            .map((coin) => {
              return (
                <article key={coin.id} className='popular-coins-item'>
                  <div className='popular-coins-item-image'>
                    <img src={coin.image} alt={coin.title} />
                  </div>
                  <h3>{coin.name}</h3>
                  <div className='popular-coins-item-cta'>
                    <Link
                      to={`/crypto/${coin.id}`}
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <button className='popular-button' target='_blank'>
                        Get more Info!
                      </button>
                    </Link>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PopularCoins;
