import { Button, Col, Divider, Form, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import './setting.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from '../../actions/auth';

const style = { padding: '8px 0', fontSize: '38px', margin: '5px 0px' };
const Setting = () => {
  var storage: any = localStorage.getItem('profile');
  const data = useSelector((state: any) => state.auth.authData?.result);
  const [user, setUser] = useState<any>(JSON.parse(storage));
  const [picture, setPicture] = useState(data ? data.image : '');
  const [name, setName] = useState(data ? data.name : '');
  const [bio, setBio] = useState(data ? data.bio : '');
  const [email, setEmail] = useState(data ? data.email : '');
  const [password, setPassword] = useState(data ? data.password : '');

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(storage));
  }, [location]);

  const handlePicture = (e: any) => {
    setPicture(e.target.value);
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleBio = (e: any) => {
    setBio(e.target.value);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleUpdateProfile = (e: any) => {
    e.preventDefault();
    if (name === '' || email === '' || picture === '') {
      setName(data?.name);
      setEmail(data?.email);
      setPicture(data?.image);
    }
    const values = {
      email,
      newpassword: password,
      username: name,
      url: picture,
      about: bio,
    };
    dispatch(updateProfile(values, user.result._id, navigate));
  };

  return (
    <Row>
      <Col span={8} />
      <Col span={8}>
        <Divider orientation="center" style={style} plain>
          Your Settings
        </Divider>

        <form onSubmit={handleUpdateProfile}>
          <div className="Wrapper">
            <div className="Input">
              <input
                type="text"
                name="url"
                className="Input-text"
                placeholder="URL of profile picture"
                value={picture || 'https://picsum.photos/536/354'}
                onChange={handlePicture}
              />
            </div>
            <div className="Input">
              <input
                type="text"
                name="username"
                className="Input-text"
                placeholder="Username"
                value={name}
                onChange={handleName}
              />
            </div>
            <div className="Input">
              <textarea
                name="about"
                className="Input-text"
                placeholder="Short bio about you"
                value={bio}
                onChange={handleBio}
              />
            </div>
            <div className="Input">
              <input
                type="email"
                name="email"
                className="Input-text"
                placeholder="Email"
                onChange={handleEmail}
                value={email}
              />
            </div>
            <div className="Input">
              <input
                type="password"
                name="newpassword"
                className="Input-text"
                onChange={handlePassword}
                placeholder="New password"
                value={password}
              />
            </div>
          </div>
          <Button type="primary" htmlType="submit" className ="btnChange">
            Update change
          </Button>
        </form>
      </Col>
      
    </Row>
  );
};

export default Setting;
