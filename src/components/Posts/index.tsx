import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import './index.css';
import Post from './Post';
const Posts = () => {
  const { posts, isLoading } = useSelector((state: any) => state.posts);
  console.log('🚀 ~ file: index.tsx ~ line 7 ~ Posts ~ posts', posts);

  return (
    <div className="home-page">
      <div className="container page">
        <div className="row">
         
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a href="" className="nav-link active" style={{position: "relative",top:"15px"}}>
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>
            {isLoading ? (
              <Spin size="large" style={{ marginTop: '20px' }} />
            ) : (
              <div style={{marginBottom:"100px"}}>
                {posts?.map((post: any, i: number) => (
                  <Post post={post} key={i} />
                ))}
              </div>
            )}
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
