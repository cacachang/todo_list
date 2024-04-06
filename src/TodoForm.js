import { useState } from "react";

function TodoForm({ handleInput }) {
  const [inputValue, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleInput(inputValue);
    setValue("");
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="new-item-form">
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
  );
}

export { TodoForm };
