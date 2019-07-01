import React from 'react';
import { styles } from '../../styles/landingPageStyles';
import { Row, Col } from 'antd';


export class LandingSidebar extends React.Component {
    render() {
        return (
            <div style={{ alignItems: 'flex-end' }}>
                <Row>
                    <Col span={24}>
                        <a title='LinkedIn Page' href='https://www.linkedin.com/in/imtiaz-mujtaba-khaled-47b887171/'>
                            <img src={'https://img.icons8.com/ios/45/000000/linkedin-filled.png'} alt='linkedin_link' />
                        </a>
                    </Col>
                    <Col span={24}>
                        <a title='Github Page' href='https://github.com/ImtiazKhaled'>
                        <img src={'https://img.icons8.com/ios-glyphs/45/000000/github.png'} alt='github_link' />
                        </a>
                    </Col>
                    <Col span={24}>
                        <a title='Devpost Page' href='https://devpost.com/ImtiazMujtabaKhaled?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'>
                        <img src={'https://img.icons8.com/material/45/000000/devpost.png'} alt='devpost_link' />
                        </a>
                    </Col>
                </Row>
                <div>
                    <a style={styles.landingCreditLink} href='https://icons8.com/icon/8808/linkedin-filled'>LinkedIn Filled icon by Icons8</a>
                    <a style={styles.landingCreditLink} href='https://icons8.com/icon/62856/github'>GitHub icon by Icons8</a>
                    <a style={styles.landingCreditLink} href='https://icons8.com/icon/37687/dev-post'>Dev Post icon by Icons8</a>
                </div>
            </div>
        );
    }
}


export class LandingSidebarSmall extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={6} offset={5}>
                        <a title='LinkedIn Page' href='https://www.linkedin.com/in/imtiaz-mujtaba-khaled-47b887171/'>
                            <img src={'https://img.icons8.com/ios/45/000000/linkedin-filled.png'} alt='linkedin_link' />
                        </a>
                    </Col>
                    <Col span={6} offset={0}>
                        <a title='Github Page' href='https://github.com/ImtiazKhaled'>
                        <img src={'https://img.icons8.com/ios-glyphs/45/000000/github.png'} alt='github_link' />
                        </a>
                    </Col>
                    <Col span={6} offset={0}>
                        <a title='Devpost Page' href='https://devpost.com/ImtiazMujtabaKhaled?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'>
                        <img src={'https://img.icons8.com/material/45/000000/devpost.png'} alt='devpost_link' />
                        </a>
                    </Col>
                </Row>
                <div>
                    <a style={styles.landingCreditLink} href='https://icons8.com/icon/8808/linkedin-filled'>LinkedIn Filled icon by Icons8</a>
                    <a style={styles.landingCreditLink} href='https://icons8.com/icon/62856/github'>GitHub icon by Icons8</a>
                    <a style={styles.landingCreditLink} href='https://icons8.com/icon/37687/dev-post'>Dev Post icon by Icons8</a>
                </div>
            </div>
        );
    }
}
