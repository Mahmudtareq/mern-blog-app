import React from 'react';
import'./SinglePost.css'

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className='singlePostImg' src="https://i.ibb.co/tYsTrpq/postimage.jpg" alt="" />
                <h1 className='singlePostTitle '>Lorem ipsum dolor sit amet.
                   <div className='singlePostEdit'>
                        <i className='singlePostIcon far fa-edit'/>
                        <i className='singlePostIcon far fa-trash-alt'/>
                    </div>
                </h1>
                <div className='singlePostInfo '>
                    <span className='singlePostAuthor'>Author : <b>Safar</b></span>
                    <span className='singlePostDate '>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, pariatur. Eaque iusto sapiente quasi, adipisci impedit molestias consequuntur alias itaque, sequi ullam, quis inventore praesentium rem! Placeat, itaque? Eum mollitia maiores sint quod. Saepe, deserunt recusandae neque eum, dolorem tempore est consequatur, excepturi unde fugit nam aliquid. Error numquam odio totam aliquid reiciendis tempore iure id fugiat ducimus neque, facere hic aliquam tempora. Dolor repellendus incidunt facilis repudiandae animi quia quasi quae quisquam soluta eos delectus unde, voluptatibus earum tempora et ut provident reiciendis eligendi quam officia commodi. Laboriosam, voluptas? Nisi nobis perspiciatis odit mollitia in tenetur, animi aut assumenda deserunt non totam? Minima repellendus, asperiores illo alias nostrum esse aspernatur a dignissimos iusto. Voluptatem,</p>
            </div>
           
        </div>
    );
};

export default SinglePost;