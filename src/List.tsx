import { useState, useRef } from "react";

function List() {
  const [list, setList] = useState<String[]>(["Francis", "João", "Maria"]);
  const inputRef = useRef<HTMLInputElement>(null);

  function addToList() {
    if (inputRef.current && inputRef.current?.value) {
      setList((oldList) => [...oldList, inputRef.current?.value!]);
    }
  };

  return (
    <>
      <input ref={inputRef} placeholder="new item" type="text" />
      <button onClick={addToList}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );

}

export default List;