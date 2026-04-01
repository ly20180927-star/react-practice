import { useFamily } from "./FmailContext";

function Child() {
    const { child } = useFamily();

    return (
        <div style={{ border: '2px solid #999', padding: 8, marginTop: 8 }}>
            <p>👦 Child: {child}</p>
        </div>
    );
}

export default Child;
