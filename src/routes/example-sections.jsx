import { createFileRoute } from "@tanstack/react-router";
import BaseComponent from "../components/BaseComponent";
import SectionsMenu from "../components/section-menus";

export const Route = createFileRoute("/example-sections")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<h1>Example - Sections Menu</h1>
			<p>The component bellow illustrate a sections menu:</p>
			<BaseComponent title={"Sections Menu"}>
				<SectionsMenu></SectionsMenu>
			</BaseComponent>
		</>
	);
}
