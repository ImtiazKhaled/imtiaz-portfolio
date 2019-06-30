import React from 'react';
import { Card } from 'antd';
import { styles } from '../styles/styles';



export class OnContactHover extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardOpen}> Github, Devpost, Linkedin </Card>
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
