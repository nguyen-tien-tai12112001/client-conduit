import { Col, Row, Spin } from 'antd';
import { useSelector } from 'react-redux';
import './index.css';
import Post from './Post';
const Posts = () => {
  const { posts, isLoading } = useSelector((state: any) => state.posts);

  return (
    <div>
      <Row justify="center" style={{ marginBottom: '200px' }}>
        <Col xs={1} md={3} xl={2}></Col>
        <Col xs={20} md={14} xl={16} style={{ marginLeft: '0px' }}>
          <div className="menu">Global Feed</div>
          {isLoading ? (
            <Spin size="large" style={{ marginTop: '20px' }} />
          ) : (
            <>
              {posts?.map((post: any, i: number) => (
                <Post post={post} key={i} />
              ))}
            </>
          )}
        </Col>

        <Col xs={0} md={4} xl={3}>
          <div className="sidebar">
            <p>Popular Tags</p>
            <div className="tag-list"></div>
          </div>
        </Col>
        <Col xs={1} md={3} xl={3}></Col>
      </Row>
    </div>
  );
};

export default Posts;
