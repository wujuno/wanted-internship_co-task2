import { RecommendedDataType } from "@/types/todos";
import { RecommendedList } from "./RecommendedList";

type SearchRecomendedBoxProps = {
  data: RecommendedDataType;
  debouncedInputText: string;
};

export const SearchRecomendedBox: React.FC<SearchRecomendedBoxProps> = ({
  data,
  debouncedInputText,
}) => {
  return (
    <div className="recommend_container">
      <RecommendedList data={data} debouncedInputText={debouncedInputText} />
      <div>...</div>
    </div>
  );
};
