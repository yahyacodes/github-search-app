import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/octocat", {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
}

export default App;
