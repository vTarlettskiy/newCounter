import {useState} from "react";

type ScoreboardPropsType = {
    incrementCount: number
    className: string
}

export const Scoreboard = ({incrementCount, className}: ScoreboardPropsType) => {

    return (
        <div className={className}>
            {incrementCount}
        </div>
    );
};