import React from 'react';
import { Card, Col, Tag } from 'antd';
import { styles } from '../styles/styles';



export class OnContactHover extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardOpen}> Contact </Card>
                <Col span={8}><Card style={styles.cardOpen}>I am actively looking</Card></Col>
                <Col span={8}><Card style={styles.cardOpen}>for internships and</Card></Col>
                <Col span={8}><Card style={styles.cardOpen}>would be delighted to</Card></Col>
                <Col span={8}><Card style={styles.cardOpen}>be contacted </Card></Col>
                <Col span={8}><Card style={styles.cardOpen}>by a potential</Card></Col>
                <Col span={8}><Card style={styles.cardOpen}>employer my email</Card></Col>
                <Col span={8}><Card style={styles.cardOpen}>address is</Card></Col>
                <Col span={8}><Card style={styles.cardOpen}><a><Tag color='#f50'>imtiazkhaled07@gmail.com</Tag></a></Card></Col>
            </div>
        );
    }
}

export class OnContactRelease extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardClosed}> Contact </Card>
            </div>
        );
    }
}
