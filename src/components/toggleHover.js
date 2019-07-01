import React from 'react';

export default class Hoverable extends React.Component {
    state = { hovered: false };

    inverseState = e => {
        this.props.showDetails()
        this.setState({
            hovered: !this.state.hovered
        })
    }

    render() {
        return (
            <div onClick={this.inverseState}>
                {this.props.children(this.state.hovered)}
            </div>
        );
    }
}
