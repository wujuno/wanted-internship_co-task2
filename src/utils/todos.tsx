import { getSearchRecommendTodos } from "@/api/search";
import { RecommendedDataType } from "@/types/todos";

export const getHilgthedText = (words: string, inputText: string) => {
  if (!inputText) {
    return words;
  }
  const regex = new RegExp(`(${inputText})`, "gi");

  return words.split(regex).map((match, index) =>
    match.toLowerCase() === inputText.toLowerCase() ? (
      <span key={index} className="highlight-text">
        {match}
      </span>
    ) : (
      match
    )
  );
};

export const shouldLoadMoreData = (
  showedResults: string[],
  totalResults: number,
  scrollEnd: boolean,
  isLoading: boolean
): boolean => {
  const hasReachedEnd = scrollEnd;
  const isNotLoading = !isLoading;
  const hasMoreData = showedResults.length !== totalResults;

  return hasReachedEnd && isNotLoading && hasMoreData;
};
