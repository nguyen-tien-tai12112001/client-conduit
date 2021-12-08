import React, { useState } from 'react'
import "./index.css"
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const style :React.CSSProperties={backgroundColor :"#5cb85c",display: "flex",justifyContent: "center",alignItems:"center",height:"170px",flexDirection:"column",color:"#fff"}
const Home = () => {
    const [like, setLike] = useState<boolean>(false);
    const buttonHandler = () => {
        setLike(!like)    
      }
    return (
        <>
        <Row>
            <Col span={24} style ={style}>
            <Title level={3} style = {{color:"#fff",fontWeight:"bold",fontSize:"50px",margin:"10px 0px"}}>conduit</Title>
            <Title level={5} style = {{color:"#fff",fontSize:"20px",margin:"5px 0px 10px 0px"}}>A place to share your knowledge.</Title>
            </Col>
        </Row>
        <div>
            <Row justify="center">
                <Col xs={1} md={3} xl={3}></Col>
                <Col xs={20} md={14} xl={14}>
                    <div>
                        <div className="article-preview">
                            <div className="article-meta">
                                <a className="" href="#@Gerome">
                                    <img src="https://api.realworld.io/images/demo-avatar.png"/>
                                </a>
                                <div className="date">
                                    <a href="#@Gerome">Gerome</a>
                                    <span>Wed Nov 24 2021</span>
                                </div>
                                <div className="pull-xs-right">
                                    <button onClick={buttonHandler}>
                                        {like? <i className="fas fa-heart true"></i> :<i className="far fa-heart false"></i>}
                                    </button>
                                </div>
                            </div> 
                            <a className="preview-link" href="#article/Create-a-new-implementation-1">
                                <h1>Create a new implementation</h1>
                                <p>join the community by creating a new implementation</p>
                                <span>Read more...</span>
                                <ul className="tag-list">
                                    <li className="tag-default tag-pill tag-outline">implementations</li>
                                </ul>
                            </a>   
                        </div>
                    </div>
                </Col>
                <Col xs={0} md={4} xl={4}>
                <div className="sidebar"><p>Popular Tags</p><div className="tag-list"></div></div>
                </Col>
                <Col xs={1} md={3} xl={3}></Col>

                <Col xs={1} md={3} xl={3}></Col>
                {/* <Col xs={20} md={14} xl={14}>
                    <div>
                        <div className="article-preview">
                            <div className="article-meta">
                                <a className="" href="#@Gerome">
                                    <img src="https://api.realworld.io/images/demo-avatar.png"/>
                                </a>
                                <div className="date">
                                    <a href="#@Gerome">Gerome</a>
                                    <span>Wed Nov 24 2021</span>
                                </div>
                                <div className="pull-xs-right">
                                    <button onClick={buttonHandler}>
                                        {like? <i className="fas fa-heart true"></i> :<i className="far fa-heart false"></i>}
                                    </button>
                                </div>
                            </div> 
                            <a className="preview-link" href="#article/Create-a-new-implementation-1">
                                <h1>Create a new implementation</h1>
                                <p>join the community by creating a new implementation</p>
                                <span>Read more...</span>
                                <ul className="tag-list">
                                    <li className="tag-default tag-pill tag-outline">implementations</li>
                                </ul>
                            </a>   
                        </div>
                    </div>
                </Col>              
                <Col xs={1} md={7} xl={7}></Col>


                <Col xs={1} md={3} xl={3}></Col>
                <Col xs={20} md={14} xl={14}>
                    <div>
                        <div className="article-preview">
                            <div className="article-meta">
                                <a className="" href="#@Gerome">
                                    <img src="https://api.realworld.io/images/demo-avatar.png"/>
                                </a>
                                <div className="date">
                                    <a href="#@Gerome">Gerome</a>
                                    <span>Wed Nov 24 2021</span>
                                </div>
                                <div className="pull-xs-right">
                                    <button onClick={buttonHandler}>
                                        {like? <i className="fas fa-heart true"></i> :<i className="far fa-heart false"></i>}
                                    </button>
                                </div>
                            </div> 
                            <a className="preview-link" href="#article/Create-a-new-implementation-1">
                                <h1>Create a new implementation</h1>
                                <p>join the community by creating a new implementation</p>
                                <span>Read more...</span>
                                <ul className="tag-list">
                                    <li className="tag-default tag-pill tag-outline">implementations</li>
                                </ul>
                            </a>   
                        </div>
                    </div>
                </Col>              
                <Col xs={1} md={7} xl={7}></Col> */}
            </Row>

            
        </div>
    
    );

        </>

    )
}

export default Home
