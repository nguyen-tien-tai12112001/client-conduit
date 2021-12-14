import { Col, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { Posts } from '../../components';
import './index.css';
const { Title } = Typography;
const style: React.CSSProperties = {
  backgroundColor: '#5cb85c',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '170px',
  flexDirection: 'column',
  color: '#fff',
};
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(1));
  }, [dispatch]);
  return (
    <>
      <Row>
        <Col span={24} style={style}>
          <Title
            level={3}
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '50px',
              margin: '10px 0px',
            }}
          >
            conduit
          </Title>
          <Title
            level={5}
            style={{
              color: '#fff',
              fontSize: '20px',
              margin: '5px 0px 10px 0px',
            }}
          >
            A place to share your knowledge.
          </Title>
        </Col>
      </Row>
      <Posts />
    </>
  );
};

export default Home;
