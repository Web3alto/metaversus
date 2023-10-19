"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const WorldPage = () => {
	return (
		<motion.div
			variants={staggerContainer({
				staggerChildren: 0.2,
				delayChildren: 1,
			})}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="w-[85vw] lg:w-full h-fit flex items-center justify-center flex-col relative mx-auto"
		>
			<motion.h2
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="flex flex-col items-center justify-center z-10 p-[1vw] text-[3vw] lg:text-[1vw] text-[#C7C7C780]"
			>
				| The World
			</motion.h2>
			<motion.h1
				variants={fadeIn("up", "tween", 0.25, 1)}
				className="text-[11vw] sm:text-[8.65vw] lg:text-[3.4vw] text-white font-bold text-center leading-[12.5vw] sm:leading-[9vw] lg:leading-[4.25vw]"
			>
				Choose the world you want <br />
				to explore
			</motion.h1>
			<div className="w-4/5 flex flex-col lg:flex-row items-center justify-center mt-[15vw] sm:mt-[8vw] lg:mt-[2.5vw] z-10">
				<motion.div
					variants={fadeIn("right", "tween", 0.5, 0.6)}
					className="flex items-center justify-center h-[12.5vh] lg:h-[65vh] w-[80vw] lg:w-[10vw] bg-[url('/assets/worlds/planet-01.png')] bg-cover rounded-[4vw] lg:rounded-[2vw] m-[2vw] lg:m-[.9vw] relative cursor-pointer"
				>
					<h2 className="lg:rotate-[270deg] text-[5vw] lg:text-[1.75vw] text-white font-bold lg:absolute static  lg:w-[15vw] bottom-[9vw] sm:bottom-[5.25vw] lg:bottom-[8vw] left-[22.5vw] lg:left-[-2.45vw]">
						The Hogwarts
					</h2>
				</motion.div>
				<motion.div
					variants={fadeIn("right", "tween", 1, 0.6)}
					className="h-[30vh] lg:h-[65vh] w-[80vw] lg:w-[25vw] bg-[url('/assets/worlds/planet-02.png')] bg-cover bg-center rounded-[2vw] m-[2vw] lg:m-[.9vw] relative cursor-pointer"
				>
					<h2 className="text-[3vw] lg:text-[.95vw] text-white absolute w-[75vw] lg:w-[15vw] bottom-[12.5vw] lg:bottom-[5vw] left-[2vw]">
						ENTER METAVERSE
					</h2>
					<img
						className="absolute w-[12.5vw] lg:w-[3.5vw] bottom-[20vw] lg:bottom-[7.5vw] left-[2vw]"
						src="/assets/worlds/vr-logo.svg"
						alt="vr-logo"
					/>
					<h2 className="text-[7vw] lg:text-[1.75vw] text-white font-bold absolute w-[75vw] lg:w-[15vw] bottom-[1.75vw] left-[2vw]">
						The Upside Down
					</h2>
				</motion.div>
				<motion.div
					variants={fadeIn("right", "tween", 1.5, 0.6)}
					className="flex items-center justify-center h-[12.5vh] lg:h-[65vh] w-[80vw] lg:w-[10vw] bg-[url('/assets/worlds/planet-03.png')] bg-cover rounded-[4vw] lg:rounded-[2vw] m-[2vw] lg:m-[.9vw] relative cursor-pointer"
				>
					<h2 className="lg:rotate-[270deg] text-[5vw] lg:text-[1.75vw] text-white font-bold lg:absolute static  lg:w-[15vw] bottom-[9vw] sm:bottom-[5.25vw] lg:bottom-[8vw] left-[22.5vw] lg:left-[-2.45vw]">
						Kadirojo Permai
					</h2>
				</motion.div>
				<motion.div
					variants={fadeIn("right", "tween", 2, 0.6)}
					className="flex items-center justify-center h-[12.5vh] lg:h-[65vh] w-[80vw] lg:w-[10vw] bg-[url('/assets/worlds/planet-04.png')] bg-cover rounded-[4vw] lg:rounded-[2vw] m-[2vw] lg:m-[.9vw] relative cursor-pointer"
				>
					<h2 className="lg:rotate-[270deg] text-[5vw] lg:text-[1.75vw] text-white font-bold lg:absolute static  lg:w-[15vw] bottom-[9vw] sm:bottom-[5.25vw] lg:bottom-[8vw] left-[22.5vw] lg:left-[-2.45vw]">
						Paradise Island
					</h2>
				</motion.div>
				<motion.div
					variants={fadeIn("right", "tween", 2.5, 0.6)}
					className="flex items-center justify-center h-[12.5vh] lg:h-[65vh] w-[80vw] lg:w-[10vw] bg-[url('/assets/worlds/planet-05.png')] bg-cover rounded-[4vw] lg:rounded-[2vw] m-[2vw] lg:m-[.9vw] relative cursor-pointer"
				>
					<h2 className="lg:rotate-[270deg] text-[5vw] lg:text-[1.75vw] text-white font-bold lg:absolute static  lg:w-[15vw] bottom-[9vw] sm:bottom-[5.25vw] lg:bottom-[8vw] left-[22.5vw] lg:left-[-2.45vw]">
						Hawkins Labs
					</h2>
				</motion.div>
			</div>
			<img
				className="absolute left-0 bottom-0 blur-[8vw] w-[100vw] h-[80vw]"
				src="/assets/light-world.svg"
				alt="light-world"
			/>
		</motion.div>
	);
};

export default WorldPage;
