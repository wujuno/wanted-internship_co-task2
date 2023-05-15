import { RecommendedDataType } from "@/types/todos";
import { RecommendItem } from "./RecommendItem";

type RecommendedListProps = {
  data: RecommendedDataType;
};

export const RecommendedList: React.FC<RecommendedListProps> = ({ data }) => {
  const { result: recommendedResults, q: keyword } = data;

  return (
    <>
      {recommendedResults.map((result, index) => (
        <RecommendItem key={index} text={result} keyword={keyword} />
      ))}
    </>
  );
};
