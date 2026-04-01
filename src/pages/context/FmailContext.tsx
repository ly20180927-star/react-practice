import { createContext, useContext, useState, type ReactNode } from "react";

// 1. 定义类型
interface FamilyContextType {
    grandPa: string;
    parent: string;
    child: string;
    // 三个名字都可以更新，体现 context 响应式能力
    updateAll: (name: string) => void;
}

// 2. 创建 Context，默认值为 null（没有 Provider 时立即报错，便于排查）
const FamilyContext = createContext<FamilyContextType | null>(null);

// 3. 封装 Provider 组件，用 useState 管理所有数据
export function FamilyProvider({ children }: { children: ReactNode }) {
    const [grandPa, setGrandPa] = useState("jack");
    const [parent, setParent] = useState("alice");
    const [child, setChild] = useState("bob");

    // 更新所有人的名字，让三个消费者都能看到变化
    function updateAll(name: string) {
        setGrandPa(name);
        setParent(name);
        setChild(name);
    }

    const value: FamilyContextType = {
        grandPa,
        parent,
        child,
        updateAll,
    };

    return <FamilyContext.Provider value={value}>{children}</FamilyContext.Provider>;
}

// 4. 封装 Hook，加保护：在 Provider 外使用时立即报错
export function useFamily() {
    const ctx = useContext(FamilyContext);
    if (!ctx) throw new Error("useFamily 必须在 FamilyProvider 内部使用");
    return ctx;
}
