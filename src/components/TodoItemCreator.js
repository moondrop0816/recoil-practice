import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../store";

let id = 0;
const getId = () => {
  return id++;
};

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
