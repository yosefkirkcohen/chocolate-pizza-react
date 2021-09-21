import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                 <footer>
        <hr className='bottom-line'/>
        <img src="./assets/small-logo.png" alt='kiss my ass' />
       <div className="copyright">Delicious &copy; 2013 - All rights reserved <br/>
            Proudly published with Ghost.
        </div>
    </footer>
            </div>
        )
    }
}
