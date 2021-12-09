import React, { useEffect, useState } from 'react'
import { Menu ,Layout,Row,Col, Button} from 'antd';
import { HomeOutlined, FormOutlined, SettingOutlined,LoginOutlined,PlusCircleOutlined ,PoweroffOutlined} from '@ant-design/icons';
import { Typography } from 'antd';

import { Avatar, Image } from 'antd';

import { useDispatch } from 'react-redux';
import {Routes,Route,Link, useNavigate, useLocation } from "react-router-dom"
// import * as actionType from '../../constants/actionTypes';
const { Title } = Typography;

const style = { background: '#fff',frontSize:'18px',width:"100%",height:"100%"};
const styleLink = {marginLeft:"120px",color:"#5cb85c"}
const HeaderComponents = () => {
    var storage: any = localStorage.getItem('profile');
  const [user, setUser] = useState<any>(JSON.parse(storage));
  console.log("🚀 ~ file: index.tsx ~ line 18 ~ HeaderComponents ~ user", user)
 
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.clear()
    navigate("/login")
  }
  useEffect(() => {

    setUser(JSON.parse(storage));
  }, [location]);

    return (
        <Layout className="layout">
            <Row>
        <Col  span={12}>
           
            <Title level={3} style={style}>
              
            <Link to="/" style={styleLink}>conduit
            </Link>
            </Title>
        </Col>
        <Col  span={12}>
        
            
          <Menu  mode="horizontal">
        <Menu.Item key="email" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
            </Menu.Item>
        {!user ? (
        <>
        <Menu.Item key="login"  icon={<LoginOutlined />}>
        <Link to="/login">Sign in</Link>    
        </Menu.Item>
        <Menu.Item key="register"  icon={<PlusCircleOutlined />}>
        <Link to="/register">Sign up</Link>
        </Menu.Item>
        </>) : (
        <>
        <Menu.Item key="post"  icon={<FormOutlined />}>
        <Link to="/posts">New post</Link>    
        </Menu.Item>
        <Menu.Item key="setting"  icon={<SettingOutlined />}>
        <Link to="/setting">Settings</Link>
        </Menu.Item>
        <Menu.Item key="profile">
        <Link to="/profile">
        {/* <Avatar icon={<UserOutlined />}/> {"  "} */}
        <Avatar  src={user?.result.image  ? "https://joeschmoe.io/api/v1/random" : "https://api.realworld.io/images/smiley-cyrus.jpeg"} style={{ width:30,height:30 }}  /> { '   '}
        {user?.result.name }
        </Link>
        </Menu.Item>
        <Menu.Item key="logout">
        <Button 
            type="primary"
            icon={<PoweroffOutlined />}
            onClick = {handleLogout}
          >
            Log out
          </Button>
        </Menu.Item>
        </>)
}

        
       
      </Menu>
      
        </Col>
            </Row>
        </Layout>
    )
}

export default HeaderComponents
