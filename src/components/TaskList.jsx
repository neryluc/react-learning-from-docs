import { useState } from "react";
import BaseComponent from "./BaseComponent";

export function TaskListWithStateBug() {
	const initialTaskList = [
		{
			id: 1,
			description: "Do the laundry",
		},
		{
			id: 2,
			description: "Clean the house",
		},
		{
			id: 3,
			description: "Prepare lunch for the week",
		},
	];
	const [todaysTasks, setTodaysTasks] = useState(initialTaskList);
	const [tomorrowsTasks, setTomorrowsTasks] = useState(initialTaskList);

	function updateTodaysTask(id, isDone) {
		const newTodaysTasks = [...todaysTasks];
		const taskDone = newTodaysTasks.find((task) => task.id === id);
		taskDone.isDone = isDone;
		setTodaysTasks(newTodaysTasks);
	}

	function updateTomorrowsTask(id, isDone) {
		const newTomorrowsTasks = [...tomorrowsTasks];
		const taskDone = newTomorrowsTasks.find((task) => task.id === id);
		taskDone.isDone = isDone;
		setTomorrowsTasks(newTomorrowsTasks);
	}

	return (
		<BaseComponent title="Task List with state bug">
			<div>
				<p>Your today&apos;s tasks are:</p>
				<ul>
					{todaysTasks.map((task) => (
						<li key={task.id}>
							<label htmlFor={`todays-fail-${task.id}`}>
								{task.description}
							</label>
							<input
								type="checkbox"
								name="done"
								id={`todays-fail-${task.id}`}
								checked={task.isDone}
								onChange={(e) => updateTodaysTask(task.id, e.target.checked)}
							/>
						</li>
					))}
				</ul>
				<p>Your tomorrow&apos;s tasks are:</p>
				<ul>
					{tomorrowsTasks.map((task) => (
						<li key={task.key}>
							<label htmlFor={`tomorrows-fail-${task.id}`}>
								{task.description}
							</label>
							<input
								type="checkbox"
								name="done"
								id={`tomorrows-fail-${task.id}`}
								checked={task.isDone}
								onChange={(e) => updateTomorrowsTask(task.id, e.target.checked)}
							/>
						</li>
					))}
				</ul>
			</div>
		</BaseComponent>
	);
}

export function TaskListFullyWorking() {
	const initialTaskList = [
		{
			id: 4,
			description: "Do the laundry",
		},
		{
			id: 5,
			description: "Clean the house",
		},
		{
			id: 6,
			description: "Prepare lunch for the week",
		},
	];
	const [todaysTasks, setTodaysTasks] = useState(initialTaskList);
	const [tomorrowsTasks, setTomorrowsTasks] = useState(initialTaskList);

	function updateTodaysTask(id, checked) {
		const newTodaysTasks = todaysTasks.map((task) =>
			task.id === id ? { ...task, isDone: checked } : task,
		);
		setTodaysTasks(newTodaysTasks);
	}

	function updateTomorrowsTask(id, checked) {
		const newTomorrowsTasks = tomorrowsTasks.map((task) =>
			task.id === id ? { ...task, isDone: checked } : task,
		);
		setTomorrowsTasks(newTomorrowsTasks);
	}

	return (
		<BaseComponent title="Task List with correct implementation">
			<div>
				<p>Your today&apos;s tasks are:</p>
				<ul>
					{todaysTasks.map((task) => (
						<li key={task.id}>
							<label htmlFor={`todays-success-${task.id}`}>
								{task.description}
							</label>
							<input
								type="checkbox"
								name="done"
								id={`todays-success-${task.id}`}
								checked={task.isDone}
								onChange={(e) => updateTodaysTask(task.id, e.target.checked)}
							/>
						</li>
					))}
				</ul>
				<p>Your tomorrow&apos;s tasks are:</p>
				<ul>
					{tomorrowsTasks.map((task) => (
						<li key={task.key}>
							<label htmlFor={`tomorrows-success-${task.id}`}>
								{task.description}
							</label>
							<input
								type="checkbox"
								name="done"
								id={`tomorrows-success-${task.id}`}
								checked={task.isDone}
								onChange={(e) => updateTomorrowsTask(task.id, e.target.checked)}
							/>
						</li>
					))}
				</ul>
			</div>
		</BaseComponent>
	);
}
