import React from 'react';
import { Card, Col, Tag } from 'antd';
import { styles } from '../styles/styles';



export class OnAboutHover extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardOpen}> About </Card>
                <Col span={24}><Card style={styles.cardOpen}>I am a rising Junior studying Computer Science at the University of Texas at Arlington</Card></Col>
                <Col span={24}><Card style={styles.cardOpen}>I specialize in front-end and am familar with mulitple framworks like <Tag color="#2db7f5">flutter</Tag> <Tag color="#87d068">react</Tag></Card></Col>
            </div>
        );
    }
}

export class OnAboutRelease extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardClosed}> About </Card>
            </div>
        );
    }
}

// export class OnAboutHover   