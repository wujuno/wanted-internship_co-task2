import { RecommendItem } from "./RecommendItem";

type RecommendedListProps = {
  showedResults: string[];
  keyword: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

export const RecommendedList: React.FC<RecommendedListProps> = ({
  showedResults,
  keyword,
  setInputText,
}) => {
  return (
    <>
      {showedResults.map((result, index) => (
        <RecommendItem
          key={index}
          text={result}
          keyword={keyword}
          setInputText={setInputText}
        />
      ))}
    </>
  );
};
