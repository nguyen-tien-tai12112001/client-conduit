import { Button,Comment, Tooltip, Avatar  } from "antd";
import React, {FC, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import "./index.css"
import { commentPost } from "../../actions/posts";
import moment from "moment";
const CommentSection:FC<any> = ({post}) => {
    const user = JSON.parse(localStorage.getItem("profile") as string);

    
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [comments, setComments] = useState<any>(post?.comments);
  const handleComment = async () => {
    const newComments = await dispatch(
      commentPost(`${user?.result?.name}: ${comment}`, post._id)
    );

    setComment("");
    setComments(newComments);

    // commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };
//   const commentsRef = useRef();
    return (
        <>
 {comments?.map((c:any, i:number) => (
           <Comment key={i}
        //    actions={actions}
           author={<a>{user?.result?.name}</a>} 
           avatar={<Avatar src={user?.result ? user?.result.image :  "https://api.realworld.io/images/smiley-cyrus.jpeg"} alt="Han Solo" />}
           content={
             <p>
               {c.split(":")[1]}
             </p>
           }
           datetime={
             <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
               <span>{moment().format('llll')}</span>
             </Tooltip>
           }
         />
          ))}




        <form className="form">
                                    <textarea placeholder="Write a comment..." value={comment}
            onChange={(e) => setComment(e.target.value)}>

                                    </textarea>
                                    <div className="footer">
                                        <img src={user?.result.image || user.image? "https://joeschmoe.io/api/v1/random" : "https://api.realworld.io/images/smiley-cyrus.jpeg"} />
                                        <Button style={{position:'absolute', right:'5px',bottom:'10px'}} type="primary" onClick={handleComment}>Post comment</Button>
                                    </div>
                                </form>
                                </>
    )
}

export default CommentSection
