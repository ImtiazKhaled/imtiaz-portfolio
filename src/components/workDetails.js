import React from 'react';
import { Card, Col, Row, Tag, Typography, Icon } from 'antd';
import { styles } from '../styles/styles';
import WOW from 'wowjs';
const { Title } = Typography;


export class WorkDetails extends React.Component {
    componentDidMount() {
        console.log('this is props',this.props.responsive);
        new WOW.WOW().init();
    }
    render() {
        return (
            <Col className='wow fadeInUp' data-wow-duration='1s' data-wow-iteration='1' span={this.props.responsive.workColSize} style={styles.WorkCardContainer}>
                <Card style={styles.WorkCardContainer}>
                    <Row>
                        <Col span={8}>
                            <div> <Icon style={styles.WorkIcon} type="folder" /></div>
                            <div style={styles.WorkTitle}> {this.props.data.title}</div>
                            <Row>
                                {this.props.data.sourceCodeAvailable ? <Col span={12}>
                                    <a href={this.props.data.sourceCode}>
                                        <Icon style={styles.WorkSocialLink} type="github" />
                                    </a>
                                </Col> :
                                    <div></div>}
                                {this.props.data.websiteCodeAvailable ? <Col span={12}>
                                    <a href={this.props.data.websiteLink}>
                                        <Icon style={styles.WorkSocialLink} type="layout" />
                                    </a>
                                </Col> :
                                    <div></div>}
                            </Row>
                        </Col>
                        <Col span={16}>
                            <Row><div style={styles.WorkDetails}>{this.props.data.description}</div></Row>
                            <Row>
                                {this.props.data.stack.map(stack => <Tag style={styles.WorkTags}> {stack} </Tag>)}
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>
        );
    }
}