import { useState } from "react";

function TaskForm({ addTask }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [deadLine, setDeadLine] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title.trim()) {
			alert("Title cannot be empty!");
			return;
		}
		addTask(title, deadLine, description);
		setTitle("");
		setDescription("");
		setDeadLine("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Title:
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</label>
			<label>
				Due:
				<input
					type="date"
					value={deadLine}
					onChange={(e) => setDeadLine(e.target.value)}
				/>
			</label>
			<label>
				Description:
				<textarea
					rows={6}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
			</label>
			<button type="submit">Add Task</button>
		</form>
	);
}

export default TaskForm;
