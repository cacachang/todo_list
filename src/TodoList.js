function TodoList({ lists, handleCheck, handleDelete }) {
  return (
    <>
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

export { TodoList };
