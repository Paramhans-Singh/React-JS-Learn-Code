import { useEffect } from "react";
import { useState, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useState hook is used to create state in functional component in this we have
  // 2 values one is the current value and the other is the function to change the value
  // const [currentValue, functionToChangeValue] = useState(initialValue)

  //useRef hook
  const passWordRef = useRef(null);
  // useRef is used to create reference to the element in functional component it is used in input
  // to get the value of the input element

  const copyPassword = useCallback(() => {
    passWordRef.current?.select();
    // passWordRef.current?.setSelectionRange(0, 9999);
    window.navigator.clipboard.writeText(passWordRef.current.value);
  }, [password]);

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (specialAllowed) {
      str += "!@#$%^&*()_+";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, specialAllowed, setPassword]);

  // useCallBack is used to prevent the function to be created again and again so it store the values in cache
  // isme apko function and then dependencies pass krne hote hain
  // useCallBack( function, [dependencies])

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, specialAllowed, passwordGenrator]);

  // useCallBack is for optimization to store in cache
  // useEffect is for jaise hi change ho toh run karo phir se

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="w-full outline-none py-1 px-3"
            placeholder="Password"
            value={password}
            // js ki value ko likhna tha isliye {}
            readOnly
            ref={passWordRef}
          />

          <button
            onClick={copyPassword}
            className="bg-orange-500 text-white px-4 py-1"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              className="cursor-pointer outline-none py-1 px-3"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length : {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="number"
              checked={numberAllowed}
              className="mx-2"
              onChange={(e) => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="special"
              checked={specialAllowed}
              className="mx-2"
              onChange={(e) => setSpecialAllowed((prev) => !prev)}
            />
            <label>Special</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
