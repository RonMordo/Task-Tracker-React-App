function Task({ task, endTask, startTask, removeTask }) {
  return (
    <div className="task">
      <p>Task: {task.title}</p>
      <p>ID: {task.id.split("-").pop()}</p>
      <p>Due: {task.deadLine}</p>
      <p>Desription: {task.description}</p>
      <div className="task-buttons">
        {startTask && <button onClick={() => startTask(task)}>Start</button>}
        {endTask && <button onClick={() => endTask(task)}>Complete</button>}
        <button onClick={() => removeTask(task)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
