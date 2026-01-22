import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import Menu from "../components/Menu";
import "./Main.css";

export const Route = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<>
			<Header></Header>
			<div className="main">
				<Menu></Menu>
				<div>
					<Outlet></Outlet>
				</div>
			</div>
		</>
	);
}
