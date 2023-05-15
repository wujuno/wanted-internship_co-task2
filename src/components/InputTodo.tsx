import { FaPlusCircle, FaSpinner } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { createTodo } from "@/api/todo";
import useFocus from "@/hooks/useFocus";
import { RecommendedDataType, todosType } from "@/types/todos";
import { getSearchRecommendTodos } from "@/api/search";
import { SearchRecomendedBox } from "./SearchRecomendedBox";

type InputTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<todosType[]>>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedData, setRecommendedData] = useState<RecommendedDataType>();
  const [isClose, setIsClose] = useState(true);
  const { ref, setFocus } = useFocus();

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e: any) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          return alert("Please write something");
        }

        const newItem = { title: trimmed };
        const { data } = await createTodo(newItem);

        if (data) {
          return setTodos((prev: todosType[]) => [...prev, data]);
        }
      } catch (error) {
        console.error(error);
        alert("Something went wrong.");
      } finally {
        setInputText("");
        setIsLoading(false);
      }
    },
    [inputText, setTodos]
  );

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;
    setInputText(word);
    const { data } = await getSearchRecommendTodos(word);
    setRecommendedData(data);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      {!isLoading ? (
        <button className="input-submit" type="submit">
          <FaPlusCircle className="btn-plus" />
        </button>
      ) : (
        <FaSpinner className="spinner" />
      )}
      {recommendedData && (
        <SearchRecomendedBox inputText={inputText} data={recommendedData} />
      )}
    </form>
  );
};

export default InputTodo;
