import React from 'react';
import './App.css';
import Mainbody from './components/mainbody';
import Sidebar from './components/sidebar';
import { Typography, Row, Col, Layout, Menu, Icon } from 'antd';
import { styles } from './styles/styles';
const { Title } = Typography;
const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;


function App() {
  return (
    <Layout>
      <Header style={styles.backGround}>
        <Title>Imtiaz Mujtaba Khaled</Title>
      </Header>
      <Layout>
        <Layout style={styles.backGround}>
          <Row type="flex">
            <Col styles={styles.backGround} span={22}>
              <Mainbody />
            </Col>
            <Col span={2}>
              <Sidebar />
            </Col>
          </Row>
        </Layout>
      </Layout>
      <Footer style={styles.backGround}>Imtiaz Mujtaba Khaled ©2019</Footer>
    </Layout>
  );
}
export default App;
