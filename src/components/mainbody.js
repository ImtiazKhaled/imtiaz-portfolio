import React from 'react';
import Hoverable from './toggleHover';
import { Blank } from './blank';
import { OnAboutHover, OnAboutRelease } from './toggleAbout';
import { OnContactHover, OnContactRelease } from './toggleContact';
import { OnProjectHover, OnProjectRelease } from './toggleProject';
import { styles } from '../styles/styles';
import { Row, Col, Card } from 'antd';

export default class Mainbody extends React.Component {
    state = { hoveredAbout: false, hoveredContact: false, hoveredContact: false, };
    render() {
        return (
            <div styles={styles.backGround}>
                <Row>
                    <Col span={8}>
                        <Hoverable>
                            {hoveredAbout => <div>{hoveredAbout ? <OnAboutHover /> : <OnAboutRelease />}</div>}
                        </Hoverable>
                    </Col>
                    <Col span={8}>
                        <Hoverable>
                            {hoveredProject => <div>{hoveredProject ? <OnProjectHover /> : <OnProjectRelease />}</div>}
                        </Hoverable>
                    </Col>
                    <Col span={8}>
                        <Hoverable>
                            {hoveredContact => <div>{hoveredContact ? <OnContactHover /> : <OnContactRelease />}</div>}
                        </Hoverable>
                    </Col>
                </Row>
            </div>
        );
    }
}
