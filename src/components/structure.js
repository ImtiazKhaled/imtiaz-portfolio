import React from 'react';
import { Typography, Row, Col, Layout, Button, Divider } from 'antd';
import { styles } from '../styles/styles';
import WOW from 'wowjs';
import { Landing } from './landingPage';
import { Who } from './whoPage';
import { Work } from './workPage';
import { Contact } from './contactPage';
const { Title, Text } = Typography;
const { Header, Footer } = Layout;


export class Structure extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div>
                <Row style={styles.Page}>
                    <Landing />
                    <Who />
                    <Work />
                    <Contact />
                </Row>
                <Row>
                    <Footer style={styles.Footer}>Imtiaz Mujtaba Khaled ©2019</Footer>
                </Row>
            </div>
        );
    }
}
