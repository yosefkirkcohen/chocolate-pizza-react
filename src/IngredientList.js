import React, { Component } from 'react'
import IngredientItem from './IngredientItem.js'
import { data1 } from './data.js'
import { data2 } from './data.js'

export default class IngredientList extends Component {
    render() {
        return (
            <div className='list'>
                <div className='listone'>
                <ul>
                    {data1.map((ingredient) => {
                        return <IngredientItem 
                                  amount= {ingredient.amount}
                                  ingredient= {ingredient.ingredient} 
                                    />
                    })}

                    

                </ul>
            </div>
            <div className='listtwo'>
                <ul>
                {data2.map((ingredient) => {
                        return <IngredientItem 
                                  amount= {ingredient.amount}
                                  ingredient= {ingredient.ingredient} 
                                    />
                    })}
                </ul>
            </div>
            </div>
        )
    }
}
