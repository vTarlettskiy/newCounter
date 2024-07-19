import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";

export function App() {

    const [currentIncrementValue, setCurrentIncrementValue] = useState(0)

    const [maxIncrementValue, setMaxIncrementValue] = useState(0)

    // const [minIncrementValue, setMinIncrementValue] = useState(0)

    const incValue = () => {
        setCurrentIncrementValue(prev => prev + 1)
    }

    const resetValue = () => {
        setCurrentIncrementValue(0)
    }

    const setSettings = (minValue: number, maxValue: number) => {
        setMaxIncrementValue(maxValue)
        setCurrentIncrementValue(minValue)
    }



    return <div className='App'>
        <Settings setSettings={setSettings} />
        <Counter incValue={incValue} resetValue={resetValue} maxIncrementValue={maxIncrementValue} currentIncrementValue={currentIncrementValue}/>
    </div>
}