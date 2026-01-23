import { createFileRoute } from "@tanstack/react-router";
import ToDoList from "../components/todo-list/ToDoList";
import { TaskListWithStateBug, TaskListFullyWorking } from "../components/TaskList";

export const Route = createFileRoute("/state-arrays")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<h1>State and Arrays</h1>
			<p>
				Arrays are mutable in Javascript, like object. And also like objects, we
				should treat them as immutable when using state in React. So instead of
				keeping an array in state and changing it like{" "}
				<code>{'array[0] = "new value"'}</code>, we should use other techniques
				to make changes and update our arrays kept in UI state.
			</p>
			<p>
				The logic is the same from objects changes: everytime we need to update
				an array in state, we need to create a new copy of this array. The table
				bellow illustrate the array built-int methods we can use to manipulate
				our data in order to create new copies and avoid changing the current
				reference.
			</p>

			<table>
				<thead>
					<tr>
						<th colSpan={3}>How to change arrays in React</th>
					</tr>
					<tr>
						<th scope="col">Function</th>
						<th scope="col">Avoid</th>
						<th scope="col">Use</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Add</td>
						<td>
							<code>push, unshift</code>
						</td>
						<td>
							<code>concat, [...arr] (spread syntax)</code>
						</td>
					</tr>
					<tr>
						<td>Remove</td>
						<td>
							<code>pop, shift, splice</code>
						</td>
						<td>
							<code>filter, slice</code>
						</td>
					</tr>
					<tr>
						<td>Replace</td>
						<td>
							<code>splice, array[in]... assigment</code>
						</td>
						<td>
							<code>map</code>
						</td>
					</tr>
					<tr>
						<td>Sort</td>
						<td>
							<code>reverse, sort</code>
						</td>
						<td>copy the array first</td>
					</tr>
				</tbody>
			</table>

			<p>
				Bellow is an example of ToDoList component that uses arrays internally.
			</p>
			<ToDoList />
			<h2>Mutating objects in array</h2>
			<p>
				We need to be careful when we want to mutate objects inside an array. We
				know arrays kept in state should be imutable so whenever we want to
				update the state we need to create a new copy of such array.
			</p>
			<pre>
				{`
				const newArray = [...arrayInState];
				newArray.reverse();
				setArrayInState(newArray);
				`}
			</pre>
			<p>
				In the example above, <code>arrayInState</code> is imutable. So in order
				to update the state, we first create a copy named <code>newArray</code>,
				and then we use the mutable method <code>reverse()</code> (this methods
				reverse the order of the array). There&apos;s no problem mutating a
				local variable like <code>newArray</code>! This is a temporary copy that
				will be used to update the state in the last line{" "}
				<code>setArrayInState(newArray);</code>
			</p>
			<p>
				The tricky part is: copying arrays in javascript is a shallow operation.
				It means that objects from the original array will have the same
				references in the new array. For example:
			</p>
			<pre>
				{`

					// Both 'cars' and 'vehicles' arrays point to the same objects from the 'initialData'

					const initialData = [ { id: 1, name: 'golf' }, { id: 2, name: 'byd' }]
					const [cars, setCars] = useState(initialData);
					const [vehicles, setVehicles] = useState(initialData);

					function updateCars(index, newName) {
						const newCars = [...cars]; // This is ok

						newCars[index].name = newName; // This is mutating 'cars' and not 'newCars'

						setCars(newCars); // We think only 'cars' arrays was updated, but 'vehicles' also changed
					}
					`}
			</pre>
			<p>The component bellow implement this error:</p>
			<TaskListWithStateBug></TaskListWithStateBug>
			<p>And here is the same component with its implementation fixed:</p>
			<TaskListFullyWorking></TaskListFullyWorking>
		</div>
	);
}
