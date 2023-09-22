import { useEffect } from "react";
import memosStore from "./stores/memosStore";
import Memos from "./components/Memos";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  // Store
  const store = memosStore();

  // useEffect
  useEffect(() => {
    store.fetchMemos();
  }, []);

  return (
    <div className="container">
      <Header />
      <Form />
      <Memos />
    </div>
  );
}

export default App;
