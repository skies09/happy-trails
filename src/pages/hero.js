import { motion } from "framer-motion";
import Button from "../components/button";

const Hero = () => {
	const renderText = () => {
		return (
			<motion.p
				className=""
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<span className="font-gloria text-5xl md:text-6xl m-1 text-colorTwo">
					Happy Trails
				</span>
			</motion.p>
		);
	};

	const renderButton = () => {
		return (
			<Button
				text="Contact"
				className="font-fredoka px-6 py-2 bg-colorOne text-colorFour border-2 border-colorFour rounded-xl tracking-wider font-semibold lg:overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)]"
				active={true}
				action={"contact"}
			/>
		);
	};

	return (
		<>
			<div
				className="w-screen h-[70vh] md:h-[85vh] flex flex-col md:flex-row-reverse items-center mt-8"
				id="hero"
			>
				{/* Image Section */}

				<div className="w-full md:w-1/2 h-[40vh] md:h-full flex items-start md:items-center justify-center">
					<img
						src="../../assets/images/walking.jpg"
						alt="Hero Background"
						className="flex w-full md:max-w-[80%] max-h-[80%] object-cover min-h-[15rem] md:object-contain border-b-4 border-colorTwo md:border-2 md:border-colorTwo md:rounded-xl md:shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)]"
					/>
				</div>

				{/* Text and Button Section */}
				<div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:pl-12 lg:pl-16">
					<motion.div
						className="text-center md:text-left"
						initial={{ opacity: 0, x: -200 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
					>
						{renderText()}
						<div className="my-6 flex flex-row justify-center md:justify-start">
							{renderButton()}
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Hero;
