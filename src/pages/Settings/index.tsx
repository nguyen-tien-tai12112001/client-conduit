import React, { useEffect, useState } from 'react';
import './setting.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from '../../actions/auth';

const Setting = () => {
  var storage: any = localStorage.getItem('profile');
  const data = useSelector((state: any) => state.auth.authData?.result);

  const [user, setUser] = useState<any>(JSON.parse(storage));
  
  const [picture, setPicture] = useState(
    user ? user?.result?.image || data?.image : ''
  );
  const [name, setName] = useState(
    user ? user?.result?.name || data?.name : ''
  );
  const [bio, setBio] = useState(user ? user?.result?.bio || data?.bio : '');
  const [email, setEmail] = useState(
    user ? user?.result?.email || data?.email : ''
  );
  const [password, setPassword] = useState(
    user ? user?.result?.password || data?.password : ''
  );

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
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <form onSubmit={handleUpdateProfile}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="url"
                    placeholder="URL of profile picture"
                    value={picture || 'https://picsum.photos/536/354'}
                    onChange={handlePicture}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={name}
                    onChange={handleName}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    // rows="8"
                    placeholder="Short bio about you"
                    value={bio}
                    name="about"
                    onChange={handleBio}
                  ></textarea>
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    name="newpassword"
                    placeholder="New Password"
                    value={password}
                    onChange={handlePassword}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-sm-right"
                  type="submit"
                >
                  Update Settings
                </button>
              </fieldset>
            </form>

            <hr />

            <button
              style={{ marginBottom: '100px' }}
              className="btn btn-outline-danger"
              onClick={handleLogout}
            >
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
