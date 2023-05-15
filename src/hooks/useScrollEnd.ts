import { useCallback, useEffect, useRef, useState } from "react";

const SCROLL_END_ADJUSTMENT = 1;

export const useScrollEnd = () => {
  const [scrollEnd, setScrollEnd] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      const isEnd =
        scrollElement.clientHeight + scrollElement.scrollTop >=
        scrollElement.scrollHeight - SCROLL_END_ADJUSTMENT;
      setScrollEnd(isEnd);
    }
  }, []);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return { scrollRef, scrollEnd };
};
