import {useState} from "react";
import Button from "./Button";
import {Scoreboard} from "./Scoreboard";


export const Counter = () => {

    const [disabledValue, setDisabledValue] = useState(false)

    let [incrementCount, setIncrement] = useState<number>(0)

    const [maxCountValue, setMaxCountValue] = useState(5)

    const incrementHandler = () => {

        if (incrementCount < maxCountValue) {
            setIncrement(prevState => prevState + 1)
        }
        console.log(disabledValue)
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
                <Scoreboard incrementCount={incrementCount} className={incrementCount === maxCountValue ? 'tableDisabled' : 'table'}/>

                <div>
                    <Button onClickHandler={incrementHandler} disabled={incrementCount === maxCountValue}  title={'inc'}/>
                    <Button onClickHandler={resetCountOfIncrement} title={'reset'}/>
                </div>
            </div>
        </div>
    );
};