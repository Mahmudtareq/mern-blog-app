import React from 'react';
import './SideBar.css';

const SideBar = () => {
    return (
    <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg" alt=""/>
                <p className='flex items-center justify-center w-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
                necessitatibus nostrum illum reprehenderit.necessitatibus nostrum illum reprehenderit.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Technology</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                 <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                     <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon  fab fa-twitter-square"></i>
                    <i className="sidebarIcon  fab fa-pinterest-square"></i>
                    <i className="sidebarIcon  fab fa-instagram-square"></i>
                  </div>
             </div>

</div>
    );
};

export default SideBar;