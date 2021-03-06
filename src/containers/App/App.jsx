import React, { Component, PropTypes } from 'react';
import './App.scss';

import { Switch, Route, Router } from 'react-router-dom'
import Header from '../../components/Header/Header';
import ExamplePage from '../ExamplePage/ExamplePage';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='app__container'>
                <Header {...this.state} />
                <Switch>
                    <Route exact path='/' render={(props) => (
                        <ExamplePage {...props} />
                    )} />
                </Switch>
            </article >
        );
    }
}