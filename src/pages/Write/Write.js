import React from 'react';
import './Write.css';

const Write = () => {
    return (
        <div className='write'>
            <img className='writeImg' src="https://i.ibb.co/tYsTrpq/postimage.jpg" alt="" />
            <form className='writeForm'>
                <div className='writeFormGroup'>
                    <label htmlFor="fileInput">
                        <i className='writeIcon fas fa-plus'/>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className='writeFormGroup'>
                        <textarea placeholder='Write about your story.......' className='writeInput writeText' type='text'></textarea>

                </div>
                <button className='writeSubmit '>Publish </button>
            </form>
        </div>
    );
};

export default Write;