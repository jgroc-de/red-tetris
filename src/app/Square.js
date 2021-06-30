import React from 'react'
import {filledSquared, filledTetriminosSquared} from '../constanteValues'

function Square(props) {
    let cssClasses = ['square']
    if (props.square === filledTetriminosSquared) {
        cssClasses.push('colored')
    } else if (props.square === filledSquared) {
        cssClasses.push('colored-grey')
    }
    return (<div className={cssClasses.join(' ')}></div>)
}

export default Square
