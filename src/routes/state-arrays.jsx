import { createFileRoute } from "@tanstack/react-router";
import ToDoList from "../components/ToDoList";

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
		</div>
	);
}
