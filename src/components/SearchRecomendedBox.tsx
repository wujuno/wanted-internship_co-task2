import { RecommendedDataType } from "@/types/todos";
import { getHilgthedText } from "@/utils/todos";

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
      {data.result.map((list) => (
        <button onClick={(e) => e.preventDefault()}>
          <p>{getHilgthedText(list, debouncedInputText)}</p>
        </button>
      ))}
      <div>...</div>
    </div>
  );
};
