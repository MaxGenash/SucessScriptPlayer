import React, { Component } from 'react'
import mathDocumentTitleByPathName from "../../utils/mathDocumentTitleByPathName"

import NavLink from '../../components/NavLink'

export default class App extends Component {

    testApi() {
        return fetch(
            "http://api-techno.azurewebsites.net/api/test/say"/*,
            {
                credentials: 'omit',
                mode: 'no-cors',
                method: 'get',
                //body: JSON.stringify({access_token}),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                   // 'Authorization': 'Bearer ' + access_token
                    //'X-CSRFToken': CSRF_TOKEN
                }
            } */)
            .then( response => {
                console.log("Success!!");
                console.log("response=",response);
            })
            .catch( error => {
                console.log("error:", error);
            });
    }

    componentDidMount() {
        this.testApi();
    }

    render() {
        return (
            <div className='container'>
                <ul className='nav nav-pills'>
                    <li><NavLink onlyActiveOnIndex={true} to='/'>Главная</NavLink></li>
                    <li><NavLink to='/admin'>Админка</NavLink></li>
                    <li><NavLink to='/list'>Список жанров</NavLink></li>
                    <li><NavLink to='/login'>Войти</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
