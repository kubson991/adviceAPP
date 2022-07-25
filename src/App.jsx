import { useEffect, useState } from "react";
import "./App.css";

function App() {
  console.log("init");
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchAdvice() {
    setLoading(true);
      const responseF = await fetch("https://api.adviceslip.com/advice");
      setResponse(await responseF.json());
      setLoading(false);
  }

  useEffect(() => {
    fetchAdvice().catch(console.error)
  }, []);

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
