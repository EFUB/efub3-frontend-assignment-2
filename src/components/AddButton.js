// TestButton 컴포넌트에 React.memo를 사용하여, count 변수가 변경되지 않았을 경우 다시 렌더링하지 않도록 최적화
import React, {useState} from 'react';

function TestButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      Test Button ({count})
    </button>
  );
}

export default TestButton;
