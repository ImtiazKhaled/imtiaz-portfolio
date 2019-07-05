import React from 'react';
import { Tabs, Divider, Row, Col } from 'antd';
import { styles } from '../styles/styles';
import { WorkDetails } from './workDetails';
import { Element } from 'react-scroll';
import { work } from '../data/work';
const TabPane = Tabs.TabPane;

export class Work extends React.Component {
    render() {
        return (
            <Element name="work" >
                <div style={styles.MainPage}>
                    <Divider>
                        <div style={styles.Subtitle}>
                            Work
                    </div>
                    </Divider>
                    <Row>
                        {work.map(work =>
                            <WorkDetails data={work} />
                        )}
                    </Row>
                </div>
            </Element>
        );
    }
}
