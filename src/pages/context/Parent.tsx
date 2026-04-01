import { useFamily } from "./FmailContext";
import Child from "./Child";

function Parent() {
    const { parent } = useFamily();

    return (
        <div style={{ border: '2px solid #666', padding: 12, marginTop: 8 }}>
            <p>👨 Parent: {parent}</p>
            {/* Parent 嵌套 Child，Child 不需要 props，直接从 context 取数据 */}
            <Child />
        </div>
    );
}

export default Parent;

