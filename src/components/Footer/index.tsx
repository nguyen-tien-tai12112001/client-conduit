import { GithubOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
const style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#333',
  color: '#fff',
  width: '100%',
  height: '80px',
  position: 'fixed',
  bottom: '0px',
};
const Footer = () => {
  return (
    <Row>
      <Col span={24} style={style}>
        <a
          href="https://github.com/nguyen-tien-tai12112001/client-conduit"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '30px', color: '#fff' }}
        >
          <GithubOutlined /> {'  '}Fork on Github
        </a>
      </Col>
    </Row>
  );
};

export default Footer;
