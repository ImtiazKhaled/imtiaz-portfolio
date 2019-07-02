import React from 'react';
import { styles } from '../../styles/styles';
import { Row, Col, Layout } from 'antd';
import Mainbody from './mainbody';
import Sidebar from './sidebar';


export default class Bodylayout extends React.Component {
    state = { hovered: false };
    render() {
        return (
            <Layout style={styles.bodyLayout}>
                <Row>
                    <Col styles={{backgroundCOlor: 'blue'}} span={22}>
                        <Mainbody />
                    </Col>
                    <Col span={2} style={styles.sidebar}>
                        <Sidebar />
                    </Col>
                </Row>
            </Layout>
        );
    }
}
