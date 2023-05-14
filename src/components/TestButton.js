// useCallback()를 사용하여 성능 올리기

import React, {useState, useMemo, useCallback} from 'react';

function TestButton() {
  const [count, setCount] = useState(0);



function TestButton({count, onClick}) {
  return useMemo(() => {
    return (
      <button onClick={onClick}>
        Test Button ({count})
      </button>
    );
  }, [count, onClick]);
}

const useTestButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count => count + 1);
  }, []);
  return count;
};
};

export default TestButton;