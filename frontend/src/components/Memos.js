import memosStore from "../stores/memosStore";
import Memo from "./Memo";

function Memos() {
  const store = memosStore();
  return (
    <div className="memos">
      
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