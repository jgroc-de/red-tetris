import React from 'react'
import {emptySquared} from '../../../constanteValues'

function SSquare(props) {
    let cssClasses = ['s-square']
    if (props.square !== emptySquared) {
        cssClasses.push('filledSquare')
        cssClasses.push(props.square + 'Background')

    }
    return (<div className={cssClasses.join(' ')}></div>)
}

export default SSquare
