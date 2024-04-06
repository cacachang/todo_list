import { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { v4 } from "uuid";
import "./App.css";

function App() {
  const [lists, setLists] = useState(() => {
    let storage = localStorage.getItem("ITEMS");

    if (storage == null) {
      return [];
    }

    return JSON.parse(storage);
  });

  const handleInput = (inputValue) => {
    setLists((currentValue) => [
      ...currentValue,
      { id: v4(), title: inputValue, isCompleted: false }
    ]);
  };

  const handleDelete = (id) => {
    setLists((currentValue) => currentValue.filter((li) => li.id !== id));
  };

  const handleCheck = (id, target) => {
    setLists((currentValue) =>
      currentValue.map((li) => {
        if (id == li.id) {
          return { ...li, isCompleted: target.checked };
        } else {
          return { ...li };
        }
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(lists));
  }, [lists]);

  return (
    <>
      <TodoForm handleInput={handleInput} />
      <TodoList
        lists={lists}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
