import React from 'react';
import { useState } from 'react';  

function EventDemo() {

    const [inputVal, setInputVal] = useState('');

    function handleChange(e:any) {
        setInputVal(e.target.value);
    }

    return (
        <div>
            <input type="text" value={inputVal} onChange={handleChange} />
            <p>当前输入值：{inputVal}</p>
        </div>
    )
}

export default EventDemo;