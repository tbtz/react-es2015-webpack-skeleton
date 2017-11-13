import React, { Component, PropTypes } from 'react';
import './ExamplePage.scss';

export default class ExamplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
            <section className='examplePage__container'>
                Example Page
            </section >
        );
    }
}