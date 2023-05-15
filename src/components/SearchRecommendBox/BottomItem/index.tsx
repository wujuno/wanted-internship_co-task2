import { useRef } from "react";
import { FaSpinner, FaEllipsisH } from "react-icons/fa";

type BottomItemProps = {
  showedResults: string[];
  totalResults: number;
  isLoading: boolean;
};

export const BottomItem: React.FC<BottomItemProps> = ({
  showedResults,
  totalResults,
  isLoading,
}) => {
  const hasResult = showedResults.length !== 0;
  const hasMore = showedResults.length < totalResults;

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  return (
    <>
      {hasResult ? (
        hasMore ? (
          isLoading ? (
            <FaSpinner className="spinner" />
          ) : (
            <FaEllipsisH className="ellipsis" />
          )
        ) : (
          <button onClick={handleButtonClick}>
            추천 검색어가 더 이상 없습니다.
          </button>
        )
      ) : (
        <button>일치하는 검색어가 없습니다.</button>
      )}
    </>
  );
};
