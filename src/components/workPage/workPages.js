import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import { styles } from '../../styles/workPageStyles';
import WOW from 'wowjs';
const { Title } = Typography;
const { Header, Footer } = Layout;


export class Work extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div>
                <Row style={styles.workPage}>
                    <Header style={styles.workHeader}>
                            <h1 className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' style={styles.workTitle}>Projects.</h1>
                        {/* <Col span={2} offset={3}>
                        </Col>
                        <Col span={2}>
                            <h1 className='wow fadeInDown' data-wow-duration='0.2s' data-wow-iteration='1' data-wow-delay='0.1s' style={styles.workTitle}>r</h1>
                        </Col>
                        <Col span={2}>
                            <h1 className='wow fadeInUp' data-wow-duration='0.2s' data-wow-iteration='1' data-wow-delay='0.2s' style={styles.workTitle}>o</h1>
                        </Col>
                        <Col span={2}>
                            <h1 className='wow fadeInDown' data-wow-duration='0.2s' data-wow-iteration='1' data-wow-delay='0.3s' style={styles.workTitle}>j</h1>
                        </Col>
                        <Col span={2}>
                            <h1 className='wow fadeInUp' data-wow-duration='0.2s' data-wow-iteration='1' data-wow-delay='0.4s' style={styles.workTitle}>e</h1>
                        </Col>
                        <Col span={2}>
                            <h1 className='wow fadeInDown' data-wow-duration='0.2s' data-wow-iteration='1' data-wow-delay='0.5s' style={styles.workTitle}>c</h1>
                        </Col>
                        <Col span={2}>
                            <h1 className='wow fadeInUp' data-wow-duration='0.2s' data-wow-iteration='1' data-wow-delay='0.6s' style={styles.workTitle}>t</h1>
                        </Col>
                        <Col span={2}>
                            <h1 className='wow fadeInDown' data-wow-duration='0.2s' data-wow-iteration='1' data-wow-delay='0.7s' style={styles.workTitle}>s</h1>
                        </Col>
                        <Col span={2}>
                            <h1 className='wow fadeInUp' data-wow-duration='0.2s' data-wow-iteration='1' data-wow-delay='0.8s' style={styles.workTitle}>.</h1>
                        </Col> */}
                    </Header>
                </Row>
                <Row>
                    <Footer style={styles.workFooter}>Imtiaz Mujtaba Khaled ©2019</Footer>
                </Row>
            </div>
        );
    }
}
