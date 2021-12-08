import React, { useEffect, useState } from 'react'
import { Row, Col ,Avatar,Image,Typography } from 'antd';
import { useLocation } from 'react-router';
const { Title } = Typography;
const style : React.CSSProperties= {display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"#f3f3f3",padding:"20px 0px"}
const Profile = () => {
  var storage: any = localStorage.getItem('profile');
  const [user, setUser] = useState<any>(JSON.parse(storage));
  const location = useLocation();
  useEffect(() => {

    setUser(JSON.parse(storage));
  }, [location]);

    return (
        <Row align="middle">
         
      <Col span={24} style ={style}>
      
      <Avatar  src={user?.result.image || user.image? "https://joeschmoe.io/api/v1/random" : "https://api.realworld.io/images/smiley-cyrus.jpeg"} style={{ width:150,height:150 }}  />
      <Title level={2}>{user?.result.name || user.name}</Title>
      </Col>
     

    </Row>
    )
}

export default Profile
