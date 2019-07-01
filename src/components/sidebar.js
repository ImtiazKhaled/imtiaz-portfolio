import React from 'react';
import { styles } from '../styles/styles';
import { colorThemes } from '../styles/colorThemes';
import { Row, Col } from 'antd';


export default class Sidebar extends React.Component {
    state = { iconColor: colorThemes.headerFooter, };
    render() {
        return (
            <div style={{ alignItems: 'flex-end' }}>
                <Row>
                    <Col span={24}>
                        <a title='LinkedIn Page' href='https://www.linkedin.com/in/imtiaz-mujtaba-khaled-47b887171/'>
                            <img src={'https://img.icons8.com/ios/45/aeaeae/linkedin-filled.png'} alt='linkedin_link' />
                        </a>
                    </Col>
                    <Col span={24}>
                        <a title='Github Page' href='https://github.com/ImtiazKhaled'>
                        <img src={'https://img.icons8.com/ios-glyphs/45/aeaeae/github.png'} alt='github_link' />
                        </a>
                    </Col>
                    <Col span={24}>
                        <a title='Devpost Page' href='https://devpost.com/ImtiazMujtabaKhaled?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'>
                        <img src={'https://img.icons8.com/material/45/aeaeae/devpost.png'} alt='devpost_link' />
                        </a>
                    </Col>
                </Row>
                <div>
                    <a style={styles.creditLink} href='https://icons8.com/icon/8808/linkedin-filled'>LinkedIn Filled icon by Icons8</a>
                    <a style={styles.creditLink} href='https://icons8.com/icon/62856/github'>GitHub icon by Icons8</a>
                    <a style={styles.creditLink} href='https://icons8.com/icon/37687/dev-post'>Dev Post icon by Icons8</a>
                </div>
            </div>
        );
    }
}
