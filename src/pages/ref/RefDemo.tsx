import { useRef, useState, useEffect } from 'react';

function RefDemo() {

    // ────────────────────────────────────────
    // 场景 1：操作 DOM 元素（聚焦输入框）
    // ────────────────────────────────────────
    const inputRef = useRef<HTMLInputElement>(null);

    function focusInput() {
        // ref.current 指向真实 DOM 节点
        inputRef.current?.focus();
    }

    // ────────────────────────────────────────
    // 场景 2：保存定时器 ID（不触发重新渲染）
    // useRef 存储的值变化时不会引起组件重渲染
    // ────────────────────────────────────────
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    function startTimer() {
        if (running) return;
        setRunning(true);
        timerRef.current = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
    }

    function stopTimer() {
        if (timerRef.current) {
            clearInterval(timerRef.current); // 用 ref 拿到 timer ID 清除
            timerRef.current = null;
        }
        setRunning(false);
    }

    // 组件卸载时清理定时器
    useEffect(() => () => stopTimer(), []);

    // ────────────────────────────────────────
    // 场景 3：记录上一次的值（prev value）
    // 每次渲染后同步最新值，下次渲染读到的就是「上一次」的值
    // ────────────────────────────────────────
    const [count, setCount] = useState(0);
    const prevCountRef = useRef<number>(0);

    useEffect(() => {
        prevCountRef.current = count; // 渲染完成后更新 ref
    });

    const prevCount = prevCountRef.current; // 本次渲染读到的是上一次的值

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* 场景 1 */}
            <section>
                <h3>场景 1：操作 DOM（聚焦）</h3>
                <input ref={inputRef} placeholder="点击按钮聚焦我" />
                <button onClick={focusInput}>聚焦输入框</button>
            </section>

            {/* 场景 2 */}
            <section>
                <h3>场景 2：保存 Timer ID</h3>
                <p>计时：{seconds} 秒</p>
                <button onClick={startTimer} disabled={running}>开始</button>
                <button onClick={stopTimer} disabled={!running}>停止</button>
            </section>

            {/* 场景 3 */}
            <section>
                <h3>场景 3：记录上一次的值</h3>
                <p>当前：{count}　上一次：{prevCount}</p>
                <button onClick={() => setCount(c => c + 1)}>+1</button>
            </section>

        </div>
    );
}

export default RefDemo;
