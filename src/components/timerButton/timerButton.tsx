import React from 'react'
import './timerButton.css'
interface Props {
    buttonAction : ()=> void;
    buttonValue : string
}

export const TimerButton :React.FC <Props> = ({buttonAction , buttonValue}) => {
    return (
        <div className="button-container" onClick={buttonAction} >
          <div role="button" style={{pointerEvents: "none"}}  className="button-value">{buttonValue}</div>
        </div>
    )
}
