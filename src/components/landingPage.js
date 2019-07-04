import React from 'react';
import { Button } from 'antd';
import { styles } from '../styles/styles';
import WOW from 'wowjs';


export class Landing extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={styles.Landing}>
                <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' style={styles.Subtitle}> Hello i'm</div>
                <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' style={styles.Title}>Imtiaz Mujtaba Khaled.</div>
                <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' style={styles.Title}>A passionate student web developer</div>
                <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' style={styles.SubtitleTwo}>
                    I major in Computer Science, currently in my Junior Year at the University of Texas at Arlington.
                        </div>
                <Button style={styles.ContactMeButton}>
                    contact me
                </Button>
            </div>
        );
    }
}
