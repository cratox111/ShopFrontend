import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/saludo")
      .then(res => res.json())
      .then(data => setMensaje(data.message));
  }, []);


  return (
    <>
      <h1>{mensaje}</h1>
    </>
  )
}

export default App
