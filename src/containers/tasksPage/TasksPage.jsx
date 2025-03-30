import TaskList from "../../components/taskList/TaskList";

function TasksPage({
  tasks,
  removeTask,
  inProgress,
  completed,
  startTask,
  endTask,
}) {
  return (
    <div className="task-page">
      <div className="to-do">
        <h4>ToDo:</h4>
        <TaskList
          tasksList={tasks}
          removeTask={removeTask}
          startTask={startTask}
        />
      </div>
      <div className="in-progress">
        <h4>In Progress:</h4>
        <TaskList
          tasksList={inProgress}
          removeTask={removeTask}
          endTask={endTask}
        />
      </div>
      <div className="completed">
        <h4>Completed:</h4>
        <TaskList tasksList={completed} removeTask={removeTask} />
      </div>
    </div>
  );
}

export default TasksPage;
