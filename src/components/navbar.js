import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className="w-full h-12 bg-colorOne fixed top-0 z-50">
			<div className="flex justify-between items-center">
				<div className="flex items-center justify-center">
					<a
						href="#hero"
						className="flex font-fugaz text-lg font-semibold text-colorTwo ml-6 tracking-tight  mt-2"
					>
						Happy Trails
					</a>
					<FontAwesomeIcon
						icon={faPaw}
						size="sm"
						className="flex justify-center items-center ml-2 mt-2 text-colorTwo"
					/>
				</div>
				<div className="hidden md:flex items-center space-x-6 mr-6 mt-3">
					<a
						href="#about"
						className="font-fredoka font-medium text-colorTwo hover:text-colorFour hover:underline"
					>
						About
					</a>
					<a
						href="#services"
						className="font-fredoka font-medium text-colorTwo hover:text-colorFour hover:underline"
					>
						Services
					</a>
					<a
						href="#contact"
						className="font-fredoka font-medium text-colorTwo hover:text-colorFour hover:underline"
					>
						Contact
					</a>
				</div>
				<div className="mr-4 mt-2 w-8 h-8 flex items-center md:hidden">
					<div
						className="w-8 h-6 flex flex-col justify-between cursor-pointer"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span
							className={`block w-full h-1 bg-colorTwo rounded-3xl transition-all duration-1000 ease-in-out origin-center ${
								menuOpen
									? "transform rotate-45 translate-y-2.5"
									: ""
							}`}
						></span>
						<span
							className={`block w-full h-1 bg-colorTwo rounded-3xl transition-all duration-1000 ease-in-out ${
								menuOpen ? "opacity-0" : ""
							}`}
						></span>
						<span
							className={`block w-full h-1 bg-colorTwo rounded-3xl transition-all duration-1000 ease-in-out origin-center ${
								menuOpen
									? "transform -rotate-45 -translate-y-2.5"
									: ""
							}`}
						></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
