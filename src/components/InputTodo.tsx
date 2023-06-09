import { FaPlusCircle, FaSpinner } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { createTodo } from "@/api/todo";
import useFocus from "@/hooks/useFocus";
import { RecommendedDataType, todosType } from "@/types/todos";
import { getSearchRecommendTodos } from "@/api/search";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchRecomendedBox } from "./SearchRecommendBox";

type InputTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<todosType[]>>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedData, setRecommendedData] = useState<RecommendedDataType>();
  const [isOpen, setIsOpen] = useState(false);
  const { ref, setFocus } = useFocus();
  const debouncedInputText = useDebounce(inputText);

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      try {
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
        setIsOpen(false);
      }
    },
    [inputText, setTodos]
  );

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true);
    const word = e.target.value;
    setInputText(word);
    const { data } = await getSearchRecommendTodos(word);
    setRecommendedData(data);
  };

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
      onBlur={() => setIsOpen(false)}
    >
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
      {isOpen && recommendedData && (
        <SearchRecomendedBox
          recommendedData={recommendedData}
          setRecommendedData={setRecommendedData}
          setInputText={setInputText}
        />
      )}
    </form>
  );
};

export default InputTodo;
