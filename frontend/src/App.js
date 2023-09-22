import { useEffect } from "react";
import memosStore from "./stores/memosStore";
import Memos from "./components/Memos";
import UpdateForm from "./components/UpdateForm";
import CreateForm from "./components/CreateForm";

function App() {
  // Store
  const store = memosStore();

  // useEffect
  useEffect(() => {
    store.fetchMemos();
  }, []);

  return (
    <div className="App">
      <Memos />

      <UpdateForm />

     <CreateForm />
    </div>
  );
}

export default App;
