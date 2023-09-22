import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // State
  const [memos, setMemos] = useState(null);
  const [createForm, setCreateForm] = useState({ text: "" });
  const [updateForm, setUpdateForm] = useState({ _id: null, text: "" });

  // useEffect
  useEffect(() => {
    fetchMemos();
  }, []);

  // Functions
  const fetchMemos = async () => {
    // Fetch the memos
    const res = await axios.get("http://localhost:5000/api/memos");
    // Set to state
    // console.log(res.data.memos[0].text)
    // console.log(res.data.memos)
    // console.log(res)
    setMemos(res.data.memos);
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
    setCreateForm({
      ...createForm,
      [name]: value,
    });
    // console.log({ name, value });
  };

  const createMemo = async (e) => {
    e.preventDefault();

    // Create the memo
    const res = await axios.post("http://localhost:5000/api/memos", createForm);

    // Update state
    setMemos([...memos, res.data.memo]);

    // Clear form state
    setCreateForm({ text: "" });
  };

  const deleteMemo = async (_id) => {
    // Delete memo
    const res = await axios.delete(`http://localhost:5000/api/memos/${_id}`);

    // Update state
    const newMemos = [...memos].filter((memo) => {
      return memo._id !== _id;
    });

    setMemos(newMemos);
  };

  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const toggleUpdate = (memo) => {
    // Set state on update form
    setUpdateForm({ _id: memo._id, text: memo.text });
  };

  const updateMemo = async (e) => {
    e.preventDefault();

    // Send the update request
    const res = await axios.put(
      `http://localhost:5000/api/memos/${updateForm._id}`,
      { text: updateForm.text }
    );

    // Update state
    const newMemos = [...memos];
    const memoIndex = memos.findIndex((memo) => {
      return memo._id === updateForm._id;
    });
    newMemos[memoIndex] = res.data.memo;

    setMemos(newMemos);

    // Clear update form state
    setUpdateForm({ _id: null, text: "" });
  };

  return (
    <div className="App">
      {/* Show all memos */}
      <div>
        <h1>Memos:</h1>
        {memos &&
          memos.map((memo) => {
            return (
              <div key={memo._id}>
                <h3>{memo.text}</h3>
                <button onClick={() => deleteMemo(memo._id)}>Delete</button>
                <button onClick={() => toggleUpdate(memo)}>Update</button>
              </div>
            );
          })}
      </div>

      {/* Update memo */}
      {updateForm._id && (
        <div>
          <h2>Update memo</h2>
          <form onSubmit={updateMemo}>
            <input
              name="text"
              type="text"
              value={updateForm.text}
              onChange={handleUpdateFieldChange}
            />
            <button type="submit">Update</button>
          </form>
        </div>
      )}

      {/* Form */}
      {!updateForm._id && (
        <div>
          <h2>Create memo</h2>
          <form onSubmit={createMemo}>
            <input
              type="text"
              name="text"
              value={createForm.text}
              onChange={updateCreateFormField}
            />
            <button type="submit">Create</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
