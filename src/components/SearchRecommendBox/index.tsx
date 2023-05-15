import { RecommendedDataType } from "@/types/todos";
import { RecommendedList } from "./RecommendedList";
import { BottomItem } from "./BottomItem";
import { useScrollEnd } from "@/hooks/useScrollEnd";
import { useEffect, useState } from "react";
import { getSearchRecommendTodos } from "@/api/search";

type SearchRecomendedBoxProps = {
  recommendedData: RecommendedDataType;
  setRecommendedData: React.Dispatch<
    React.SetStateAction<RecommendedDataType | undefined>
  >;
};

export const SearchRecomendedBox: React.FC<SearchRecomendedBoxProps> = ({
  recommendedData,
  setRecommendedData,
}) => {
  const { scrollRef, scrollEnd } = useScrollEnd();
  const [isLoading, setIsLoading] = useState(false);
  const {
    result: showedResults,
    total: totalResults,
    q: keyword,
    page: currentPage,
  } = recommendedData;

  useEffect(() => {
    const shouldLoadMoreData = () => {
      const hasReachedEnd = scrollEnd;
      const isNotLoading = !isLoading;
      const hasMoreData = showedResults.length !== totalResults;

      return hasReachedEnd && isNotLoading && hasMoreData;
    };
    const loadMoreData = async () => {
      if (shouldLoadMoreData()) {
        try {
          setIsLoading(true);

          const response = await getSearchRecommendTodos(
            keyword,
            currentPage + 1
          );
          const newData = {
            ...response.data,
            result: [...showedResults, ...response.data.result],
          };
          setRecommendedData(newData);
        } catch (error) {
          console.error("Error loading more data:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadMoreData();
  }, [scrollEnd, setIsLoading, setRecommendedData]);

  return (
    <div ref={scrollRef} className="recommend_container">
      <RecommendedList showedResults={showedResults} keyword={keyword} />
      <BottomItem
        showedResults={showedResults}
        totalResults={totalResults}
        isLoading={isLoading}
        scrollRef={scrollRef}
      />
    </div>
  );
};
