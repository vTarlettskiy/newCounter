import React, {ChangeEvent} from 'react';

type InputPropsType = {
    value: number
    setValue: (value: number) => void
    type: string
}

export const Input = ({type, setValue, value}: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.valueAsNumber)
    }

    return (
        <input type={type} value={value} onChange={onChangeInputHandler}/>
    )
}

