import React from 'react';
import { Button, Divider } from 'antd';
import { styles } from '../styles/styles';
import { emailto } from '../data/emailto';
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
                <div className='wow fadeInUp' data-wow-duration='1s' data-wow-iteration='1' style={styles.ContactInfo}>
                    <div style={styles.SubtitleTwo}>
                        I am currently looking for internships, and would be delighted to be contacted by potential employers.
                    </div>
                    <div style={styles.SubtitleFour}> Shoot me an email @</div>
                    <a href={emailto}><div style={styles.SubtitleThree}> imtiazkhaled07@gmail.com </div></a>
                </div>
            </div>
        );
    }
}
