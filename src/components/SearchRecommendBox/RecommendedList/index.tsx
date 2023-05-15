import { RecommendedDataType } from "@/types/todos";
import { getHilgthedText } from "@/utils/todos";

type RecommendedListProps = {
  data: RecommendedDataType;
};

export const RecommendedList: React.FC<RecommendedListProps> = ({ data }) => {
  const recommendedResults = data.result;
  const keyword = data.q;
  return (
    <>
      {recommendedResults.map((list, index) => (
        <button onClick={(e) => e.preventDefault()} key={index}>
          <p>{getHilgthedText(list, keyword)}</p>
        </button>
      ))}
    </>
  );
};
