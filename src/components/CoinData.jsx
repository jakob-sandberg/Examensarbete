import React from 'react';
import '../css/CoinData.css';

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className='data-container'>
          <div></div>
          <div className='col-sm'>
            <div className='d-flex flex-column'>
              <h5 className='coinData-text'>Market Cap</h5>
              <span>${data.market_cap}</span>
            </div>
            <hr />
            <div className='supply'>
              <div className='d-flex flex-column'>
                <h5 className='coinData-text'>Total Supply</h5>
                <span>{data.total_supply}</span>
              </div>
            </div>
          </div>

          <div className='col-sm third-container'>
            <div className='d-flex flex-column'>
              <h5 className='coinData-text'>Volume(24H)</h5>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div className='d-flex flex-column'>
              <h5 className='coinData-text'>High 24h</h5>
              <span>${data.high_24h}</span>
            </div>
          </div>

          <div className='col-sm'>
            <div className='circ-supply'>
              <div className='d-flex flex-column'>
                <h5 className='coinData-text'>Circulating Supply</h5>
                <span>${data.circulating_supply}</span>
              </div>
            </div>
            <hr />
            <div className='d-flex flex-column'>
              <h5 className='coinData-text'>Low 24h</h5>
              <span>${data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
