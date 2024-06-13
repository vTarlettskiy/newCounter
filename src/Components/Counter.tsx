import {useState} from "react";
import Button from "./Button";
import {Scoreboard} from "./Scoreboard";

type CounterPropsType = {

}

export const Counter = (props: CounterPropsType) => {

    const [disabledValue, setDisabledValue] = useState(false)

    const [incrementCount, setIncrement] = useState<number>(0)

    const [maxCountValue, setMaxCountValue] = useState(5)

    const incrementHandler = () => {
        setIncrement(incrementCount => incrementCount + 1)
        console.log(incrementCount)
        incrementCount === maxCountValue ? setDisabledValue(true) : setDisabledValue(false)
    }

    const resetCountOfIncrement = () => {
        setIncrement(0)
        setDisabledValue(false)
        setMaxCountValue(Math.floor(Math.random() * 11))
    }


    return (
        <div>
            Max value: {maxCountValue}
            <div>
                <Scoreboard disabledValue={disabledValue} incrementCount={incrementCount}/>

                <div>
                    <Button onClickHandler={incrementHandler} disabled={disabledValue} title={'inc'}/>
                    <Button onClickHandler={resetCountOfIncrement} title={'reset'}/>
                </div>
            </div>
        </div>
    );
};