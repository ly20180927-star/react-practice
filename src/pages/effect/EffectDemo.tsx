import { useState, useEffect } from 'react';

function EffectDemo() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // 用法 1：空依赖数组，只在组件挂载时执行一次
    useEffect(() => {
        console.log('用法1: 组件挂载，只执行一次');
    }, []);

    // 用法 2：依赖 count，count 变化时重新执行
    useEffect(() => {
        console.log('用法2: count 变化了 =>', count);
    }, [count]);

    // 用法 3：带 cleanup，return 的函数会在组件卸载或依赖变化前执行
    useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
            console.log('用法3: 定时器 tick');
        }, 1000);

        // cleanup：组件卸载或 isRunning 变化前，清理定时器防止内存泄漏
        return () => {
            clearInterval(timer);
            console.log('用法3: cleanup，定时器已清理');
        };
    }, [isRunning]);

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>+1</button>

            <p>定时器：{isRunning ? '运行中' : '已停止'}</p>
            <button onClick={() => setIsRunning(v => !v)}>
                {isRunning ? '停止' : '启动'}
            </button>
        </div>
    );
}

export default EffectDemo;
