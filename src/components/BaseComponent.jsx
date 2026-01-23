import "./BaseComponent.css";

export default function BaseComponent({ title, children }) {
	return (
		<div className="baseComponent">
			<h3>{title}</h3>
			<div className="children">{children}</div>
		</div>
	);
}
