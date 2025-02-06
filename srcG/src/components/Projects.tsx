import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import img7 from '../assets/projects/7.png';
import img8 from '../assets/projects/8.png';
import img9 from '../assets/projects/9.png';
import img10 from '../assets/projects/10.png';
import img11 from '../assets/projects/11.png';
import img12 from '../assets/projects/12.png';
import { Github } from "lucide-react";
import { Link } from "lucide-react";


const projects = [
	{
		id: 1,
		title: 'libft',
		description: "libft est une bibliothèque en C que j'ai développée, regroupant des fonctions réutilisables pour la gestion des chaînes, des structures de données et de la mémoire.",
		technologies: ['Langage C'],
		repoLink: 'https://github.com/Herimamy12/libft',
		image: img1,
	},
	{
		id: 2,
		title: 'ft_printf',
		description: "ft_printf est une réimplémentation de la fonction printf en C, permettant de gérer l'affichage de différents types de données avec des formats personnalisés.",
		technologies: ['Langage C'],
		repoLink: 'https://github.com/Herimamy12/ft_printf',
		image: img2,
	},
	{
		id: 3,
		title: 'get_next_line',
		description: "get_next_line est une fonction en C qui permet de lire une ligne d'un fichier ou de l'entrée standard, en gérant correctement les retours à la ligne.",
		technologies: ['Langage C'],
		repoLink: 'https://github.com/Herimamy12/get_next_line',
		image: img3,
	},
	{
		id: 4,
		title: 'minitalk',
		description: "minitalk est un projet en C qui implémente un système de communication entre processus en utilisant les signaux Unix, permettant d'envoyer des messages via des bits.",
		technologies: ['Langage C'],
		repoLink: 'https://github.com/Herimamy12/minitalk',
		image: img4,
	},
	{
		id: 5,
		title: 'push_swap',
		description: "push_swap est un projet en C qui consiste à trier une pile d'entiers en utilisant les opérations de base sur des piles, tout en optimisant le nombre d'opérations.",
		technologies: ['Langage C'],
		repoLink: 'https://github.com/Herimamy12/push_swap',
		image: img5,
	},
	{
		id: 6,
		title: 'so_long',
		description: "so_long est un jeu 2D en C où le joueur navigue dans un labyrinthe, collecte des objets et atteint un objectif, tout en gérant les éléments graphiques avec la bibliothèque miniLibX.",
		technologies: ['Langage C'],
		repoLink: 'https://github.com/Herimamy12/so_long',
		image: img6,
	},
	{
		id: 7,
		title: 'philosophers',
		description: "philosophers est un projet en C qui simule le problème des philosophes mangeurs en utilisant les threads et la synchronisation pour gérer l'accès concurrent aux ressources.",
		technologies: ['Langage C'],
		repoLink: 'https://github.com/Herimamy12/philosophers',
		image: img7,
	},
	{
		id: 8,
		title: 'minishel',
		description: "minishell est un projet en C qui implémente un shell Unix basique, gérant l'exécution de commandes, les processus et les signaux.",
		technologies: ['Langage C'],
		repoLink: 'https://github.com/Herimamy12/minishel',
		image: img8,
	},
	{
		id: 9,
		title: 'cub3D',
		description: "cub3D est un projet en C qui implémente un moteur graphique en 2.5D utilisant le raycasting pour afficher un environnement immersif.",
		technologies: ['Langage C'],
		repoLink: 'https://github.com/Herimamy12/cub3D',
		image: img9,
	},
	{
		id: 10,
		title: 'CPPmodule',
		description: "CPP module est une série des projets en C++ qui explore les concepts fondamentaux du langage, comme l'encapsulation, l'héritage, le polymorphisme et la gestion de la mémoire.",
		technologies: ['Langage C++'],
		repoLink: 'https://github.com/Herimamy12/CPPmodule',
		image: img10,
	},
	{
		id: 11,
		title: 'portfolio',
		description: "Mon portfolio est un projet web développé avec TypeScript, Vue.js, React.js et Node.js, mettant en avant mes compétences et réalisations à travers une interface moderne et interactive.",
		technologies: ['TypeScript', 'Vue.js', 'React.js', 'Node.js'],
		repoLink: 'https://github.com/Herimamy12/portfolio',
		image: img11,
	},
	{
		id: 12,
		title: 'toDoList',
		description: "toDoList est une application web simple développée en JavaScript pur, permettant de gérer des tâches avec une interface interactive et intuitive.",
		technologies: ['JavaScript'],
		demoLink: 'https://herimamy12.github.io/toDoList/',
		repoLink: 'https://github.com/Herimamy12/toDoList',
		image: img12,
	},
];

const Projects = () => {
	return (
		<div className="mt-36" id="Projects">
			<Title title="Mes Projets" />
			<div className="grid md:grid-cols-3 gap-4">
				{projects.map((project) => (
					<div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
						<img
							src={project.image}
							alt={project.title}
							className="w-full rounded-xl h-56 object-cover"
						/>
						<div>
							<h1 className="my-2 font-bold">
								{project.title}
							</h1>
							<p className="text-sm">{project.description}</p>

						</div>
						<div className="flex flex-wrap gap-2 my-3">
							{project.technologies.map((tech) => (
								<span className="badge badge-accent badge-sm">
									{tech}
								</span>
							))}
						</div>
						<div className="flex">
							<a className="btn btn-neutral w-3/5 ml-2" href={project.repoLink}>
								<Github className="w-4" />
							</a>
							{project.demoLink && (
								<a className="btn btn-neutral w-1/4 ml-2" href={project.demoLink}>
								<Link className="w-4" />
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects
