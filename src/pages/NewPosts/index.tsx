
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { createPost, updatePost } from '../../actions/posts';

const { TextArea } = Input;



const NewPost = () => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: [],
    about: '',
  });

  const [currentId, setCurrentId] = useState(
    localStorage.getItem('currentId') as string
  );
  const post = useSelector((state: any) =>
    currentId
      ? state?.posts.posts.find((message: any) => message._id === currentId)
      : null
  );
  const user = JSON.parse(localStorage.getItem('profile') as string);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate: any = useNavigate();

  useEffect(() => {
    setCurrentId(localStorage.getItem('currentId') as string);
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post, location]);

  const clear = () => {
    setCurrentId('0');
    setPostData({ title: '', message: '', tags:[], about: '' });
  };
 

  const onFinish = (values:any) => {
    
    if (currentId === '0') {
      if (!values.title || !values.about || !values.article) return;
      dispatch(
        createPost(
          { ...values, name: user?.result?.name, image: user?.result?.image },
          navigate
        )
      );
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };

  return (
    <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
           <Form
          name="basic"
          
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
          className="form-group"
            name="title"
            rules={[{ required: true, message: 'Please input your title!' }]}
          >
            <Input size="large" 
                      className="form-control form-control-lg"
            
            placeholder="Article Title" />
          </Form.Item>
          <Form.Item
          className="form-group"
            name="about"
            rules={[{ required: true, message: 'Please input your about!' }]}
          >
            <Input size="large" 
                      className="form-control"
            
            placeholder="What's this article about?" />
          </Form.Item>
          <Form.Item
          className="form-group"
            name="article"
            rules={[{ required: true, message: 'Please input your article!' }]}
          >
            <TextArea rows={7}
                      className="form-control"
            
            placeholder="Write your article(in markdown)" />
          </Form.Item>
          <Form.Item
          className="form-group"
            name="tag"
            rules={[{ required: true, message: 'Please input your tag!' }]}
          >
            <Input size="large"
                      className="form-control"
            
            placeholder="Enter tag" />
          </Form.Item>

         
            <button type="submit"  className="btn btn-lg pull-sm-right btn-primary">
              Publish Article
            </button>
          



       </Form>
       </div>
          </div>
        </div>
      </div>
    
   
  );
};

export default NewPost;
