import { create } from "zustand";
import axios from "axios";

const memosStore = create((set) => ({
  memos: null,
  createForm: {
    text: "",
  },
  updateForm: {
    _id: null,
    text: "",
  },

  // Fetch memos
  fetchMemos: async () => {
    // Fetch the memos
    const res = await axios.get("http://localhost:5000/api/memos");
    // Set to state
    set({
      memos: res.data.memos,
    });
  },

  //   Update create form field
  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  // Create memo
  createMemo: async (e) => {
    e.preventDefault();

    const { createForm, memos } = memosStore.getState();

    const res = await axios.post("http://localhost:5000/api/memos", createForm);

    set({
      // Update state
      memos: [...memos, res.data.memo],
      // Clear form state
      createForm: { text: "" },
    });
  },

  //   Delete memo
  deleteMemo: async (_id) => {
    // Delete memo
    const res = await axios.delete(`http://localhost:5000/api/memos/${_id}`);

    const { memos } = memosStore.getState();

    // Update state
    const newMemos = memos.filter((memo) => {
      return memo._id !== _id;
    });

    set({
      memos: newMemos,
    });
  },
  //   Handle update field change
  handleUpdateFieldChange: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  //   Toggle update
  toggleUpdate: ({ _id, text }) => {
    set({
      updateForm: {
        _id,
        text,
      },
    });
  },

//   Update memo
  updateMemo: async (e) => {
    e.preventDefault();

    const {updateForm: {
        _id, text
    }, memos} = memosStore.getState()

    // Send the update request
    const res = await axios.put(
      `http://localhost:5000/api/memos/${_id}`,
      { text }
    );

    // Update state
    const newMemos = [...memos];
    const memoIndex = memos.findIndex((memo) => {
      return memo._id === _id;
    });
    newMemos[memoIndex] = res.data.memo;

    set({
        memos: newMemos,
        updateForm: { _id: null, text: "" }
    })

   
  },
}));

export default memosStore;
