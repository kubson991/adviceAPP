import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [response, setResponse] = useState();
  const [loading,setLoading] = useState(true)

  async function fetchAdvice() {
    console.log('fetch')
    setLoading(true)
    try {
      const responseF = await fetch("https://api.adviceslip.com/advice");
      setResponse(await responseF.json());
      setLoading(false)
      console.log(responseF)
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() =>fetchAdvice, []);

  return (
    <div className="App">
      <main>
        {!loading && <h1>ADVICE #{response.slip.id}</h1>}
        {!loading ? (
          <p>“{response.slip.advice}”</p>
        ) : (
          <div className="loader"></div>
        )}

        <button onClick={fetchAdvice} disabled={loading}></button>
      </main>
    </div>
  );
}

export default App;
