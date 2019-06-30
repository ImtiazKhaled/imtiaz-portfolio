import React from 'react';
import { Card } from 'antd';
import { styles } from '../styles/styles';



export class OnAboutMeHover extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardOpen}> I am a junior computer science major
                    in the university of Texas at Arlington </Card>
            </div>
        );
    }
}

export class OnAboutMeRelease extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div>
                <Card style={styles.cardClosed}> About Me </Card>
            </div>
        );
    }
}
