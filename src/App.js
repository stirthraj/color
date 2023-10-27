import { useRef, useState } from "react";
import "./styles.css";
import color from "./color";

export default function App() {
  const inputref = useRef();
  const [search, setSearch] = useState("");

  function relatedColor(search) {
    return Object.keys(color).map((ele) => {
      console.log(search, color[ele]);
      return (
        <div key={ele}>
          {color[ele].toLowerCase().includes(search.toLowerCase())
            ? ele + ":" + color[ele]
            : null}
        </div>
      );
    });
  }

  return (
    <div className="App">
      {search}
      <input ref={inputref} type="search" />
      <button
        onClick={(e) => {
          e.preventDefault();
          setSearch(inputref.current.value);
        }}
      >
        Search
      </button>
      <hr />
      <div className="grid">{relatedColor(search)}</div>
    </div>
  );
}
