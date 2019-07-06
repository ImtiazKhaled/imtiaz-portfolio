import React from 'react';
import { Button, Divider } from 'antd';
import { styles } from '../styles/styles';
import { emailto } from '../data/emailto';
import { Element } from 'react-scroll';
import WOW from 'wowjs';


export class Contact extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <Element name="contact" >
                <div style={styles.ContactPage}>
                    <Divider orientation="right">
                        <div style={this.props.responsive.SubtitleTen}>
                            contact
                    </div>
                    </Divider>
                    <div style={styles.ContactInfo}>
                        <div className='wow fadeInUp' data-wow-duration='700ms' data-wow-iteration='1' style={this.props.responsive.SubtitleThree}>
                            I am currently looking for internships, and would be delighted to be contacted by potential employers.
                    </div>
                        <div className='wow fadeInUp' data-wow-duration='700ms' data-wow-iteration='1' data-wow-delay='100ms' style={this.props.responsive.SubtitleEleven}> Shoot me an email @</div>
                        <a href={emailto}>
                            <div className='wow fadeInUp' data-wow-duration='700ms' data-wow-iteration='1' data-wow-delay='200ms' style={this.props.responsive.SubtitleTwelve}> imtiazkhaled07@gmail.com</div>
                            </a>
                    </div>
                </div>
            </Element>
        );
    }
}
