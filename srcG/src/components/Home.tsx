import { Mail } from "lucide-react"
import img from "../assets/img.jpg"

const Home = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row
		justify-center items-center md:my-32 my-10" id="Home"
		>

			<div className="flex flex-col" >

				<h1 className="text-5xl md:text-6xl font-bold
				text-center md:text-left mt-4 md:mt-0"
				>
					Bonjour, <br />
					Je suis {" "}
					<span className="text-accent">Naval</span>
				</h1>

				<p className="my-4 text-md text-center md:text-left">
					Je suis etudiant de 42 Tana. <br />
					Developpeur C/C++ et apprenti web. <br />
					Membre du groupe de developpeur Petrus dev.
				</p>

				<a href="mailto:herimaminavalonaprosper@gmail.com?subject=Contact%20depuis%20le%20site" className="btn btn-neutral md:w-fit">
					<Mail className="w-5 h-5" />
					Me contacter
				</a>

			</div>

			<div className="md:ml-10">
				<img src={img} alt="" className="w-60 h-80 object-cover
				border-4 border-accent shadow-xl"
					style={{
						borderRadius: "68% 32% 68% 32% / 18% 82% 18% 82%"
					}}
				/>
			</div>
		</div>
	)
}

export default Home