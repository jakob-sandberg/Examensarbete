import React from 'react';
import './trade.css';

import { BsCheck } from 'react-icons/bs';

const Trade = () => {
  return (
    <div className='trade-main-container'>
      <h1 className='trade-heading'>Where do I trade?</h1>
      <h3>Some of my recomendations!</h3>
      <div className='container trade-container'>
        <article className='exchange'>
          {/* CRYPTO.COM */}
          <div className='exchange-head'>
            <h3>COINBASE.COM</h3>
          </div>

          <ul className='exchange-list'>
            <li>
              <BsCheck className='exchange-list-icon' />
              <p>Large number of cryptocurrencies and trading pairs</p>
            </li>
            <li>
              <BsCheck className='exchange-list-icon' />
              <p>
                Offers both beginner-friendly and advanced trading platforms
              </p>
            </li>
            <li>
              <BsCheck className='exchange-list-icon' />
              <p>Highly liquid exchange</p>
            </li>
            <li>
              <p>
                Coinbase is our pick for best crypto exchange overall and best
                crypto exchange for beginners. It offers a large number of
                supported cryptocurrencies and a high level of security. <br />
                <br />
                In addition to being a beginner-friendly platform, Coinbase also
                provides an advanced trading platform—Coinbase Pro—making it a
                good option for professional traders as well.
              </p>
            </li>
          </ul>
        </article>

        {/*   END OF UX/UI */}

        <article className='exchange'>
          {/* CRYPTO.COM */}
          <div className='exchange-head'>
            <h3>CRYPTO.COM</h3>
          </div>

          <ul className='exchange-list'>
            <li>
              <BsCheck className='exchange-list-icon' />
              <p>Supports over 250 cryptocurrencies</p>
            </li>
            <li>
              <BsCheck className='exchange-list-icon' />
              <p>Provides a range of cryptocurrency products</p>
            </li>
            <li>
              <BsCheck className='exchange-list-icon' />
              <p>Great for crypto payments</p>
            </li>
            <li>
              <p>
                Launched in 2016, Crypto.com has established itself as one of
                the leading global crypto exchanges. It’s now available in 90
                countries worldwide, and it supports over 250 cryptocurrencies.
                <br />
                <br />
                In addition to offering a large number of supported assets,
                Crypto.com provides a vast digital asset ecosystem composed of
                its own blockchain, Crypto.org Chain; a native token called CRO;
                a crypto visa card; yield-generating crypto products; and more.
              </p>
            </li>
          </ul>
        </article>

        {/*  END OF COINBASE.COM*/}

        <article className='exchange'>
          {/* CRYPTO.COM */}
          <div className='exchange-head'>
            <h3>GEMINI.COM</h3>
          </div>

          <ul className='exchange-list'>
            <li>
              <BsCheck className='exchange-list-icon' />
              <p>Highly liquid exchange</p>
            </li>
            <li>
              <BsCheck className='exchange-list-icon' />
              <p>Insures funds held in hot wallet</p>
            </li>
            <li>
              <BsCheck className='exchange-list-icon' />
              <p>Strong security framework</p>
            </li>
            <li>
              <p>
                The New York-based exchange has hot wallet insurance to make
                sure user funds remain safe in the case of a security breach.
                Additionally, it requires users to complete an identity
                verification process to reduce the potential for fraud.
                <br />
                <br /> Gemini also encourages users to utilize two-factor
                authentication to secure their accounts and provides the option
                to review and approve devices used to log onto the trading
                account. Another standout security feature of Gemini is that it
                is SOC 2-certified, which means that third-party auditors have
                verified the company’s security and compliance frameworks.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default Trade;
