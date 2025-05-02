import React from 'react';

const BottomNav = () => {
  return (
    <footer className="bottom-nav">
      <button className="nav-item active">
        <i className="fa-solid fa-house"></i>
      </button>
      <button className="nav-item">
        <i className="fa-solid fa-ellipsis"></i>
      </button>
      <button className="nav-item">
        <i className="fa-regular fa-bookmark"></i>
      </button>
      <button className="nav-item">
        <i className="fa-regular fa-user"></i>
      </button>
    </footer>
  );
}

export default BottomNav;