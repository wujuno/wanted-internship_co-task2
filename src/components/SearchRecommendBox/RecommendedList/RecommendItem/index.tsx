import { getHilgthedText } from "@/utils/todos";

type RecommendItemProps = {
  text: string;
  keyword: string;
};

export const RecommendItem: React.FC<RecommendItemProps> = ({
  text,
  keyword,
}) => {
  return (
    <button onClick={(e) => e.preventDefault()}>
      <p>{getHilgthedText(text, keyword)}</p>
    </button>
  );
};
