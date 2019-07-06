import React from 'react';
import { Tabs, Divider } from 'antd';
import { styles } from '../styles/styles';
import { WhoDetails } from './whoDetails';
import { who } from '../data/who';
import { Element } from 'react-scroll';
const TabPane = Tabs.TabPane;

export class Who extends React.Component {
    render() {
        return (
            <Element name='who'>
                <div style={styles.MainPage}>
                    <Divider orientation="left">
                        <div style={this.props.responsive.SubtitleTen}>
                            who
                    </div>
                    </Divider>
                    <Tabs style={styles.Tab} tabPosition={this.props.responsive.WhoTabPosition}>
                        {who.map(who =>
                            <TabPane tab={who.tabName} key={who.id}>
                                <WhoDetails responsive={this.props.responsive} data={who.props} />
                            </TabPane>
                        )}
                    </Tabs>
                </div>
            </Element>
        );
    }
}
