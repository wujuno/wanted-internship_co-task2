import { RecommendedDataType } from "@/types/todos";
import { RecommendedList } from "./RecommendedList";
import { BottomItem } from "./BottomItem";
import { useScrollEnd } from "@/hooks/useScrollEnd";

type SearchRecomendedBoxProps = {
  data: RecommendedDataType;
};

export const SearchRecomendedBox: React.FC<SearchRecomendedBoxProps> = ({
  data,
}) => {
  const { scrollRef, scrollEnd } = useScrollEnd();

  return (
    <div ref={scrollRef} className="recommend_container">
      <RecommendedList data={data} />
      <BottomItem data={data} scrollEnd={scrollEnd} />
    </div>
  );
};
