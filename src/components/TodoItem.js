import React from "react";
const TodoItem = ({ title }) => {
  return (
    <>
      <div className="border-2 py-1 bg-gray-700 text-white w-1/4 my-2 p-2 mx-auto">
        {title}
      </div>
    </>
  );
};

export default TodoItem;
