import React, { useEffect, useState } from 'react';
import Coins from '../components/Coins';
import axios from 'axios';
import '../App.css';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((data) =>
    data.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
      <div className='coin-app'>
        <div className='coin-search'>
          <form>
            <input
              className='coin-input'
              type='text'
              onChange={handleChange}
              placeholder='Search'
            />
          </form>
        </div>
        {filteredCoins &&
          filteredCoins.map((coin) => {
            return <Coins coin={coin} key={coin.id} />;
          })}
      </div>
    </div>
  );
};

export default CoinList;
