import React from 'react';
import WOW from 'wowjs';



export class WhoDetails extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={this.props.responsive.WhoTab}>
                <div {...this.props.responsive.Animation} style={this.props.responsive.SubtitleSix}>
                    {this.props.data.title}
                </div>
                <a href={this.props.data.subtitleLink}>
                    <div {...this.props.responsive.Animation} data-wow-delay='100ms' style={this.props.responsive.SubtitleSeven}>
                        {this.props.data.subtitle}
                    </div>
                </a>
                <div {...this.props.responsive.Animation} data-wow-delay='200ms' style={this.props.responsive.SubtitleEight}>
                    {this.props.data.duration}
                </div>
                {this.props.data.description.map(
                    description => <div style={this.props.responsive.SubtitleNine} {...this.props.responsive.Animation} data-wow-delay='300ms'>
                        {description}
                    </div>
                )}
            </div>

        );
    }
}