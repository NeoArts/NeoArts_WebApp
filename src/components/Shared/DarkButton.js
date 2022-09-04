import React from 'react'

function DarkButton({setAnswer, text}) {
    return (
        <div className={"survey-button"} onClick={setAnswer}>
            {text}
        </div>
    )
}

export default DarkButton