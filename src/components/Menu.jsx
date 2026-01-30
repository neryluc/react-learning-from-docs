import { Link } from "@tanstack/react-router";
import "./Menu.css";

export default function Menu() {
	return (
		<nav>
			<ul className="menu">
				<li>
					<Link to={"/how-to-initialize-a-react-project"}>
						How to initialize a React project{" "}
					</Link>
				</li>
				<li>
					<Link to={"/how-to-add-routing"}>How to add routing</Link>
				</li>
				<li>
					<Link to={"/props"}>Props</Link>
				</li>
				<li>
					<Link to={"/rendering-lists"}>Rendering Lists</Link>
				</li>
				<li>
					<Link to={"/state"}>State</Link>
				</li>
				<li>
					<Link to={"/state-arrays"}>State - Arrays</Link>
				</li>
				<li>
					<Link to={"/example-sections"}>Example - Sections</Link>
				</li>
			</ul>
		</nav>
	);
}
