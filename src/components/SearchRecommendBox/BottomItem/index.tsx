import { FaSpinner, FaEllipsisH } from "react-icons/fa";

type BottomItemProps = {
  showedResults: string[];
  totalResults: number;
  isLoading: boolean;
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
};

export const BottomItem: React.FC<BottomItemProps> = ({
  showedResults,
  totalResults,
  isLoading,
  scrollRef,
}) => {
  const hasResult = showedResults.length !== 0;
  const hasMore = showedResults.length < totalResults;

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
        <p>일치하는 검색어가 없습니다.</p>
      )}
    </>
  );
};
