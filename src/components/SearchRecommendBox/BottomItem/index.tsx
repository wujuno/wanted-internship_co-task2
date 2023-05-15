import { RecommendedDataType } from "@/types/todos";
import { useEffect, useState } from "react";
import { FaSpinner, FaEllipsisH } from "react-icons/fa";

type BottomItemProps = {
  data: RecommendedDataType;
  scrollEnd: boolean;
};

export const BottomItem: React.FC<BottomItemProps> = ({ data, scrollEnd }) => {
  const showedResults = data.qty;
  const totalResults = data.total;

  const hasResult = (showedResults: number): boolean => {
    const NONE = 0;
    return showedResults !== NONE;
  };

  const hasMore = (showedResults: number, totalResults: number): boolean => {
    return totalResults > showedResults;
  };

  return (
    <>
      {hasResult(showedResults) ? (
        hasMore(showedResults, totalResults) ? (
          scrollEnd ? (
            <FaSpinner className="spinner" />
          ) : (
            <FaEllipsisH className="ellipsis" />
          )
        ) : null
      ) : (
        <p>일치하는 검색어가 없습니다.</p>
      )}
    </>
  );
};
