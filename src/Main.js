import React, { Component } from 'react'
import BodyHeadContainer from './BodyHeadContainer.js';
import ChocolatePizza from './ChocolatePizza.js';
import PrintLogo from './PrintLogo.js';
import IngredientList from './IngredientList.js';

export default class Main extends Component {
    render() {
        return (
            <div>
                <BodyHeadContainer />
                <PrintLogo />
                <ChocolatePizza />
                <IngredientList />
            </div>
        )
    }
}
