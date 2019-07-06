import React from 'react';
import { Card, Col, Row, Tag, Typography, Icon } from 'antd';
import { styles } from '../styles/styles';
import WOW from 'wowjs';
const { Title } = Typography;


export class WorkDetails extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className='wow fadeInRight' data-wow-duration='1s' data-wow-iteration='1' style={this.props.responsive.WorkTab}>
                <div> <Icon style={this.props.responsive.WorkIcon} type="folder" /></div>
                <div style={this.props.responsive.WorkTitle}> {this.props.data.title}</div>
                <Row>
                    {this.props.data.sourceCodeAvailable ? <Col span={12}>
                        <a href={this.props.data.sourceCode}>
                            <Icon style={this.props.responsive.WorkSocialLink} type="github" />
                        </a>
                    </Col> :
                        <div></div>}
                    {this.props.data.websiteCodeAvailable ? <Col span={12}>
                        <a href={this.props.data.websiteLink}>
                            <Icon style={this.props.responsive.WorkSocialLink} type="layout" />
                        </a>
                    </Col> :
                        <div></div>}
                </Row>
                <Row><div style={this.props.responsive.WorkDetails}>{this.props.data.description}</div></Row>
                <Row>
                    {this.props.data.stack.map(stack => <Tag style={this.props.responsive.WorkTags}> {stack} </Tag>)}
                </Row>
            </div>
            // <Col className='wow fadeInUp' data-wow-duration='1s' data-wow-iteration='1' span={this.props.responsive.WorkColSize} style={styles.WorkCardContainer}>
            // </Col>
        );
    }
}