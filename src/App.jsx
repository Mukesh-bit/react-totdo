import React, { useState } from "react";
import TodoRow from "./components/TodoRow";

const App = () => {

  const [task, setTask] = useState([])
  const [inputValue, setInputValue] = useState("")


  const handleAddTask = () => {
    if(inputValue !== "") {
      setTask([...task, inputValue])
      setInputValue("")
    }
  }

  const deleteTasks = (index) => {
    const updatedList = [...task];
    updatedList.splice(index,1)
    setTask(updatedList)
  }


  return (
    <div className="w-full h-screen bg-[#FFFBF4] flex items-center justify-center">
      <div className="w-[20rem] h-[25rem] bg-white rounded-lg flex flex-col justify-between">
        <div className="w-full p-4">
          <h1 className="font-semibold text-xl">Todo</h1>
          <div className="w-full h-[18rem] overflow-y-scroll">
            <TodoRow tasks={task} deleteTasks={deleteTasks}/>
          </div>
        </div>

        <div className="flex justify-between border-t w-full p-2">
          <input
            className="bg-[#F0F1F1] w-[14rem] outline-none border-none p-2 rounded-lg"
            type="text"
            placeholder="Add task here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="bg-[#4EB570] text-white px-6 rounded-lg" onClick={handleAddTask}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
