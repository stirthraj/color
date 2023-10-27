import { useRef, useState } from "react";
import "./styles.css";
import color from "./color";

export default function App() {
  const inputref = useRef();
  const [search, setSearch] = useState("red");

  function relatedColor(search) {
    return Object.keys(color).map((ele) => {
      return color[ele].toLowerCase().includes(search) ? (
        <div style={{ background: ele }} key={ele}>
          {ele + ":" + color[ele]}
        </div>
      ) : null;
    });
  }

  return (
    <div className="App">
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
