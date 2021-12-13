import { Avatar, Col, Row, Typography } from 'antd';
import moment from 'moment';
import "./index.css"
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { getPostByUser, likePost } from '../../actions/posts';

const { Title } = Typography;
const style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#f3f3f3',
  padding: '20px 0px',
};
const Profile = () => {
  var storage: any = localStorage.getItem('profile');
  // const { posts, isLoading } = useSelector((state: any) => state.posts);

  var postUser: any = localStorage.getItem('postByUser');
  const [user, setUser] = useState<any>(JSON.parse(storage));
  const [post, setPost] = useState<any>(JSON.parse(postUser));
  console.log("🚀 ~ file: index.tsx ~ line 23 ~ Profile ~ post", post)
  const location = useLocation();
  
  const [likes, setLikes] = useState(post?.likes);
  const userId =  user?.result?._id;

  const hasLikedPost = post?.likes?.find((like:string) => like === userId);
  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id:any) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(getPostByUser(user?.result._id))
    setUser(JSON.parse(storage));
    setPost(JSON.parse(postUser));
  }, []);

  return (
    <>
    
    <Row align="middle">
      <Col span={24} style={style}>
        <Avatar 
          src={
            user?.result.image 
              ? 'https://joeschmoe.io/api/v1/random'
              : 'https://api.realworld.io/images/smiley-cyrus.jpeg'
          }
          style={{ width: 150, height: 150 }}
        />
        <Title level={2}>{user?.result.name}</Title>
        {/* <button onClick = {()=>dispatch(getPostByUser(user?.result._id))}></button> */}
      </Col>
    </Row>
    {/* <Posts /> */}
    <Row justify="center" style={{ marginBottom: '200px' }}>
        <Col xs={1} md={3} xl={3}></Col>
        <Col xs={20} md={14} xl={14}>
          <div className="menu">My Feed</div>
          {post?.map((post: any, i: number) => (
            <div>
            <div className="article-preview">
                <div className="article-meta">
                    <Link className="" to={`/posts/${post?._id}`}>
                        <img src={user?.result?.image || "https://api.realworld.io/images/smiley-cyrus.jpeg"}/>
                    </Link>
                    <div className="date">
                        <Link to={`/posts/${post?._id}`}>{post?.title}</Link>
                        <span style ={{opacity:"0.5",fontSize:"13px"}}>{moment(post?.createdAt).format("llll")}</span>
                    </div>
                    <div className="pull-xs-right">
                        <button disabled={!user?.result}
onClick={handleLike}>
                            {likes?.find((like:any) => like === userId) ? <i className="fas fa-heart true"></i> :<i className="far fa-heart false"></i>} {post?.likes?.length} 
                             {/* <Likes /> */}
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
          ))}
          
        </Col>

        <Col xs={0} md={4} xl={4}>
          <div className="sidebar">
            <p>Popular Tags</p>
            <div className="tag-list"></div>
          </div>
        </Col>
        <Col xs={1} md={3} xl={3}></Col>

        <Col xs={1} md={3} xl={3}></Col>
      </Row>
    
    </>
  );
};

export default Profile;
