import React from 'react';
import { Typography, Card, Col, Row, Tag } from 'antd';
import { styles } from '../styles/styles';
import { projects } from '../projectsData/projects';
const { Title } = Typography;


export class OnProjectHover extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardOpen}> Projects </Card>
                {projects.map(project =>
                    <Col span={24}><Card key={project.id} style={styles.cardOpen}>
                        <Row> <Tag color='#001f3f'> {project.type} </Tag> </Row>
                        <Row>
                            <Col span={10}>
                                <img width='100%' styles={styles.logo} src={project.logo} ></img>
                            </Col>
                            <Col span={10}>
                                <Row>
                                    <Title style={styles.projectTitle}>{project.title}</Title>
                                </Row>
                                <Row>
                                    Stack {project.stack.map(i => <Tag color='#85144b'>{i}</Tag>)}
                                </Row>
                                <Row>
                                    <a href={project.sourceCode}><Tag color='#3D9970'>Source Code</Tag></a>
                                    {/* <a href={project.websiteLink}><Tag>Website Link</Tag></a> */}
                                </Row>
                            </Col>
                        </Row>
                        <Row> {project.description} </Row>
                    </Card></Col>
                )}
                {/* <Col span={8}><Card style={styles.cardOpen}>subbey</Card></Col>
                <Col span={8}><Card style={styles.cardOpen}>fitnessApp</Card></Col> */}
            </div>
        );
    }
}

export class OnProjectRelease extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardClosed}> Projects </Card>
            </div>
        );
    }
}
