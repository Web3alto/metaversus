"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const MapPage = () => {
	return (
		<motion.div
			variants={staggerContainer({
				staggerChildren: 0.2,
				delayChildren: 1,
			})}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="w-full h-fit flex flex-col items-center justify-center relative pt-[20vw] lg:pt-[10vw]"
		>
			<motion.h2
				variants={fadeIn("up", "tween", 0.3, 1)}
				className="flex flex-col items-center justify-center z-10 p-[1vw] text-[3vw] lg:text-[1vw] text-[#C7C7C780]"
			>
				| People on the World
			</motion.h2>
			<motion.h1
				variants={fadeIn("up", "tween", 0.3, 1)}
				className="w-5/6 lg:w-2/4 text-center text-[11vw] sm:text-[8.5vw] lg:text-[3.4vw] text-white font-bold leading-[14.5vw] sm:leading-[10vw] lg:leading-[4.25vw] pb-[1.5vw] relative"
			>
				Track friends around you and invite them to play together in the
				same world
			</motion.h1>
			<motion.img
				variants={fadeIn("up", "tween", 0.8, 1)}
				className="w-[280vw] sm:w-[150vw] lg:w-[80vw] max-w-none mt-[5vw] lg-mt-0"
				src="/assets/map.png"
				alt="map"
			/>
			<img
				className="absolute left-0 bottom-[-40vw] blur-[10vw] w-[85vw] h-[80vw]"
				src="/assets/light-map.svg"
				alt="light-map"
			/>
		</motion.div>
	);
};

export default MapPage;
