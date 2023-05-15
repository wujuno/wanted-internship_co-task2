import { RecommendedDataType } from "@/types/todos";

type SearchRecomendedBoxProps = {
  data: RecommendedDataType;
  inputText: string;
};

export const SearchRecomendedBox: React.FC<SearchRecomendedBoxProps> = ({
  data,
  inputText,
}) => {
  const highlightText = (text: string) => {
    if (!inputText) {
      return text;
    }
    const regex = new RegExp(`(${inputText})`, "gi");

    return text.split(regex).map((match, index) =>
      match.toLowerCase() === inputText.toLowerCase() ? (
        <span key={index} className="highlight-text">
          {match}
        </span>
      ) : (
        match
      )
    );
  };
  return (
    <div className="recommend_container">
      {data.result.map((list) => (
        <button onClick={(e) => e.preventDefault()}>
          <p>{highlightText(list)}</p>
        </button>
      ))}
    </div>
  );
};
