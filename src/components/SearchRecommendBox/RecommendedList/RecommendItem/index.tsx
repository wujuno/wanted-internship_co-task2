import { getHilgthedText } from "@/utils/todos";

type RecommendItemProps = {
  text: string;
  keyword: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

export const RecommendItem: React.FC<RecommendItemProps> = ({
  text,
  keyword,
  setInputText,
}) => {
  const handleClick = () => {
    //TODO: context API 로 전역상태 구현
    setInputText(text);
  };
  return (
    <button onClick={handleClick}>
      <p>{getHilgthedText(text, keyword)}</p>
    </button>
  );
};
