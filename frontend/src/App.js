import { useState, useEffect } from "react";
import axios from 'axios'

function App() {
  const [memos, setMemos] = useState(null)

  useEffect(() => {
    fetchMemos()
  }, [])

  const fetchMemos = async () => {
    // Fetch the memos
    const res = await axios.get('http://localhost:5000/api/memos')
    // Set to state
    console.log(res.data.memos[0].text)
    // setMemos(res.data.memos)
    console.log(res)
  }


  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
