import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddText } from "../redux/slices/textsSlice";

function TextInput() {
  const [inputValue, setInputValue] = useState("");
  const texts = useSelector((state) => state.texts);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(onAddText(inputValue));
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Enter text"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TextInput;
