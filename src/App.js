import './styles/App.css';
import githubLogo from './assets/github-logo.svg';
import React from "react";

// Constants
const GITHUB_HANDLE = 'partrima';
const GITHUB_LINK = `https://github.com/${GITHUB_HANDLE}`;
// const OPENSEA_LINK = '';
// const TOTAL_MINT_COUNT = 50;

const App = () => {
  // Render Methods
  //test
  const renderNotConnectedContainer = () => (
    <button className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">My NFT Collection</p>
          <p className="sub-text">
            Each unique. Each beautiful. Discover your NFT today.
          </p>
          {renderNotConnectedContainer()}
        </div>
        <div className="footer-container">
          <img alt="Github Logo" className="github-logo" src={githubLogo} />
          <a
            className="footer-text"
            href={GITHUB_LINK}
            target="_blank"
            rel="noreferrer"
          >{`@${GITHUB_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
