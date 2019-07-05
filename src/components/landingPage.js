import React from 'react';
import { Button, Tag } from 'antd';
import { styles } from '../styles/styles';
import { emailto } from '../data/emailto';
import WOW from 'wowjs';


export class Landing extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={styles.Landing}>
                <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' style={this.props.responsive.Subtitle}> Hello i'm</div>
                <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' style={this.props.responsive.Title}>Imtiaz Mujtaba Khaled.</div>
                <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' style={this.props.responsive.SubtitleFive}>A passionate student and Software Developer</div>
                <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' style={this.props.responsive.SubtitleTwo}>
                    I major in Computer Science, currently in my Junior Year at the University of Texas at Arlington.
                        </div>
                <a href={emailto}>
                    <Tag style={styles.ContactMeTag}>
                        contact me
                </Tag>
                </a>
            </div>
        );
    }
}
