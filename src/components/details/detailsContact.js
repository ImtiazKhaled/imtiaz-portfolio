import React from 'react';
import { styles } from '../../styles/styles';
import { Col, Card, Tag } from 'antd';

export default class DetailsContact extends React.Component {
    render() {
        return (
            <div>
                <Col span={8}><Card style={styles.cardOpen}>I am actively looking for internships and would be delighted to be contacted by a potential employer </Card></Col>
                <Col span={8}><Card style={styles.cardOpen}>my email address is <a><Tag color='#f50'>imtiazkhaled07@gmail.com</Tag></a></Card></Col>
            </div>


        )
    }
}
