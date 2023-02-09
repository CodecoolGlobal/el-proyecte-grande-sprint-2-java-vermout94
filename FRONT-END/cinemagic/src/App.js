import React, { useState, useEffect } from "react";

function App() {
  const [stringData, setStringData] = useState("");
  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/cinemagic/test");
      const data = await response.text();
      setStringData(data);
    }
    fetchData();
  },[]);

  return (
    <div>
      <p>{stringData}</p>
    </div>
  );
}

export default App;