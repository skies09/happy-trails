import { motion } from "framer-motion";
import Button from "../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
	const renderText = () => {
		return (
			<div>
				<motion.p
					className="mb-6 lg:ml-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<span className="font-gloria text-4xl md:text-7xl m-1 text-colorTwo">
						Happy Trails
						<FontAwesomeIcon
							icon={faPaw}
							size="xs"
							className="text-colorTwo ml-3"
						/>
					</span>
				</motion.p>
				<motion.p
					className="mt-6 lg:ml-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<span className="font-fredoka text-xl md:text-3xl m-1 text-colorFour">
						Dog Walking Service
					</span>
				</motion.p>
			</div>
		);
	};

	const renderButton = () => {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<Button
					text="Contact"
					className="lg:ml-8 font-fredoka px-6 py-2 bg-colorOne text-colorFour border-2 border-colorFour rounded-xl tracking-wider font-semibold lg:overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)]"
					active={true}
					action={"contact"}
				/>
			</motion.div>
		);
	};

	return (
		<>
			<div
				className="w-screen h-[70vh] md:h-[80vh] flex flex-col md:flex-row-reverse items-center mt-20"
				id="hero"
			>
				{/* Image Section */}

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="w-full md:w-1/2 h-[40vh] md:h-full flex items-start md:items-center justify-center mx-4 lg:mx-0"
				>
					<img
						src="../../assets/images/walking.jpg"
						alt="Hero Background"
						className="flex w-full max-h-[16rem] md:max-h-none lg:max-w-[75%] lg:max-h-[75%] object-cover min-h-[15rem] border-b-4 border-colorTwo md:border-2 md:border-colorTwo md:rounded-xl md:shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)]"
					/>
				</motion.div>

				{/* Text and Button Section */}
				<div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:pl-12 lg:pl-16">
					<motion.div
						className="text-center md:text-left"
						initial={{ opacity: 0, x: 0 }}
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
