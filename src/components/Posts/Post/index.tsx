import moment from 'moment';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { likePost } from '../../../actions/posts';
const Post: FC<any> = ({ post }) => {

  const user = JSON.parse(localStorage.getItem('profile') as string);
  const [likes, setLikes] = useState(post?.likes);
  const dispatch = useDispatch();
  const userId = user?.result?._id;
  const hasLikedPost = post?.likes?.find((like: string) => like === userId);
  const handleLike = async () => {
    dispatch(likePost(post._id));
    if (hasLikedPost) {
      setLikes(post.likes.filter((id: any) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  return (
    <div>
      <div className="article-preview">
        <div className="article-meta">
          <Link className="" to={`/posts/${post._id}`}>
            <img
              src={
                post?.image ||
                'https://api.realworld.io/images/smiley-cyrus.jpeg'
              }
            />
          </Link>
          <div className="date">
            <Link to={`/posts/${post.id}`}>{post.name}</Link>
            <span style={{ opacity: '0.5', fontSize: '13px' }}>
              {moment(post.createdAt).format('llll')}
            </span>
          </div>
          <div className="pull-xs-right">
            <button disabled={!user?.result} onClick={handleLike}>
              {likes.find((like: any) => like === userId) ? (
                <i className="fas fa-heart true"></i>
              ) : (
                <i className="far fa-heart false"></i>
              )}{' '}
              {post?.likes.length}
             
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
  );
};

export default Post;
