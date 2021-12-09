import React, { useEffect, useState } from 'react'
import { Row, Col, Divider } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updatePost,createPost } from '../../actions/posts';
const { TextArea } = Input;
const styleBtn:React.CSSProperties ={backgroundColor:"#5cb85c",padding:"25px 25px",textAlign:"center",borderRadius:"10px",borderColor:"#5cb85c",fontSize:"20px",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"35px"}
const NewPost = () => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: [],
    about: '',
  });
  const [currentId,setCurrentId] = useState(0)
  const post = useSelector((state:any) =>
    currentId
      ? state?.posts.posts.find((message:any) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile') as string);
  const navigate:any = useNavigate();
  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: [], about: '' });
  };
  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

    const onFinish = (values: any) => {
      if (currentId === 0) {
        // console.log("🚀 ~ file: index.tsx ~ line 36 ~ onFinish ~ values", values)

        if (!values.title || !values.about || !values.article) return;
        dispatch(createPost({ ...values, name: user?.result?.name,image:user?.result?.image }, navigate));
        clear();
      } else {
        dispatch(
          updatePost(currentId, { ...postData, name: user?.result?.name })
        );
        clear();
      }
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <Row style={{marginTop:"60px"}}>
            <Col span={4}/>
            <Col span={16}>
            <Form
      name="basic"
      labelCol={{ span: 16 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        
        name="title"
        rules={[{ required: true, message: 'Please input your title!' }]}
      >
        <Input size="large" placeholder="Article Title"/>
      </Form.Item>
      <Form.Item
        
        name="about"
        rules={[{ required: true, message: 'Please input your about!' }]}
      >
        <Input size="large" placeholder="What's this article about?"/>
      </Form.Item>
      <Form.Item
        
        name="article"
        rules={[{ required: true, message: 'Please input your article!' }]}
      >
       <TextArea rows={7}  placeholder="Write your article(in markdown)"/>
      </Form.Item>
      <Form.Item
        
        name="tag"
        rules={[{ required: true, message: 'Please input your tag!' }]}
      >
        <Input size="large" placeholder="Enter tag"/>
      </Form.Item>



      

      <Form.Item wrapperCol={{ offset: 18, span: 16 }}>
        <Button type="primary" htmlType="submit" style={styleBtn}>
          Publish Article
        </Button>
      </Form.Item>


      </Form>

            </Col>
            <Col span={4}/>
        </Row>
    )
}

export default NewPost
