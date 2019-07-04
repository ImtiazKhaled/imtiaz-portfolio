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
            <Col span={10} style={styles.WorkCardContainer}>
                <Card style={{
                    background: 'linear-gradient(to bottom, #800080, #8B008B',

                }}>
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
            // <Col span={12}><Card key={this.props.data.id} style={styles.cardOpen}>
            //     <Row> <Tag color='#001f3f'> {this.props.data.type} </Tag> </Row>
            //     <Row>
            //         <Col span={10}>
            //             <img width='100%' styles={styles.logo} src={this.props.data.logo} ></img>
            //         </Col>
            //         <Col style={{ paddingLeft: '1em' }} span={10}>
            //             <Row>
            //                 <Title style={styles.projectTitle}>{this.props.data.title}</Title>
            //             </Row>
            //             <Row>
            //                 Stack {this.props.data.stack.map(i => <Tag color='#85144b'>{i}</Tag>)}
            //             </Row>
            //             <Row>
            //                 <a href={this.props.data.sourceCode}><Tag color='#3D9970'>Source Code</Tag></a>
            //             </Row>
            //         </Col>
            //     </Row>
            //     <Row> {this.props.data.description} </Row>
            // </Card></Col>
        );
    }
}