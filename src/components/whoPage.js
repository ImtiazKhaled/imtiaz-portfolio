import React from 'react';
import { Tabs, Divider } from 'antd';
import { styles } from '../styles/styles';
const TabPane = Tabs.TabPane;

export class Demo extends React.Component {
    render() {
        return (
            <div style={styles.WhoMain}>
                <Divider orientation="left">
                    <div style={styles.Subtitle}>
                        Who
                    </div>
                </Divider>
                <Tabs tabPosition={'left'}>
                    <TabPane tab="Student" key="1"> Content of Tab 1</TabPane>
                    <TabPane tab="Intern Software Engineer" key="2">Content of Tab 2</TabPane>
                    <TabPane tab="and many more.." key="3">Content of Tab 3</TabPane>
                </Tabs>
            </div>
        );
    }
}