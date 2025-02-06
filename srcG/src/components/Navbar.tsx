import { Ghost } from "lucide-react"

const Navbar = () => {
	return (
		<div className="flex justify-center
		md:justify-between items-center p-4" id="Navbar"
		>
			<a href="#Navbar"
				className="flex items-center font-bold text-3xl md:text-xl" >
				<Ghost className="mr-2" />
				Herimamy
				<span className="text-accent mx-1">
					Naval
				</span>
			</a>
			<ul
				className="hidden md:flex space-x-4" >
				<li
					className="btn btn-sm btn-ghost" >
					<a href="#Home">
						Accueil
					</a>
				</li>

				<li
					className="btn btn-sm btn-ghost" >
					<a href="#About">
						A propos
					</a>
				</li>

				<li
					className="btn btn-sm btn-ghost" >
					<a href="#Skills">
						Competences
					</a>
				</li>

				<li
					className="btn btn-sm btn-ghost" >
					<a href="#Projects">
						Mes projet
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Navbar