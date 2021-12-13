import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import Post from './Post';
const Posts = () => {
  const { posts, isLoading } = useSelector((state: any) => state.posts);
  console.log('🚀 ~ file: index.tsx ~ line 8 ~ Posts ~ posts', posts);
  const [like, setLike] = useState<boolean>(false);
  // if (!posts.length && !isLoading) return 'No posts';
  const buttonHandler = () => {
    setLike(!like);
  };
  return (
    <div>
      <Row justify="center" style={{ marginBottom: '200px' }}>
        <Col xs={1} md={3} xl={3}></Col>
        <Col xs={20} md={14} xl={14}>
          <div className="menu">Global Feed</div>

          {posts?.map((post: any, i: number) => (
            <Post post={post} key={i} />
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
    </div>
  );
};

export default Posts;
