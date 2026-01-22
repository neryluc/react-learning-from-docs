import { createFileRoute } from "@tanstack/react-router";
import "./Props.css";

export const Route = createFileRoute("/props")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<h2>Props</h2>
			<p>
				Props are how we pass data to our components - they are similar to
				function parameters and arguments. Since React components are declared
				as Javascript functions, let&apos;s explore how they work:
			</p>
			<p>
				Below is a component named Avatar that renders an image. For now this
				component does not take any arguments:
			</p>
			<pre>{`
        function Avatar() {
          return (
            <img
              className="avatar"
              src="https://i.imgur.com/1bX5QH6.jpg"
              alt="Lin Lanying"
              width={100}
              height={100}
            />
          );
        }
      `}</pre>
			<Avatar></Avatar>

			<p>
				Now we have another component called Profile that includes the component
				AvatarWithProps, which looks exactly like the first Avatar component
				except this new one includes props:
			</p>
			<Profile />

			<p>Now we have a card with a children props</p>
			<Card
				cardTitle={"A Profile"}
				cardDescription={"A profile card description"}
			>
				<Profile />
			</Card>
		</div>
	);
}

function Profile() {
	return (
		<AvatarWithProps
			person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
			size={200}
		/>
	);
}

function Avatar() {
	return (
		<img
			className="avatar"
			src="https://i.imgur.com/1bX5QH6.jpg"
			alt="Lin Lanying"
			width={100}
			height={100}
		/>
	);
}

function AvatarWithProps({ person, size }) {
	return (
		<img
			className="avatar"
			src="https://i.imgur.com/1bX5QH6.jpg"
			alt={person.name}
			width={size}
			height={size}
		/>
	);
}

function Card({ cardTitle, cardDescription, children }) {
	return (
		<div className="card">
			<p><strong>{cardTitle}</strong></p>
			<p>{cardDescription}</p>
			{children}
		</div>
	);
}
