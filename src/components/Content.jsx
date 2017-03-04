import React, {Component} from "react";

export default class Content extends Component {
    render() {
        return (
            <div className="content-row">
                {this.props.children}
            </div>
        );
    }
}
