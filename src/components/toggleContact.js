import React from 'react';
import { Card, Col, Tag } from 'antd';
import { styles } from '../styles/styles';



export class OnContactHover extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardOpen}> Contact </Card>
                <Col span={24}><Card style={styles.cardOpen}>I am actively looking for internships and would be delighted to be contacted by a potential employer </Card></Col>
                <Col span={24}><Card style={styles.cardOpen}>my email address is <a><Tag color='#f50'>imtiazkhaled07@gmail.com</Tag></a></Card></Col>
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
