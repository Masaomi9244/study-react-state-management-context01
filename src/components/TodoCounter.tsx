import { FC } from "react";
import { useTodos } from "src/state/todo";

export const ToDoCounter: FC = () => {
  const todos = useTodos();
  return <h2>TODO: {todos.length}件</h2>;
};
