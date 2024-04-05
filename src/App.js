import { useState } from "react";
import { v4 } from "uuid";
import "./App.css";

function App() {
  const [inputValue, setValue] = useState("");
  const [lists, setLists] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    setLists((currentValue) => [
      ...currentValue,
      { id: v4(), title: inputValue, isCompleted: false }
    ]);
    setValue("");
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

  return (
    <>
      <form onSubmit={(e) => handleInput(e)} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New ITEM</label>
          <input
            type="text"
            id="item"
            onChange={(e) => setValue(e.target.value)}
            value={inputValue}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header"> TODO LIST</h1>
      <ul className="list">
        {lists &&
          lists.length !== 0 &&
          lists.map((list) => {
            return (
              <li key={list.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={list.isCompleted}
                    onChange={(e) => handleCheck(list.id, e.target)}
                  />
                  {list.title}
                </label>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(list.id)}
                >
                  DELETE
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default App;
