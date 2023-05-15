import { RecommendedDataType } from "@/types/todos";
import { FaSpinner, FaEllipsisH } from "react-icons/fa";

type BottomItemProps = {
  data: RecommendedDataType;
  scrollEnd: boolean;
};
const NONE = 0;

export const BottomItem: React.FC<BottomItemProps> = ({ data, scrollEnd }) => {
  const { qty: showedResults, total: totalResults } = data;
  const hasResult = showedResults !== NONE;
  const hasMore = showedResults < totalResults;

  return (
    <>
      {hasResult ? (
        hasMore ? (
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
