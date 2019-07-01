import React from 'react';
import { Card } from 'antd';
import { styles } from '../../styles/styles';


export class OnWorkHover extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardOpen}> Work </Card>
            </div>
        );
    }
}

export class OnWorkRelease extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardClosed}> Work </Card>
            </div>
        );
    }
}
