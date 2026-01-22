import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/how-to-add-routing")({
	component: HowToAddRouting,
});

function HowToAddRouting() {
	return (
		<>
			<h2>How to add routing</h2>
			<p>
				React does not support routing by default, so we need to use an external
				library to implement that. We're going to use Tanstack Router as it
				seems to be an standard these days. Follow the instructions bellow:{" "}
			</p>
			<ul>
				<li>
					<code>npm install @tanstack/react-router</code>
				</li>
				<li>
					<code>npm install @tanstack/react-router-devtools</code>
				</li>
				<li>
					<code>npm install -D @tanstack/router-plugin</code>
				</li>
				<li>
					Now you need to configure the Vite plugin to enable routing from
					Tanstack Router.
					<pre>{`
            import { tanstackRouter } from "@tanstack/router-plugin/vite";

            export default defineConfig({
                plugins: [
                    tanstackRouter({
                    target: "react",
                    autoCodeSplitting: true,
                    }),
                    react(),
                ],
            });
            `}</pre>
				</li>
			</ul>
			<p>
				Routing with Tanstack Router is based on file names. Their documentation
				is pretty nich with pratical examples so you can continue from{" "}
				<a
					href="https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts"
					target="blank"
				>
					there
				</a>
				.
			</p>
		</>
	);
}
