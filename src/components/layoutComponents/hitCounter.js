import React from 'react';
import { styles } from '../../styles/styles';
import { Statistic, Icon } from 'antd';

export default class HitCounter extends React.Component {
    state = { counter: 1 };
    render() {
        return (<Statistic valueStyle={styles.hitCounter} title="page hits" value={this.state.counter} prefix={<Icon type="eye" />} />
        );
    }
}
