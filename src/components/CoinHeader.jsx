import React from 'react';

const CoinHeader = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div class='d-flex'>
          <img alt='CryptoImage' className='crypto-image' src={data.image} />
          <h1 class='ms-3 mt-2'>{data.name}</h1>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinHeader;
