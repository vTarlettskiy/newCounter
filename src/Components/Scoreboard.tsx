import * as React from 'react';

type ScoreboardPropsType = {
    currentIncrementValue: number
}

export const Scoreboard = ({currentIncrementValue}: ScoreboardPropsType) => {
    return (
        <div>
            {currentIncrementValue}
        </div>
    )
}