import Task from "../task/Task";

function TaskList({ tasksList = [], endTask, startTask, removeTask }) {
	return (
		<div className="task-list">
			{tasksList.length === 0 ? (
				<p>No tasks available.</p>
			) : (
				tasksList.map((task, index) => (
					<Task
						key={task.id}
						task={task}
						endTask={endTask}
						startTask={startTask}
						removeTask={removeTask}
					/>
				))
			)}
		</div>
	);
}

export default TaskList;
