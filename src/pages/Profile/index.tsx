import { Avatar, Button, Col, Row, Typography } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import { getPostByUser, likePost } from '../../actions/posts';
import './index.css';

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
  let storage: any = localStorage.getItem('profile');
  let postUser: any = localStorage.getItem('postByUser');
  const [user, setUser] = useState<any>(JSON.parse(storage));
  const [post, setPost] = useState<any>(JSON.parse(postUser));
  const [likes, setLikes] = useState(post?.likes);
  const [isActive, setActive] = useState<number>(2);
  const { posts } = useSelector((state: any) => state.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const userId = user?.result?._id;
  const postFavorited = posts.filter((post: any) =>
    post.likes.includes(userId)
  );
  const hasLikedPost = post?.likes?.find((like: string) => like === userId);

  useEffect(() => {
    dispatch(getPostByUser(user?.result._id));
    setUser(JSON.parse(storage));
    setPost(JSON.parse(postUser));
  }, [location.pathname, dispatch]);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id: any) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };
  

  return (
    <>
      <Row align="middle">
        <Col span={24} style={style}>
          <Avatar
            src={
              user?.result.image
                ? user?.result.image
                : 'https://api.realworld.io/images/smiley-cyrus.jpeg'
            }
            style={{ width: 150, height: 150 }}
          />
          <Title level={2}>{user?.result.name}</Title>

          
        </Col>
      </Row>

      <Row justify="center" style={{ marginBottom: '200px' }}>
        <Col xs={1} md={3} xl={3}></Col>
        <Col xs={20} md={14} xl={16}>
          <Button
            className={isActive === 1 ? 'menu active' : 'menu'}
            onClick={() => setActive(1)}
          >
            My Feed
          </Button>
          <Button
            className={isActive === 2 ? 'menu active' : 'menu'}
            onClick={() => setActive(2)}
          >
            My Favorite
          </Button>

          {isActive === 1 && post?.length > 0
            ? post?.map((post: any, i: number) => (
                <div>
                  <div className="article-preview">
                    <div className="article-meta">
                      <Link className="" to={`/posts/${post?._id}`}>
                        <img
                          src={
                            user?.result?.image ||
                            'https://api.realworld.io/images/smiley-cyrus.jpeg'
                          }
                        />
                      </Link>
                      <div className="date">
                        <Link to={`/posts/${post?._id}`}>{post?.title}</Link>
                        <span style={{ opacity: '0.5', fontSize: '13px' }}>
                          {moment(post?.createdAt).format('llll')}
                        </span>
                      </div>
                      <div className="pull-xs-right">
                        <button disabled={!user?.result} onClick={handleLike}>
                          {likes?.find((like: any) => like === userId) ? (
                            <i className="fas fa-heart true"></i>
                          ) : (
                            <i className="far fa-heart false"></i>
                          )}{' '}
                          {post?.likes?.length}
                        </button>
                      </div>
                    </div>
                    <Link className="preview-link" to={`/posts/${post._id}`}>
                      <h1>{post.title}</h1>
                      <p>{post.message}</p>
                      <span>Read more...</span>
                      <ul className="tag-list">
                        <li
                          className="tag-default tag-pill tag-outline"
                          style={{ fontSize: '13px' }}
                        >
                          implementations
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>
              ))
            : ''}

          {isActive === 2 && postFavorited?.length > 0
            ? postFavorited?.map((post: any, i: number) => (
                <div>
                  <div className="article-preview">
                    <div className="article-meta">
                      <Link className="" to={`/posts/${post?._id}`}>
                        <img
                          src={
                            
                            'https://api.realworld.io/images/smiley-cyrus.jpeg'
                          }
                        />
                      </Link>
                      <div className="date">
                        <Link to={`/posts/${post?._id}`}>{post?.title}</Link>
                        <span style={{ opacity: '0.5', fontSize: '13px' }}>
                          {moment(post?.createdAt).format('llll')}
                        </span>
                      </div>
                      <div className="pull-xs-right">
                        <button disabled={!user?.result} onClick={handleLike}>
                          {likes?.find((like: any) => like === userId) ? (
                            <i className="fas fa-heart true"></i>
                          ) : (
                            <i className="far fa-heart false"></i>
                          )}{' '}
                          {post?.likes?.length}
                        </button>
                      </div>
                    </div>
                    <Link className="preview-link" to={`/posts/${post._id}`}>
                      <h1>{post.title}</h1>
                      <p>{post.message}</p>
                      <span>Read more...</span>
                      <ul className="tag-list">
                        <li
                          className="tag-pill tag-outline"
                          style={{ fontSize: '13px' }}
                        >
                          implementations
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>
              ))
            : ''}
        </Col>
        <Col xs={1} md={3} xl={3}></Col>
      </Row>
    </>
  );
};

export default Profile;
