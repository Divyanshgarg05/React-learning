import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAdDone } from "../features/todo/todoSlice";
export default function Todo() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const markDone = (id) => {
    dispatch(markAdDone(id));
  };
  return (
    <>
      <AddForm />
      <h3>Todo List App </h3>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.isDone ? "line-through" : "none",
              color: todo.isDone ? "gray" : "black",
            }}
          >
            {todo.task}
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
            <button onClick={() => markDone(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
