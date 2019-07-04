import React from 'react';
import { Button, Divider } from 'antd';
import { styles } from '../styles/styles';
import WOW from 'wowjs';


export class Contact extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={styles.ContactPage}>
                <Divider orientation="right">
                    <div style={styles.Subtitle}>
                        Contact
                    </div>
                </Divider>
                <div style={styles.SubtitleTwo}>
                    I am currently looking for internships, and would be delighted to be contacted by potential employers.
                </div>
                <div style={styles.SubtitleThree}> Shoot me an email @</div>
                <div style={styles.Subtitle}> imtiazkhaled07@gmail.com </div>
            </div>
        );
    }
}
