import React from 'react';
import { Card } from 'antd';
import { styles } from '../styles/styles';
import WOW from 'wowjs';



export class WhoDetails extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div>
                <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' style={styles.Subtitle}>
                    {this.props.data.title}
                </div>
                <a href={this.props.data.subtitleLink}>
                    <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' data-wow-delay='100ms' style={styles.SubtitleThree}>
                        {this.props.data.subtitle}
                    </div>
                </a>
                <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' data-wow-delay='200ms' style={styles.SubtitleFour}>
                    {this.props.data.duration}
                </div>
                {this.props.data.description.map(
                    description => <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' data-wow-delay='300ms'> {description} </div>
                )}
            </div>
        );
    }
}