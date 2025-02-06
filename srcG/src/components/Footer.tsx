import { Ghost, Facebook, Linkedin, Github } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 mt-36" id="Contact">
            <aside>

                <Ghost className="w-10 h-10" />
                <p className="font-bold">
                    Herimamy
                    <span className="text-accent mx-1">Naval</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} -  Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/nherimam/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://github.com/Herimamy12" target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100014226284284" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer