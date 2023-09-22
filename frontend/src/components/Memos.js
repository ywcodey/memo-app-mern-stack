import memosStore from "../stores/memosStore";
import Memo from "./Memo";

function Memos() {
  const store = memosStore();
  return (
    <div>
      <h1>Memos:</h1>
      {store.memos &&
        store.memos.map((memo) => {
          return (
            <Memo key={memo._id} memo={memo}/>
          );
        })}
    </div>
  );
}

export default Memos;
