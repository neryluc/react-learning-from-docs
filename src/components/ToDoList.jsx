import { useState } from "react";
import "./ToDoList.css";

export default function ToDoList() {
	const [currentTask, setCurrentTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const [taskOnEdit, setTaskOnEdit] = useState(undefined);

	function addTask() {
		if (!currentTask) return;
		const newTask = {
			id: crypto.randomUUID(),
			description: currentTask,
		};
		setTasks([...tasks, newTask]);
		setCurrentTask("");
	}

	function removeTask(task) {
		const newTasks = tasks.filter((target) => target.id !== task.id);
		setTasks(newTasks);
	}

	function updateTask() {
		const newTasks = tasks.map((target) => {
			if (target.id === taskOnEdit.id) {
				return { ...target, description: taskOnEdit.description };
			}
			return target;
		});
		setTasks(newTasks);
		setTaskOnEdit(undefined);
	}

	const enableEditting = (task) => setTaskOnEdit(task);
	const disableEditting = () => setTaskOnEdit(undefined);
	const isEditting = (task) => (taskOnEdit ? taskOnEdit.id === task.id : false);

	const showEditting = () => {
		return (
			<form
				onSubmit={(e) => {
					e.preventDefault();
					updateTask();
				}}
			>
				<input
					type="text"
					name="taskOnUpdate"
					value={taskOnEdit.description}
					id="taskOnUpdate"
					onChange={(e) => {
						setTaskOnEdit({ ...taskOnEdit, description: e.target.value });
					}}
				/>
				<button type="submit">Save</button>
				<button type="button" onClick={() => disableEditting()}>
					Cancel
				</button>
			</form>
		);
	};

	const showTask = (task) => {
		return (
			<>
				{task.description}
				<button onClick={() => removeTask(task)}>Remove</button>
				<button onClick={() => enableEditting(task)}>Edit</button>
			</>
		);
	};

	return (
		<div className="todo-list">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addTask();
				}}
			>
				<label htmlFor="task">Add new task: </label>
				<input
					type="text"
					value={currentTask}
					id="task"
					onChange={(e) => setCurrentTask(e.target.value)}
				/>
				<button>Add</button>
			</form>

			<div>
				<p>Tasks:</p>
				{tasks && (
					<ul>
						{tasks.map((task) => (
							<li key={task.id}>
								{isEditting(task) ? showEditting(task) : showTask(task)}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
