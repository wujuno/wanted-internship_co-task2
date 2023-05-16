import { RecommendedDataType } from "@/types/todos";
import { RecommendedList } from "./RecommendedList";
import { BottomItem } from "./BottomItem";
import { useScrollEnd } from "@/hooks/useScrollEnd";
import { useEffect, useState } from "react";
import { getSearchRecommendTodos } from "@/api/search";
import { shouldLoadMoreData } from "@/utils/todos";

type SearchRecomendedBoxProps = {
  recommendedData: RecommendedDataType;
  setRecommendedData: React.Dispatch<
    React.SetStateAction<RecommendedDataType | undefined>
  >;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchRecomendedBox: React.FC<SearchRecomendedBoxProps> = ({
  recommendedData,
  setRecommendedData,
  setInputText,
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
    const getMore = shouldLoadMoreData(
      showedResults,
      totalResults,
      scrollEnd,
      isLoading
    );
    const loadMoreData = async () => {
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
    };
    if (getMore) {
      loadMoreData();
    }
  }, [scrollEnd, setIsLoading, setRecommendedData]);

  return (
    <div ref={scrollRef} className="recommend_container">
      <RecommendedList
        showedResults={showedResults}
        keyword={keyword}
        setInputText={setInputText}
      />
      <BottomItem
        showedResults={showedResults}
        totalResults={totalResults}
        isLoading={isLoading}
        scrollRef={scrollRef}
      />
    </div>
  );
};
