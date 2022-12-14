import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import'./Settings.css'

const Settings = () => {
    return (
        <div className='settings'>
            <div className='settingsWrapper '>
                <div className='settingsTitle '>
                    <span className='settingsUpdateTitle '>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delate Account</span>
                </div>
                <form className='settingsForm '>
                    <label className=''>Profile Picture</label>
                    <div className='settingsPP '>
                        <img className='' src="https://i.ibb.co/cr4RCLd/Portrait-of-confident-mature-black-doctor-consulting-digital-tablet-and-looking-at-camera-Smiling-af.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className='settingsPPIcon far fa-user-circle'/>
                        </label>
                        <input type="file"  id="fileInput"  style={{display:'none'}}/>
                    </div>
                    <label htmlFor="fileInput">User Name:</label>
                    <input type="text" placeholder='Safak' />
                    <label htmlFor="fileInput">User Email:</label>
                    <input type="email" placeholder='safak@gmail.com' />
                    <label htmlFor="fileInput">User Password:</label>
                    <input type="password" placeholder='Password' />
                    <button className='settingsSubmit '>Update</button>
                </form>
            </div>
             <SideBar/>
        </div>
    );
};

export default Settings;