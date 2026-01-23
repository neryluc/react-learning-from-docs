import { useState } from "react";

export default function useToDoList() {
	const [nextTaskDescription, setNextTaskDescription] = useState("");
	const [tasks, setTasks] = useState([]);
	const [taskOnEdit, setTaskOnEdit] = useState(undefined);

    function addTask() {
		if (!nextTaskDescription) return;
		const newTask = {
			id: crypto.randomUUID(),
			description: nextTaskDescription,
		};
		setTasks([...tasks, newTask]);
		setNextTaskDescription("");
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

    return {
        nextTaskDescription,
        setNextTaskDescription,
        tasks,
        taskOnEdit,
        setTaskOnEdit,
        addTask,
        removeTask,
        updateTask
    };
}
