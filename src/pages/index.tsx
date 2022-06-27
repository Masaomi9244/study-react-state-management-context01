import type { NextPage } from "next";

const TODOS = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

const Home: NextPage = () => {
  return (
    <div>
      <h3>TODO一覧</h3>
      {TODOS.map((todo) => (
        <div key={todo.id}>
          <label>
            <input type="checkbox" defaultChecked={todo.isDone} />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
