import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>Counter: {count}</p>
            <button ></button>
        </>
    );
}

export default Counter;