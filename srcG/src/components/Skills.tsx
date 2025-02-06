import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
// import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgSHELL from "../assets/techno/bash.svg"
import imgC from "../assets/techno/C_language.png"
import imgCPP from "../assets/techno/c_plus_plus.png"
// import imgMYSQL from "../assets/techno/mysql.svg"
import imgGIT from "../assets/techno/git.png"
import imgGITHUB from "../assets/techno/github.svg"
import imgGIMP from "../assets/techno/gimp.png"
import imgBLENDER from "../assets/techno/blender.png"
import imgGODOT from "../assets/techno/godot.png"
import imgUNITY from "../assets/techno/unity.svg"

const skills = [
	{ id: 1, name: "Shell unix", image: imgSHELL },
	{ id: 2, name: "Langage C", image: imgC },
	{ id: 3, name: "Langage C++", image: imgCPP },
	{ id: 4, name: "HTML", image: imgHTML },
	{ id: 5, name: "CSS", image: imgCSS },
	{ id: 6, name: "JavaScript", image: imgJS },
	{ id: 7, name: "React", image: imgREACT },
	{ id: 8, name: "Node.js", image: imgNODE },
	{ id: 9, name: "TypeScript", image: imgTYPE },
	// { id: 10, name: "Next.js", image: imgNEXT },
	{ id: 11, name: "Tailwind CSS", image: imgTAILWIND },
	// { id: 12, name: "MySql", image: imgMYSQL },
	{ id: 13, name: "Git", image: imgGIT },
	{ id: 14, name: "GitHub", image: imgGITHUB },
	{ id: 15, name: "Gimp", image: imgGIMP },
	{ id: 16, name: "Blender", image: imgBLENDER },
	{ id: 17, name: "Godot", image: imgGODOT },
	{ id: 18, name: "Unity", image: imgUNITY },
];

const Skills = () => {
	return (
		<div id="Skills">
			<Title title="Competence" />
			<div className="flex justify-center items-center">
				<div className="flex flex-wrap gap-4 justify-center items-center
				mt-4 md:mt-0"
				>
					{skills.map((skill) => (
						<div key={skill.id} className="flex justify-center
						items-center flex-col"
						>
							<div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
								<img src={skill.image} alt={skill.name}
									className="object-cover rounded-full h-full w-full"
								/>
							</div>
							<span className="mt-2 text-sm">{skill.name}</span>
						</div>
					))
					}
				</div>
			</div>
		</div>
	)
}

export default Skills