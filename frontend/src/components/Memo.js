import memosStore from "../stores/memosStore";

function Memo({memo}) {
  const store = memosStore(store => {
    return {
        deleteMemo: store.deleteMemo,
        toggleUpdate: store.toggleUpdate
    }
  })

  return (
    <div key={memo._id}>
              <h3>{memo.text}</h3>
              <button onClick={() => store.deleteMemo(memo._id)}>Delete</button>
              <button onClick={() => store.toggleUpdate(memo)}>Update</button>
            </div>
  )
}

export default Memo