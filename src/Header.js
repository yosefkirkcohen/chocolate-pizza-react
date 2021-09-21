import React, { Component } from 'react'
import ButtonList from './ButtonList.js';


export default class Header extends Component {
    render() {
        return (
            <div className='delicious'>
                <ButtonList />
                <img src='/assets/logo.png' alt='logo' align='left'/>
                <div className='logo'>
                    Delicious
                </div>
                <div className='best-food'>
                The best food blog on the web
                </div> 
            </div>
        )
    }
}
