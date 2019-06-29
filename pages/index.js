import React, { useState } from 'react';

const InputElement = () => {
    const [inputText, setInputText] = useState("")

    return <>
        <input
            placeholder="enter text"
            onChange={(e) => { setInputText(e.target.value) }}
        />
        <br />
        {inputText}
    </>
}

export default InputElement