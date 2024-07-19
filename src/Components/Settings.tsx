
import * as React from 'react';
import {Input} from "./Input";
import Button from "./Button";
import {useState} from "react";

type SettingsPropsType = {
    setSettings: (minValue: number, maxValue: number) => void
}

export const Settings = ({setSettings}: SettingsPropsType) => {

    const [maxSettingsValue, setMaxSettingsValue] = useState(0)

    const [minSettingsValue, setMinSettingsValue] = useState(0)

    const setSettingsHandler = () => {
        setSettings(minSettingsValue, maxSettingsValue)
    }

    return (
        <div>
            <div> max value:
                <Input value={maxSettingsValue} setValue={setMaxSettingsValue} type='number'/>
            </div>
            <div> min value:
                <Input value={minSettingsValue} setValue={setMinSettingsValue} type='number'/>
            </div>
            <div>
                <Button title={'set'} onClickHandler={setSettingsHandler}/>
            </div>
        </div>
    )
}