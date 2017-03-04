import React, { Component } from 'react'
import mathDocumentTitleByPathName from "../utils/mathDocumentTitleByPathName"

import NavLink from '../components/Footer'

export default class App extends Component {
    componentDidMount() {
//        this.testApi();
    }

    render() {
        return (
            <div className='app'>
                {this.props.children}
            </div>
        )
    }
}
