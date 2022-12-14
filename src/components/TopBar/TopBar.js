import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className='top'>
            <div className='topLeft '>
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className='topListItem'>Home</li>
                    <li className='topListItem'>About</li>
                    <li className='topListItem'>Contact</li>
                    <li className='topListItem'>Write</li>
                    <li className='topListItem'>LogOut</li>
                </ul>
            </div>
            <div className='topRight '>
                <img src="https://i.ibb.co/K6bnWKN/header-Image.jpg" alt="logo" className='topImg' />
                 <i className="topSearchIcon fas fa-search"></i>
            </div>
        
        </div>
    );
};

export default TopBar;