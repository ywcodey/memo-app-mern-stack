import memosStore from "../stores/memosStore";

function Memo({ memo }) {
  const store = memosStore((store) => {
    return {
      deleteMemo: store.deleteMemo,
      toggleUpdate: store.toggleUpdate,
    };
  });

  return (
    <div className="memo" key={memo._id}>
      <div className="memo-text">
        <h3>{memo.text}</h3>
      </div>

      <div className="memo-btn">
        <button className="btn btn-update" onClick={() => store.toggleUpdate(memo)}>
          Update
        </button>
        <button className="btn btn-delete" onClick={() => store.deleteMemo(memo._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Memo;
