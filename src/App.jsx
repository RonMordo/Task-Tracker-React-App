import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./components/root/Root";
import TasksPage from "./containers/tasksPage/TasksPage";
import TaskForm from "./containers/taskForm/TaskForm";

function App() {
	const [tasks, setTasks] = useState([]);
	const [inProgress, setInProgress] = useState([]);
	const [completed, setCompleted] = useState([]);

	const addTask = (title, deadLine, description) => {
		setTasks((prevTasks) => [
			...prevTasks,
			{ id: prevTasks.length + 1, title, deadLine, description },
		]);
	};

	const removeTask = (taskToRemove) => {
		setTasks((prevTasks) =>
			prevTasks.filter((task) => task.id !== taskToRemove.id)
		);
		setInProgress((prevTasks) =>
			prevTasks.filter((task) => task.id !== taskToRemove.id)
		);
		setCompleted((prevTasks) =>
			prevTasks.filter((task) => task.id !== taskToRemove.id)
		);
	};

	const startTask = (task) => {
		setTasks((prevTasks) =>
			prevTasks.filter((current) => current.id !== task.id)
		);
		setInProgress((prev) => [...prev, task]);
	};

	const endTask = (task) => {
		setCompleted((prev) => [...prev, task]);
		setInProgress((prev) => prev.filter((current) => current.id !== task.id));
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Root />}>
					<Route
						index
						element={
							<TasksPage
								tasks={tasks}
								inProgress={inProgress}
								completed={completed}
								removeTask={removeTask}
								startTask={startTask}
								endTask={endTask}
							/>
						}
					/>
					<Route path="taskForm" element={<TaskForm addTask={addTask} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
