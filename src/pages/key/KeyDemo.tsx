import React from "react";
import { useState } from "react";

function KeyDemo() {
    const [list, setList] = useState([
        { id: 1, name: '苹果' },
        { id: 2, name: '香蕉' },
        { id: 3, name: '橙子' }
    ])

    function delKey(id:number) {
        setList(list.filter(item => item.id !== id))
    }

    return (
        <div>
             {
                list.map(item => (
                    <div key={item.id}>
                        {item.name}
                        <button onClick={() => delKey(item.id)}>删除</button>
                    </div>
                ))
             }
        </div>
    )
}

export default KeyDemo;