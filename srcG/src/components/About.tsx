import Title from "./Title"
import img from "../assets/img2.png"
import { CodeXml, LetterText, Laptop } from "lucide-react";

const aboutSections = [
	{
		id: 1,
		title: "Études",
		description: "Je suis étudiant à l'école 42 Tana, une institution innovante axée sur l'apprentissage autonome et la collaboration, où je développe des compétences solides en programmation.",
		icon: <LetterText className="text-accent scale-150" />,
	},
	{
		id: 2,
		title: "Développeur C/C++",
		description: "Je maîtrise les fondamentaux et les concepts avancés du C/C++, notamment la gestion de la mémoire et l'optimisation des performances. Mon parcours à l'école 42 Tana m'a permis de développer des compétences solides en programmation bas-niveau et en résolution de problèmes complexes.",
		icon: <CodeXml className="text-accent scale-150" />,
	},
	{
		id: 3,
		title: "Passionné par l'UI/UX",
		description: "Passionné par l'UI/UX, j'aime créer des interfaces à la fois attrayantes et fonctionnelles.",
		icon: <Laptop className="text-accent scale-150" />,
	},
];

const About = () => {
	return (
		<div className="bg-base-300 p-20 mb-10 md:mb-32" id="About">
			<Title title="À propos" />
			<div className="flex justify-center items-center">
				<div className="hidden md:block">
					<img src={img} alt="" className="w-96 object-cover
					rounded-xl border-2 border-accent shadow-xl"
					/>
				</div>

				<div className="md:ml-4 space-y-4">
					{aboutSections.map((section) => (
						<div key={section.id}
							className="flex flex-col md:flex-row items-center
							bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
						>
							<div className="mb-2 md:mb-0">
								{section.icon}
							</div>
							<div className="md:ml-4 text-center md:text-left">
								<h2 className="text-xl font-bold mb-1">
									{section.title}
								</h2>
								<p className="text-sm">
									{section.description}
								</p>
							</div>
						</div>
					))
					}
				</div>
			</div>
		</div>
	)
}

export default About