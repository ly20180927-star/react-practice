import React, { useState } from "react";

function Calcarator() {

    const [numb, setNumb] = useState(0);

    {/* 只要新状态依赖旧状态，就使用回调函数形式 */}

    // 更安全：总是基于最新值计算
    function increment() {
        setNumb(c => c + 1);
    }

    function increment2() {
        setNumb(numb + 1);
    }
    //  可能有 bug：在批量更新或异步场景下会使用过时的值
    function decrement() {
        setNumb(numb - 1);
    }

    function reset() {
        setNumb(0);
    }

    return (
        <>
            
            <h3>现在数字式{numb}</h3>
            <button onClick={increment }> + 1</button>
            <button onClick={decrement }> - 1</button>
            <button onClick={reset }> 重置</button>
        </>
    );
}

export default Calcarator;