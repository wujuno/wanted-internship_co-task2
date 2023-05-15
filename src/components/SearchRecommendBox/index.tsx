import { RecommendedDataType } from "@/types/todos";
import { RecommendedList } from "./RecommendedList";
import { BottomItem } from "./BottomItem";
import { useCallback, useEffect, useRef, useState } from "react";

type SearchRecomendedBoxProps = {
  data: RecommendedDataType;
};

export const SearchRecomendedBox: React.FC<SearchRecomendedBoxProps> = ({
  data,
}) => {
  const [scrollEnd, setScrollEnd] = useState(false);
  const recommendBoxRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    const recommendBoxElement = recommendBoxRef.current;
    const SCROLL_END_ADJUSTMENT = 1;
    if (recommendBoxElement) {
      const isEnd =
        recommendBoxElement.clientHeight + recommendBoxElement.scrollTop >=
        recommendBoxElement.scrollHeight - SCROLL_END_ADJUSTMENT;
      setScrollEnd(isEnd);
    }
  }, [setScrollEnd]);

  useEffect(() => {
    const recommendBoxElement = recommendBoxRef.current;
    if (recommendBoxElement) {
      recommendBoxElement.addEventListener("scroll", handleScroll);

      return () => {
        recommendBoxElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <div ref={recommendBoxRef} className="recommend_container">
      <RecommendedList data={data} />
      <BottomItem data={data} scrollEnd={scrollEnd} />
    </div>
  );
};
