import { Button, Col, Form, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { createPost, updatePost } from '../../actions/posts';

const { TextArea } = Input;
const styleBtn: React.CSSProperties = {
  backgroundColor: '#5cb85c',
  padding: '25px 25px',
  textAlign: 'center',
  borderRadius: '10px',
  borderColor: '#5cb85c',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '35px',
};
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
    setPostData({ title: '', message: '', tags: [], about: '' });
  };
  const onFinish = (values: any) => {
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
    <Row style={{ marginTop: '60px' }}>
      <Col span={4} />
      <Col span={16}>
        <Form
          name="basic"
          labelCol={{ span: 16 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="title"
            rules={[{ required: true, message: 'Please input your title!' }]}
          >
            <Input size="large" placeholder="Article Title" />
          </Form.Item>
          <Form.Item
            name="about"
            rules={[{ required: true, message: 'Please input your about!' }]}
          >
            <Input size="large" placeholder="What's this article about?" />
          </Form.Item>
          <Form.Item
            name="article"
            rules={[{ required: true, message: 'Please input your article!' }]}
          >
            <TextArea rows={7} placeholder="Write your article(in markdown)" />
          </Form.Item>
          <Form.Item
            name="tag"
            rules={[{ required: true, message: 'Please input your tag!' }]}
          >
            <Input size="large" placeholder="Enter tag" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 18, span: 16 }}>
            <Button type="primary" htmlType="submit" style={styleBtn}>
              Publish Article
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={4} />
    </Row>
  );
};

export default NewPost;
