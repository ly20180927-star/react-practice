/**
 * 自定义 Hook: useCounter
 * 计数器示例
 */

import { useState, useCallback } from 'react';

interface UseCounterOptions {
  initialValue?: number;
  min?: number;
  max?: number;
}

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
}

export function useCounter(options: UseCounterOptions = {}): UseCounterReturn {
  const { initialValue = 0, min = -Infinity, max = Infinity } = options;
  
  const [count, setCount] = useState<number>(initialValue);
  
  const increment = useCallback(() => {
    setCount(prev => Math.min(prev + 1, max));
  }, [max]);
  
  const decrement = useCallback(() => {
    setCount(prev => Math.max(prev - 1, min));
  }, [min]);
  
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);
  
  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  };
}
