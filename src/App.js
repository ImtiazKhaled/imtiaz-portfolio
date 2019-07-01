import React from 'react';
import './App.css';
import BodyLayout from './components/bodylayout';
import { Typography, Row, Col, Layout, Menu, Icon } from 'antd';
import { styles } from './styles/styles';
const { Title } = Typography;
const { Header, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{color: 'white'}}> This website is still under construction, many more things are left to be implemented.</Header>
      <Header style={styles.headerLayout}>
        <Title style={styles.title}>Imtiaz Mujtaba Khaled</Title>
      </Header>
      <BodyLayout />
      <Footer style={styles.footer}>Imtiaz Mujtaba Khaled ©2019</Footer>
    </Layout>
  );
}
export default App;
