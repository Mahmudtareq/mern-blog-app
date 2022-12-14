import React from 'react';
import './Header.css';

const Header = () => {
    return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Traveling </span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://i.ibb.co/f1YzL5x/Untitled-1.jpg"
        alt=""
      />
    </div>
    );
};

export default Header;