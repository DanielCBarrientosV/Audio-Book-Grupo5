import React from 'react';

const Header = () => {
  return (
    <header className="market-header">
      <div className="status-bar">
        <span>9:41</span>
        <span>
          <i className="fas fa-signal"></i>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-full"></i>
        </span>
      </div>
      <div className="top-row">
        <h1>Explore Market</h1>
        <div className="header-icons">
          <span className="icon">
            <i className="fa-regular fa-bell"></i>
          </span>
          <span className="icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;