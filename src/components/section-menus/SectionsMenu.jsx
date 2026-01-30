import "./SectionsMenu.css";
import { useState } from "react";
import sections from "./data";

export default function SectionsMenu() {
	const [activeSectionId, setActiveSectionId] = useState(null);

	function handleActiveSectionIdUpdate(sectionId) {
		setActiveSectionId(sectionId);
	}

	if (activeSectionId === null) {
		setActiveSectionId(sections[0].id);
	}

	return (
		<div className="sections-menu">
			<ul>
				{sections.map((s) => (
					<li key={s.id}>
						<a
							href="#"
							className={activeSectionId === s.id ? "active" : null}
							onClick={() => handleActiveSectionIdUpdate(s.id)}
						>
							{s.title}
						</a>
					</li>
				))}
			</ul>
			<div className="sections-content">
				{sections.map(
					(s) => activeSectionId === s.id && <div key={s.id}>{s.content}</div>,
				)}
			</div>
		</div>
	);
}
