import {
  FormOutlined,
  HomeOutlined,
  LoginOutlined,
  PlusCircleOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Col, Menu, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
const { Title } = Typography;
const style = {
  background: '#fff',
  frontSize: '18px',
  width: '100%',
  height: '100%',
};
const styleLink = { marginLeft: '120px', color: '#5cb85c' };

const HeaderComponents = () => {
  var storage: any = localStorage.getItem('profile');
  const [user, setUser] = useState<any>(JSON.parse(storage));

  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(storage));
  }, [location]);

  return (
    <Row
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <Col span={!user ? 16 : 13}>
        <Title level={3} style={style}>
          <NavLink to="/" style={styleLink}>
            conduit
          </NavLink>
        </Title>
      </Col>
      <Col span={!user ? 8 : 11}>
        <Menu mode="horizontal" style={{ border: 'none' }}>
          <Menu.Item
            key="email"
            icon={<HomeOutlined />}
            style={{ borderBottom: 'none' }}
          >
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          {!user ? (
            <>
              <Menu.Item key="login" icon={<LoginOutlined />}>
                <NavLink to="/login">Sign in</NavLink>
              </Menu.Item>
              <Menu.Item key="register" icon={<PlusCircleOutlined />}>
                <NavLink to="/register">Sign up</NavLink>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="post" icon={<FormOutlined />}>
                <NavLink to="/posts">New post</NavLink>
              </Menu.Item>
              <Menu.Item key="setting" icon={<SettingOutlined />}>
                <NavLink to="/setting">Settings</NavLink>
              </Menu.Item>
              <Menu.Item key="profile">
                <NavLink to="/profile">
                  {/* <Avatar icon={<UserOutlined />}/> {"  "} */}
                  <Avatar
                    src={
                      user?.result.image
                        ? 'https://joeschmoe.io/api/v1/random'
                        : 'https://api.realworld.io/images/smiley-cyrus.jpeg'
                    }
                    style={{ width: 30, height: 30 }}
                  />{' '}
                  {'   '}
                  {user?.result.name}
                </NavLink>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Col>
    </Row>
  );
};

export default HeaderComponents;
