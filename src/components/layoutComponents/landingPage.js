import React from 'react';
import '../../App.css';
import { Typography, Row, Col, Layout } from 'antd';
import { styles } from '../../styles/styles';
const { Title } = Typography;
const { Header, Footer, Content } = Layout;


export default class MainPage extends React.Component {
    render() {
        return (
            <Layout>
                <Row>
                    <Header style={styles.landingPage}>
                        <Title style={styles.landingTitle}>Hi i'm, Imtiaz Mujtaba Khaled, and this is my website, click anywhere to get started</Title>
                    </Header>
                </Row>
                <Row>
                    <Footer style={styles.footer}>Imtiaz Mujtaba Khaled ©2019</Footer>
                </Row>
            </Layout>
        );
    }
}
