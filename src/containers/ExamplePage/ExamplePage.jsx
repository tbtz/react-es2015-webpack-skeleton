import React, { Component, PropTypes } from 'react';
import './ExamplePage.scss';

import ApiService from '../../services/ApiService'

export default class ExamplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        ApiService.getJSON('http://localhost:3000/').then(response => {
            console.log(response);
        });

        ApiService.postJSON('http://localhost:3000/', { key: 'value' }).then(response => {
            console.log(response);
        });
    }

    render() {
        return (
            <section className='examplePage__container'>
                Example Page
            </section >
        );
    }
}