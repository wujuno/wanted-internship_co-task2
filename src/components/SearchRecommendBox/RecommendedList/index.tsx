import { RecommendedDataType } from "@/types/todos";
import { getHilgthedText } from "@/utils/todos";

type RecommendedListProps = {
  data: RecommendedDataType;
  debouncedInputText: string;
};

export const RecommendedList: React.FC<RecommendedListProps> = ({
  data,
  debouncedInputText,
}) => {
  return (
    <>
      {data.result.map((list, index) => (
        <button onClick={(e) => e.preventDefault()} key={index}>
          <p>{getHilgthedText(list, debouncedInputText)}</p>
        </button>
      ))}
    </>
  );
};
