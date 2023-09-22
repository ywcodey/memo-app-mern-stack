import { useEffect } from "react";

import memosStore from "./stores/memosStore";

function App() {
  // Store
  const store = memosStore();

  

  // useEffect
  useEffect(() => {
    store.fetchMemos();
  }, []);

  

  return (
    <div className="App">
      {/* Show all memos */}
      <div>
        <h1>Memos:</h1>
        {store.memos &&
          store.memos.map((memo) => {
            return (
              <div key={memo._id}>
                <h3>{memo.text}</h3>
                <button onClick={() => store.deleteMemo(memo._id)}>
                  Delete
                </button>
                <button onClick={() => store.toggleUpdate(memo)}>Update</button>
              </div>
            );
          })}
      </div>

      {/* Update memo */}
      {store.updateForm._id && (
        <div>
          <h2>Update memo</h2>
          <form onSubmit={store.updateMemo}>
            <input
              name="text"
              type="text"
              value={store.updateForm.text}
              onChange={store.handleUpdateFieldChange}
            />
            <button type="submit">Update</button>
          </form>
        </div>
      )}

      {/* Form */}
      {!store.updateForm._id && (
        <div>
          <h2>Create memo</h2>
          <form onSubmit={store.createMemo}>
            <input
              type="text"
              name="text"
              value={store.createForm.text}
              onChange={store.updateCreateFormField}
            />
            <button type="submit">Create</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
