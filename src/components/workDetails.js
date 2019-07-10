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
            <div style={this.props.responsive.WorkTab}>
                <div {...this.props.responsive.Animation}> <Icon style={this.props.responsive.WorkIcon} type="folder" /></div>
                <div {...this.props.responsive.Animation} data-wow-delay='100ms' style={this.props.responsive.WorkTitle}> {this.props.data.title}</div>
                <Row {...this.props.responsive.Animation} data-wow-delay='200ms'>
                    {this.props.data.sourceCodeAvailable ?
                        <a href={this.props.data.sourceCode}>
                            <Icon style={this.props.responsive.WorkSocialLink} type="github" />
                        </a>
                        :
                        <div></div>}
                    {this.props.data.websiteLinkAvailable ?
                        <a href={this.props.data.websiteLink}>
                            <Icon style={this.props.responsive.WorkSocialLink} type="menu" />
                        </a>
                        :
                        <div></div>}
                </Row>
                <Row><div {...this.props.responsive.Animation} data-wow-delay='300ms' style={this.props.responsive.WorkDetails}>{this.props.data.description}</div></Row>
                <Row {...this.props.responsive.Animation} data-wow-delay='400ms'>
                    {this.props.data.stack.map(stack => <Tag style={styles.WorkTags}> {stack} </Tag>)}
                </Row>
            </div>
        );
    }
}