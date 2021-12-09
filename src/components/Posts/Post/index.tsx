import React, { FC,useState } from 'react'
import {Link} from "react-router-dom"
import moment from "moment"
const Post :FC<any> = ({post}) => {
    const [like, setLike] = useState<boolean>(false);
    const buttonHandler = () => {
        setLike(!like)    
      }
    return (
        <div>
                         <div className="article-preview">
                             <div className="article-meta">
                                 <Link className="" to={`/posts/${post._id}`}>
                                     <img src={post.image || "https://api.realworld.io/images/smiley-cyrus.jpeg"}/>
                                 </Link>
                                 <div className="date">
                                     <Link to={`/posts/${post.id}`}>{post.name}</Link>
                                     <span style ={{opacity:"0.5",fontSize:"13px"}}>{moment(post.createdAt).format("llll")}</span>
                                 </div>
                                 <div className="pull-xs-right">
                                     <button onClick={buttonHandler}>
                                         {like? <i className="fas fa-heart true"></i> :<i className="far fa-heart false"></i>} {post?.likes.length}
                                     </button>
                                 </div>
                             </div> 
                             <Link className="preview-link" to={`/posts/${post._id}`}>
                                 <h1>{post.title}</h1>
                                 <p>{post.message}</p>
                                 <span>Read more...</span>
                                 <ul className="tag-list">
                                     <li className="tag-default tag-pill tag-outline" style = {{fontSize:"13px"}}>implementations</li>
                                 </ul>
                             </Link>   
                         </div>
                     </div>
                
    )
}

export default Post
