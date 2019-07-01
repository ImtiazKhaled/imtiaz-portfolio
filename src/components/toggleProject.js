import React from 'react';
import { Card } from 'antd';
import { styles } from '../styles/styles';


export class OnProjectHover extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardOpen}> Projects </Card>
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
