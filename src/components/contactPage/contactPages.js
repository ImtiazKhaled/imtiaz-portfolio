import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import { styles } from '../../styles/contactPageStyles';
import WOW from 'wowjs';
const { Title } = Typography;
const { Header, Footer } = Layout;


export class Contact extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div>
                <Row style={styles.contactPage}>
                    <Header style={styles.contactHeader}>
                        <h1 className='wow jackInTheBox' data-wow-duration='1s' data-wow-iteration='1' style={styles.contactTitle}>Contact.</h1>
                    </Header>
                </Row>
                <Row>
                    <Footer style={styles.contactFooter}>Imtiaz Mujtaba Khaled ©2019</Footer>
                </Row>
            </div>
        );
    }
}
