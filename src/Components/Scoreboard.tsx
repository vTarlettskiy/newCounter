import {useState} from "react";

type ScoreboardPropsType = {
    incrementCount: number
    disabledValue: boolean
}

export const Scoreboard = ({incrementCount, disabledValue}: ScoreboardPropsType) => {

    return (
        <div className={disabledValue ? 'tableDisabled' : 'table'}>
            {incrementCount}
        </div>
    );
};