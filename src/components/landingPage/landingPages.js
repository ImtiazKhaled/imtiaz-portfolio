import React from 'react';
import { Typography, Row, Col, Layout } from 'antd';
import { styles } from '../../styles/landingPageStyles';
import { LandingSidebar, LandingSidebarSmall }  from './landingSidebar';
const { Title } = Typography;
const { Header, Footer } = Layout;

export class LandingSmall extends React.Component {
    render() {
        return (
            <div>
                    <Row style={styles.landingHeaderSmall}>
                        <Header style={styles.landingPageSmall}>
                            <Title style={styles.landingTitleSmall}>Hi i'm Imtiaz, a pasionate student web developer and this is my website</Title>
                        </Header>
                    </Row>
                    <Row style={styles.landingSidebarSmall}>
                        <LandingSidebarSmall/>
                    </Row>
                <Row>
                    <Footer style={styles.landingFooter}>Imtiaz Mujtaba Khaled ©2019</Footer>
                </Row>
            </div>
        );
    }
}


export class LandingMed extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={22} style={styles.landingCol}>
                        <Header style={styles.landingPage}>
                            <Title style={styles.landingTitleMedium}>Hi i'm Imtiaz, a pasionate student web developer and this is my website</Title>
                        </Header>
                    </Col>
                    <Col span={2} style={styles.landingSidebar}>
                        <LandingSidebar />
                    </Col>
                </Row>
                <Row>
                    <Footer style={styles.landingFooter}>Imtiaz Mujtaba Khaled ©2019</Footer>
                </Row>
            </div>
        );
    }
}

export class LandingLarge extends React.Component {
    render() {
        return (
            <div>
                <Row align="bottom">
                    <Col span={22} style={styles.landingCol}>
                        <Header style={styles.landingPage}>
                            <Title style={styles.landingTitleLarge}>Hi i'm Imtiaz, a pasionate student web developer and this is my website</Title>
                        </Header>
                    </Col>
                    <Col span={2} style={styles.landingSidebar}>
                        <LandingSidebar />
                    </Col>
                </Row>
                <Row>
                    <Footer style={styles.landingFooter}>Imtiaz Mujtaba Khaled ©2019</Footer>
                </Row>
            </div>
        );
    }
}

export class LandingXLarge extends React.Component {
    render() {
        return (
            <div>
                <Row align="bottom">
                    <Col span={22} style={styles.landingCol}>
                        <Header style={styles.landingPage}>
                            <Title style={styles.landingTitleXLarge}>Hi i'm Imtiaz, a pasionate student web developer and this is my website</Title>
                        </Header>
                    </Col>
                    <Col span={2} style={styles.landingSidebar}>
                        <LandingSidebar />
                    </Col>
                </Row>
                <Row>
                    <Footer style={styles.landingFooter}>Imtiaz Mujtaba Khaled ©2019</Footer>
                </Row>
            </div>
        );
    }
}