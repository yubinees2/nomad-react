import { useCallback, useEffect, useState } from "react";
function Counter() {

  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  
  const onClickCounter = useCallback(() => setCounter((prev) => prev+1), []);
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }
  useEffect(() => {
    if (keyword) {
      console.log("call api "+ keyword);
    }
  }, [keyword])


  return (
    <div>
      <input value={keyword} 
        type='text' 
        placeholder='Search here...' 
        onChange={onChangeSearch} 
      />
      <h1>{counter}</h1>
      <button onClick={onClickCounter}>Click</button>

    </div>
  );
}

export default Counter;