import React from 'react';
import { styles } from '../../styles/styles';
import { Row, Col, Card, Tag, Typography } from 'antd';
import { projects } from '../../projectsData/projects';
const { Title } = Typography;

export default class DetailsProject extends React.Component {
    render() {
        return (
            <div>
                {projects.map(project =>
                    <Col span={8}><Card key={project.id} style={styles.cardOpen}>
                        <Row> <Tag color='#001f3f'> {project.type} </Tag> </Row>
                        <Row>
                            <Col span={10}>
                                <img width='100%' styles={styles.logo} src={project.logo} ></img>
                            </Col>
                            <Col style={{ paddingLeft: '1em' }} span={10}>
                                <Row>
                                    <Title style={styles.projectTitle}>{project.title}</Title>
                                </Row>
                                <Row>
                                    Stack {project.stack.map(i => <Tag color='#85144b'>{i}</Tag>)}
                                </Row>
                                <Row>
                                    <a href={project.sourceCode}><Tag color='#3D9970'>Source Code</Tag></a>
                                </Row>
                            </Col>
                        </Row>
                        <Row> {project.description} </Row>
                    </Card></Col>
                )}
            </div>

        )
    }
}
