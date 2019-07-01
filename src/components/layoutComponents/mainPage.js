import React from 'react';
import '../../App.css';
import BodyLayout from './bodylayout';
import HitCounter from './hitCounter';
import { Typography, Row, Col, Layout } from 'antd';
import { styles } from '../../styles/styles';
const { Title } = Typography;
const { Header, Footer } = Layout;


export default class MainPage extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ color: 'white' }}> This website is still under construction, many more things are left to be implemented.</Header>
                <Row style={styles.headerLayout}>
                    <Col span={6} />
                    <Col span={12}>
                        <Header style={styles.headerLayout}>
                            <Title style={styles.title}>Imtiaz Mujtaba Khaled</Title>
                        </Header>
                    </Col>
                    <Col span={4} />
                    <Col span={2}>
                        <HitCounter />
                    </Col>
                </Row>
                <BodyLayout />
                <Footer style={styles.footer}>Imtiaz Mujtaba Khaled ©2019</Footer>
            </Layout>
        );
    }
}
