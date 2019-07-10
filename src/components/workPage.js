import React from 'react';
import { Tabs, Divider, Row } from 'antd';
import { styles } from '../styles/styles';
import { WorkDetails } from './workDetails';
import { Element } from 'react-scroll';
import { work } from '../data/work';
const { TabPane } = Tabs;

export class Work extends React.Component {
    render() {
        return (
            <Element name="work" >
                <div style={styles.MainPage}>
                    <Divider>
                        <div style={this.props.responsive.SubtitleTen}>
                            work
                        </div>
                    </Divider>
                    <Row>
                        <Tabs style={styles.Tab} tabPosition={this.props.responsive.WhoTabPosition}>
                            {work.map(work =>
                                <TabPane tab={work.title} key={work.id}>
                                    <WorkDetails responsive={this.props.responsive} data={work} />
                                </TabPane>
                            )}
                        </Tabs>
                    </Row>
                </div>
            </Element>
        );
    }
}
