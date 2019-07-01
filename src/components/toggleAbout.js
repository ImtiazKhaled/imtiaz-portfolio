import React from 'react';
import { Card } from 'antd';
import { styles } from '../styles/styles';



export class OnAboutHover extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardOpen}> About </Card>
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