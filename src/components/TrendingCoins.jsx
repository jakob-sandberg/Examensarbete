import React from 'react';
import '../css/TrendingCoins.css';
import { Link } from 'react-router-dom';

const TrendingCoins = ({ name, symbol, price, image, id, market_cap_rank }) => {
  return (
    <div className='coin-container'>
      <Link
        to={`/crypto/${id}`}
        style={{ textDecoration: 'none', color: 'white' }}
      >
        <div className='trend-coin-row'>
          <div className='trend-coin'>
            <img src={image} alt='crypto' />
            <h1>{name}</h1>
            <p className='coin-symbol'>{symbol}</p>
          </div>
          <div className='trend-coin-data'>
            <p className='trend-coin-price'>Btc {price.toFixed(5)}</p>
            <p className='trend-coin-rank'>Rank: {market_cap_rank}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default TrendingCoins;
