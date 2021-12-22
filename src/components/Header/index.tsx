
import { Avatar } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LoggedOutView = (props: any) => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-sm-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = (props: any) => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-sm-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/posts" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/setting" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            <Avatar
              src={
                props.currentUser
                  ? props.currentUser?.result.image
                  : 'https://api.realworld.io/images/smiley-cyrus.jpeg'
              }
              style={{ width: 30, height: 30 }}
            />{' '}
            {'   '}
            {props.currentUser?.result.name}
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

const HeaderComponents = () => {
  var storage: any = localStorage.getItem('profile');
  const [user, setUser] = useState<any>(JSON.parse(storage));
  console.log('🚀 ~ file: index.tsx ~ line 98 ~ HeaderComponents ~ user', user);

  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(storage));
  }, [location, setUser]);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          conduit
        </Link>

        <LoggedOutView currentUser={user} />

        <LoggedInView currentUser={user} />
      </div>
    </nav>
  );
};

export default HeaderComponents;
