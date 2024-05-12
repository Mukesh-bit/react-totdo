import React from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";

const TodoRow = ({ tasks, deleteTasks }) => {
  return (
    <>
      {tasks.map((task, i) => (
        <div key={i}>
          <div className="group/task flex justify-between my-4 hover:visible cursor-pointer">
            <div className="flex items-center gap-2">
              <CheckBox />
              <h1>{task}</h1>
            </div>

            <div>
              <Button index={i} deleteTasks={deleteTasks}/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoRow;
