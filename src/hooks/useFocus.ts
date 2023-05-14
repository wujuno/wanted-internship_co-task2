import { useRef } from "react";

type UseFocusType = {
  ref: React.MutableRefObject<HTMLInputElement | null>;
  setFocus: () => void;
};

const useFocus = (): UseFocusType => {
  const ref = useRef<HTMLInputElement | null>(null);
  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  return { ref, setFocus };
};

export default useFocus;
