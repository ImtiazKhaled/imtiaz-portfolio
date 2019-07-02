import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import { styles } from '../../styles/landingPageStyles';
// import { LandingSidebar, LandingSidebarSmall, LandingSidebarXSmall } from './landingSidebar';
const { Title } = Typography;
const { Header, Footer } = Layout;


export class Who extends React.Component {
    render() {
        return (
            <div>
                <Row style={styles.landingHeaderXSmall}>
                    <Header style={styles.landingPageXSmall}>
                        <Title strong style={styles.landingTitleXSmall}>Who</Title>
                    </Header>
                </Row>
                <Row style={styles.landingSidebarXSmall}>
                    {/* <LandingSidebarXSmall /> */}
                </Row>
                <Row>
                    <Footer style={styles.landingFooter}>Imtiaz Mujtaba Khaled ©2019</Footer>
                </Row>
            </div>
        );
    }
}
