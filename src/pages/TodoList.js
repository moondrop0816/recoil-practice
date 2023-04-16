import { useRecoilValue } from "recoil";
import { filteredTodoListState, todoListState } from "../store";
import TodoItemCreator from "../components/TodoItemCreator";
import TodoItem from "../components/TodoItem";
import TodoListFilters from "../components/TodoListFilters";
import TodoListStats from "../components/TodoListStats";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          item={todoItem}
        />
      ))}
    </>
  );
};

export default TodoList;
