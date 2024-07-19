
import * as React from 'react';
import Button from "./Button";
import {Scoreboard} from "./Scoreboard";

type CounterPropsType = {
    incValue: () => void
    resetValue: () => void
    maxIncrementValue: number
    currentIncrementValue: number
}

export const Counter = ({incValue, resetValue, maxIncrementValue, currentIncrementValue}: CounterPropsType) => {
    return (
        <div>
            max: {maxIncrementValue}
            <Scoreboard currentIncrementValue={currentIncrementValue}/>
            <div>
                <Button title={'inc'} onClickHandler={incValue}/>
                <Button title={'reset'} onClickHandler={resetValue}/>
            </div>
        </div>
    )
}