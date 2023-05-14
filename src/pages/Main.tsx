import { useEffect, useState } from "react";

import InputTodo from "../components/InputTodo";
import { getTodoList } from "../api/todo";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

type todosType = {
  id: number;
  title: string;
};

const Main = () => {
  const [todoListData, setTodoListData] = useState<todosType[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
};

export default Main;
