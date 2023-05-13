import React, { useState } from "react";
import { useEffect } from "react";

const TextView = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`업데이트 : ${text}`);
  });
  return <div>{text}</div>;
});

const CountView = React.memo(({ count }) => {
  console.log(`업데이트 : ${count}`);
  return <div>{count}</div>;
});

const Test = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  return (
    <div>
      <div>
        <h2>Count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>Text</h2>
        <TextView text={text} />
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Test;
