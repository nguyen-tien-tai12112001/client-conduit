import { Button, Col, Row, Typography } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { deletePost, getPost } from '../../actions/posts';
import CommentSection from './CommentSection';
import './index.css';

const { Title } = Typography;

function PostDetail() {
  const { post, posts, isLoading } = useSelector((state: any) => state.posts);
  console.log('🚀 ~ file: index.tsx ~ line 17 ~ PostDetail ~ post', post);
  var storage: any = localStorage.getItem('profile');
  const [user, setUser] = useState<any>(JSON.parse(storage));
  const location = useLocation();
  const isUser = user.result._id === post?.creator;
  useEffect(() => {
    setUser(JSON.parse(storage));
  }, [location]);
  console.log('🚀 ~ file: index.tsx ~ line 16 ~ PostDetail ~ post', post);
  const dispatch = useDispatch();
  const history = useNavigate();
const handleUpdatePost = ()=>{
  localStorage.setItem("currentId","0")
  history("/posts")
}
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  if (!post) return null;

  return (
    <Row justify="center">
      <Col xs={24} md={24} xl={24} className="banner">
        <Row justify="center">
          <Col xs={23} md={18} xl={18}>
            <div className="content">
              <Title style={{ color: 'white' }}>{post.title}</Title>
              <div className="article-meta">
                <a>
                  <img
                    src={
                      user?.result.image || post.image
                        ? 'https://joeschmoe.io/api/v1/random'
                        : 'https://api.realworld.io/images/smiley-cyrus.jpeg'
                    }
                  />
                </a>
                <div style={{ marginLeft: '4px', textAlign: 'start' }}>
                  <a className="info">{post.name}</a>
                  <Title
                    style={{ color: '#bbb', fontSize: '0.8rem' }}
                    level={5}
                  >
                    {moment(post.createdAt).format('llll')}
                  </Title>
                </div>
                {isUser ? (
                  <div style={{ marginLeft: '2rem' }}>
                    {/* <Button ghost onClick = {handleUpdatePost}>
                      <i
                        style={{ marginRight: '2px', opacity: '0.5' }}
                        className="fas fa-pencil-alt"
                      ></i>{' '}
                      Edit Article
                    </Button> */}
                    <Button
                      style={{ marginLeft: '5px' }}
                      onClick={() => {
                        dispatch(deletePost(post._id));
                        history('/');
                      }}
                      type="primary"
                      danger
                      ghost
                    >
                      <i
                        style={{ marginRight: '2px' }}
                        className="fas fa-trash-alt"
                      ></i>{' '}
                      Delete Article
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </Col>
        </Row>
      </Col>

      <Col xs={24} md={24} xl={24}>
        <Row justify="center">
          <Col xs={23} md={18} xl={18} className="border">
            <Title
              style={{ textAlign: 'start', paddingBottom: '3rem' }}
              level={4}
            >
              {post.article}
            </Title>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row justify="center" style={{ marginBottom: '200px' }}>
              <Col xs={24} md={10} xl={10}>
                <CommentSection post={post} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default PostDetail;
