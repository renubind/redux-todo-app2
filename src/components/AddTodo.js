import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/TodoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    const todoObj = {
      id: nanoid(),
      value: input,
      isCompleted: false,
      isDeleted: false,
    };
    dispatch(addTodo(todoObj));
    setInput("");
  };

  return (
    <>
      <div className="add-container flex flex-row gap-3 mx-auto justify-center my-10">
        <input
          className=" border-2 p-1 rounded-lg "
          placeholder="Add Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className=" bottom-2 bg-green-800 text-white p-2 rounded-lg "
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default AddTodo;
