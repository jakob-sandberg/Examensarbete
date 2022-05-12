import React from 'react';
import './about-info.css';
import bild1 from '../../../../assets/bild1.png';

const AboutInfo = () => {
  return (
    <div className='info-container'>
      <div className='content-container'>
        <div className='image-content-container'>
          <div className='image-container'>
            <img className='about-image' alt='about-img' src={bild1} />
          </div>
        </div>
        <div className='text-container'>
          <h3>More about Crypto</h3>
          <p>
            Cryptocurrency is decentralized digital money that is used on the
            internet. Cryptocurrency adheres to a decentralized form of
            governance and control, as opposed to a central banking authority.
            Cryptocurrency operates through distributed ledger technology, known
            as blockchain. Bitcoin was the first cryptocurrency, and it rose to
            attention beginning in 2008. Today, there are many other
            cryptocurrencies, including Ethereum, Tether, Solana, and Cardano.
          </p>
        </div>
      </div>

      <div className='second-content-container'>
        <div className='text-container'>
          <h3>The Blockchain</h3>
          <p>
            Blockchain technology is the concept or protocol behind the running
            of the blockchain. Blockchain technology makes cryptocurrencies
            (digital currencies secured by cryptography) like Bitcoin work just
            like the internet makes email possible. <br /> <br /> The blockchain
            is an immutable (unchangeable, meaning a transaction or file
            recorded cannot be changed) distributed digital ledger (digital
            record of transactions or data stored in multiple places on a
            computer network) with many use cases beyond cryptocurrencies.
          </p>
        </div>

        <div className='text-container'>
          {' '}
          <h3>Mining Crytocurrency</h3>
          <p>
            Crypto mining involves verifying blocks of data and adding them to
            the blockchain. This process allows for a trustless, peer-to-peer
            form of currency. To verify blocks, crypto miners must verify the
            data in the block, record the transaction on the block, and add the
            new block to the blockchain. The verification process used in crypto
            mining is not easy. Miners must correctly guess the code associated
            with the data on the newest block using code-cracking functions.
            <br /> <br />
            Code-cracking is called cryptography. Therefore, these functions are
            called cryptographic hash functions. In crypto mining, the first
            miner to correctly guess the complex code for the latest block then
            transmits their work to other miners on the network. If other miners
            are able to verify the original miner’s code, the original miner
            receives cryptocurrency and transactions fees as a reward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
