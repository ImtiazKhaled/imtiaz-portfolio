import React from 'react';
import { styles } from '../../styles/styles';
import { Col, Card, Tag } from 'antd';

export default class DetailsAbout extends React.Component {
    render() {
        return (
            <div>
                <Col span={8}><Card style={styles.cardOpen}>I am a rising Junior studying Computer Science at the University of Texas at Arlington</Card></Col>
                <Col span={8}><Card style={styles.cardOpen}>I specialize in front-end and am familar with mulitple framworks like <Tag color="#2db7f5">flutter</Tag> <Tag color="#87d068">react</Tag></Card></Col>
            </div>
        )
    }
}