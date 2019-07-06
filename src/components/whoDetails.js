import React from 'react';
import { styles } from '../styles/styles';
import WOW from 'wowjs';



export class WhoDetails extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={this.props.responsive.WhoTab}>
                <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' style={this.props.responsive.SubtitleSix}>
                    {this.props.data.title}
                </div>
                <a href={this.props.data.subtitleLink}>
                    <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' data-wow-delay='100ms' style={this.props.responsive.SubtitleSeven}>
                        {this.props.data.subtitle}
                    </div>
                </a>
                <div className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' data-wow-delay='200ms' style={this.props.responsive.SubtitleEight}>
                    {this.props.data.duration}
                </div>
                {this.props.data.description.map(
                    description => <div style={this.props.responsive.SubtitleNine} className='wow fadeInDown' data-wow-duration='1s' data-wow-iteration='1' data-wow-delay='300ms'>
                        {description}
                    </div>
                )}
            </div>
        );
    }
}