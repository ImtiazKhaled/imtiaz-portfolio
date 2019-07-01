import React from 'react';
import { Col } from 'antd';
import { Blank } from './blank';

export default class DetailsContact extends React.Component {
    render() {
        return (
            <div>
                <Col span={8}><Blank /></Col>
                <Col span={8}><Blank /></Col>
                <Col span={8}><Blank /></Col>
            </div>
        )
    }
}
