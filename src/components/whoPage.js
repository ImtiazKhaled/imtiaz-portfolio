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
                        <div style={styles.Subtitle}>
                            Who
                    </div>
                    </Divider>
                    <Tabs style={styles.WhoTab} tabPosition={'left'}>
                        {who.map(who =>
                            <TabPane tab={who.tabName} key={who.id}> <WhoDetails data={who.props} /> </TabPane>
                        )}
                    </Tabs>
                </div>
            </Element>
        );
    }
}
