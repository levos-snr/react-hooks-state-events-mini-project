import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS as SAVED_TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(SAVED_TASKS);
  const [filteredTasks, setFilteredTasks] = useState(SAVED_TASKS);

  const handleSubmitNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setFilteredTasks([...tasks, newTask]); // Ensure new tasks are also filtered
  };

  const handleFilter = (category) => {
    if (category === 'All') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter(task => task.category === category));
    }
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={handleFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmitNewTask} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
