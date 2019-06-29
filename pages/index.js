import React, { useState } from 'react';

const InputElement = () => {
    const [inputText, setInputText] = useState("")
    const [historyList, setHistoryList] = useState([]);

    return <>
        <input
            placeholder="enter text"
            onChange={(e) => {
                setInputText(e.target.value)
                setHistoryList([...historyList, e.target.value]);
            }}
        />
        <br />
        {inputText}
        <ul>
            {historyList.map((data) => {
                return <li>{data}</li>
            })}
        </ul>

    </>
}

export default InputElement