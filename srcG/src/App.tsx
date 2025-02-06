import About from "./components/About";
import Skills from "./components/Skills";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
	return (
		<div>
			<div className="p-5 md:px-[10%]">
				<Navbar />
				<Home />
			</div>

			<div>

				<About />

				<div className="p-5 md:px-[10%]">
					<Skills />
					<Projects />
				</div>

				<Footer />

			</div>
		</div>
	)
}