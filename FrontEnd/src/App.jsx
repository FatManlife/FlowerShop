import api from "./api/api";
import { useEffect, useState } from "react";

function App() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    api.get("/subscription")
      .then(res => setSubscriptions(res.data))
      .catch(err => console.error(err));
  }, []);

  if (subscriptions.length === 0) return <p>Loading...</p>;

  return (
    <div>
      {subscriptions.map(sub => (
        <div key={sub.id}>
          <h2>{sub.name}</h2>
          <p>{sub.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
