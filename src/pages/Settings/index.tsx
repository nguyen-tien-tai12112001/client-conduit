import React, { useEffect, useState } from 'react'
import { Row, Col, Divider ,Input,Form,Button} from 'antd';
import {Link,useNavigate,useLocation} from "react-router-dom"
import { useDispatch, } from 'react-redux';
import {updateProfile} from "../../actions/auth"
const { TextArea } = Input;
const style = { padding: '8px 0',fontSize:"42px",margin:"5px 0px" }
const Setting = () => {
  var storage: any = localStorage.getItem('profile');
  const [user, setUser] = useState<any>(JSON.parse(storage));
  const dispatch = useDispatch();
  const location = useLocation()
  const navigate = useNavigate();
    const onFinish = (values: any) => {
        dispatch(updateProfile(values,user.result._id, navigate))
        // console.log(values)
      };
      useEffect(() => {
        setUser(JSON.parse(storage))
        
      }, [location])
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <Row>
              <Col span={8}/>
              <Col span={8}>
              <Divider orientation="center" style = {style} plain >Your Settings</Divider>
         
        <Form
          name="basic"
        //   labelCol={{ span: 4 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          
          autoComplete="off"
        >
          <Form.Item
            // label="Email"
            name="url"
            rules={[{ required: true, message: 'Please input your url profile!' }]}
          >
            <Input placeholder="URL of profile picture" defaultValue = {user?.result?.image || user?.image || "https://api.realworld.io/images/smiley-cyrus.jpeg" }/>
            
          </Form.Item>
          <Form.Item
            // label="Email"
            name="username"
            rules={[{ required: true, message: 'Please input your user name!' }]}
          >
            <Input placeholder="Username" defaultValue={user?.result?.name ||user?.name} />
            
          </Form.Item>
          <Form.Item
            // label="Email"
            name="about"
            // rules={[{ required: true, message: 'Please input your email!' }]}
          >
            {/* <Input placeholder="Email" /> */}
            <TextArea rows={4}  placeholder="Short bio about you" defaultValue={user?.result?.bio || user?.bio}/>
            
          </Form.Item>
    
          <Form.Item
            // label="Password"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input  placeholder="Email" defaultValue={user?.result?.email || user.email}  />
            
          </Form.Item>
          <Form.Item
            // label="Password"
            name="newpassword"
            rules={[{ required: true, message: 'Please input your new password!' }]}
          >
            <Input.Password  placeholder="New password"  />
            
          </Form.Item>
    
          
    
          <Form.Item wrapperCol={{ offset: 17, span: 10 }}>
            <Button type="primary" htmlType="submit">
              Update change
            </Button>
          </Form.Item>
          
        </Form>
        
              </Col>
              <Col span={8}/>
         
        </Row>
    )
}

export default Setting
