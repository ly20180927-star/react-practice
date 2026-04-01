import { FamilyProvider, useFamily } from "./FmailContext";
import Parent from "./Parent";

// Grand 是顶层，用 FamilyProvider 包裹子树，注入数据
function GrandContent() {
    const { grandPa, updateAll } = useFamily();

    return (
        <div style={{ border: '2px solid #333', padding: 16 }}>
            <p>👴 Grand: {grandPa}</p>
            {/* 更新所有人，三个组件都会响应 */}
            <button onClick={() => updateAll("tom")}>全部改名为 tom</button>
            <button onClick={() => updateAll("jack")} style={{ marginLeft: 8 }}>重置</button>
            <Parent />
        </div>
    );
}

function Grand() {
    return (
        // Provider 包裹整棵子树，子孙组件都能直接消费 context
        <FamilyProvider>
            <GrandContent />
        </FamilyProvider>
    );
}

export default Grand;

