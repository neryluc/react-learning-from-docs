import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/rendering-lists")({
	component: RouteComponent,
});

const data = [
	"Creola Katherine Johnson: mathematician",
	"Mario José Molina-Pasquel Henríquez: chemist",
	"Mohammad Abdus Salam: physicist",
	"Percy Lavon Julian: chemist",
	"Subrahmanyan Chandrasekhar: astrophysicist",
];

const people = [
	{
		id: 0,
		name: "Creola Katherine Johnson",
		profession: "mathematician",
	},
	{
		id: 1,
		name: "Mario José Molina-Pasquel Henríquez",
		profession: "chemist",
	},
	{
		id: 2,
		name: "Mohammad Abdus Salam",
		profession: "physicist",
	},
	{
		id: 3,
		name: "Percy Lavon Julian",
		profession: "chemist",
	},
	{
		id: 4,
		name: "Subrahmanyan Chandrasekhar",
		profession: "astrophysicist",
	},
];

function RouteComponent() {
	return (
		<div>
			<h1>Rendering Lists</h1>
			<p>
				A very common feature in UI implementation is rendering lists os
				components, or lists of data. In react, we make use of Javascript
				functions map(), filter() and reduce() quite often when implementing
				lists. Let&apos; take a look at some examples.
			</p>
			<List></List>
			<h2>Using filter</h2>
			<p>
				We can use the javascript function filter() to filter data from a
				collection:
			</p>
			<FilteredList></FilteredList>
		</div>
	);
}

function List() {
	return (
		<ul>
			{data.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}

function FilteredList() {
	let filteredData = people
		.filter((item) => item.profession === "chemist")
		.map((item, index) => (
			<li key={index}>{`${item.name} (${item.profession})`}</li>
		));

	return <ul>{filteredData}</ul>;
}
