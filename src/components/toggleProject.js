import React from 'react';
import { Card, Col } from 'antd';
import { styles } from '../styles/styles';



export class OnProjectHover extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardOpen}> Projects </Card>
                <Col span={8}><Card style={styles.cardOpen}>edunate</Card></Col>
                <Col span={8}><Card style={styles.cardOpen}>subbey</Card></Col>
                <Col span={8}><Card style={styles.cardOpen}>fitnessApp</Card></Col>
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
