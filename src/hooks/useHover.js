import { useCallback, useEffect, useState, useRef } from "react";

const useHover = () => {
  const [state, setState] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = useCallback(() => setState(true), []); // hover 상태 지정
  const handleMouseOut = useCallback(() => setState(false), []); // hover 상태 해지

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // event 등록
    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

    // event clean-up
    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref, handleMouseOver, handleMouseOut]);

  return [ref, state];
};

export default useHover;
