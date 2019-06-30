import React from 'react';
import { styles } from '../styles/styles';
import { Row, Col } from 'antd';


export default class Sidebar extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div style={{ alignItems: 'flex-end' }}>
                <Row>
                    <Col span={24}>
                        <img src={"https://img.icons8.com/ios/45/aeaeae/linkedin-filled.png"} alt="linkedin_link" />
                    </Col>
                    <Col span={24}>
                        <img src={"https://img.icons8.com/ios-glyphs/45/aeaeae/github.png"} alt="github_link" />
                    </Col>
                    <Col span={24}>
                        <img src={"https://img.icons8.com/material/45/aeaeae/devpost.png"} alt="devpost_link" />
                    </Col>
                </Row>
                <div>
                    <a style={styles.creditLink} href="https://icons8.com/icon/8808/linkedin-filled">LinkedIn Filled icon by Icons8</a>
                    <a style={styles.creditLink} href="https://icons8.com/icon/62856/github">GitHub icon by Icons8</a>
                    <a style={styles.creditLink} href="https://icons8.com/icon/37687/dev-post">Dev Post icon by Icons8</a>
                </div>
            </div>
        );
    }
}
