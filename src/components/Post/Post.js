import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <div className='post'>
            <img className='postImg' src="https://i.ibb.co/tYsTrpq/postimage.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>
                <span className="postTitle">Lorem ipsum, dolor sit amet </span>
                <hr />
                <span className='postDate'>1 hour ago</span>
               <p className='postDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dicta at, qui, debitis accusantium rerum ipsum totam placeat culpa doloribus repellendus exercitationem similique assumenda vitae.</p>
            </div>
        </div>
    );
};

export default Post;