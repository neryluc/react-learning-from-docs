import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/how-to-initialize-a-react-project")({
	component: HowToInitializeAReactProject,
});

function HowToInitializeAReactProject() {
	return (
		<>
			<h2>How to initialize a React project</h2>
			<p>To initialize a React project from scratch, follow these steps:</p>
			<ul>
				<li>Create an index.html file</li>
				<li>
					In your index.html file, create a div with. You'll need to reference
					this div from your React code later on so you might want to give it a
					identifier like a class name or id.
				</li>
				<li>
					I like to put my react code inside src/, so create this folder too.
				</li>
				<li>
					Install react from <code>npm install react react-dom</code>
				</li>
				<li>
					Now you can write your React code. Create a file name src/App.jsx and
					add the following to it:{" "}
					<pre>
						{`
            import { createRoot } from "react-dom/client";
            
            const rootDiv = document.getElementById("root"); 
            
            createRoot(rootDiv).render(<h1>Hello World!</h1>);`}
					</pre>
				</li>
				<li>
					You should have enough code. But now you need another tool capable of
					compiling the react code to javascript code, so your browser can
					understand and execute it. We will use Vite.
				</li>
				<li>
					Install vite <code>npm install -D vite</code> and its react plugin{" "}
					<code>npm install -D @vitejs/plugin-react</code>
				</li>
				<li>
					Create a file named vite.config.js and add the following to it:
					<pre>
						{`
            import { defineConfig } from "vite";
            import react from "@vitejs/plugin-react";

            export default defineConfig({
                plugins: [react()],
            });
        `}
					</pre>
				</li>
				<li>
					Almost there. Now it's time to run it. Try <code>npx vite</code> to
					start your server and access your page.
				</li>
				<li>
					If everything is working, let's create some scripts for Vite inside
					our package.json file. Add this to the file:
					<pre>
						{`
            "scripts": {
                "dev": "vite",
                "build": "vite build",
                "preview": "vite preview"
            }`}
					</pre>
				</li>
				<li>
					Now you can simple run <code>npm run dev</code> to run your app
					locally.
				</li>
			</ul>
		</>
	);
}
