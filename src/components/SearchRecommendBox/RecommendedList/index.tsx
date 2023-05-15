import { RecommendItem } from "./RecommendItem";

type RecommendedListProps = {
  showedResults: string[];
  keyword: string;
};

export const RecommendedList: React.FC<RecommendedListProps> = ({
  showedResults,
  keyword,
}) => {
  return (
    <>
      {showedResults.map((result, index) => (
        <RecommendItem key={index} text={result} keyword={keyword} />
      ))}
    </>
  );
};
