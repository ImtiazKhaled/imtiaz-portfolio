import React from 'react';
import { styles } from '../../styles/styles';
import { Card } from 'antd';



export class Blank extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <div><Card style={styles.cardClosed}></Card></div>
        );
    }
}
