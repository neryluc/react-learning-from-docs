import useToDoList from "./useToDoList";
import "./ToDoList.css";

export default function ToDoList() {
	const {
		nextTaskDescription,
        setNextTaskDescription,
        tasks,
        taskOnEdit,
        setTaskOnEdit,
        addTask,
        removeTask,
        updateTask
	} = useToDoList();

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
					value={nextTaskDescription}
					id="task"
					onChange={(e) => setNextTaskDescription(e.target.value)}
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
