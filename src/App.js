import React, { Component } from 'react'
import './App.css';
import Header from './Header.js'
import Main from './Main.js';
import Vanessa from './Vanessa.js';
import Footer from './Footer.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Vanessa />
                <Footer />
            </div>
        )
    }
}
