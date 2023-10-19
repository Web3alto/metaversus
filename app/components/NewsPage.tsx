"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const NewsPage = () => {
	return (
		<motion.div
			variants={staggerContainer({
				staggerChildren: 0.2,
				delayChildren: 1,
			})}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="w-full h-fit flex flex-col lg:flex-row items-center justify-center relative pt-[25vw] lg:pt-[10vw]"
		>
			<div className="w-[85vw] lg:w-[40vw] flex items-center lg:items-start justify-center flex-col ">
				<motion.h2
					variants={fadeIn("right", "tween", 0.2, 1)}
					className="flex flex-col items-center justify-center z-10 p-[1vw] text-[3vw] lg:text-[1vw] text-[#C7C7C780]"
				>
					| What's New?
				</motion.h2>
				<motion.h1
					variants={fadeIn("right", "tween", 0.2, 1)}
					className="text-center lg:text-left text-[11vw] sm:text-[8.5vw] lg:text-[3.4vw] text-white font-bold leading-[12.5vw] sm:leading-[10vw] lg:leading-[4.25vw] pb-[15vw] lg:pb-[1.5vw] relative"
				>
					What's new about Metaversus?
				</motion.h1>
				<motion.div
					variants={fadeIn("right", "tween", 0.2, 1)}
					className="flex flex-col lg:flex-row items-center justify-start"
				>
					<div className="flex flex-col items-start justify-start w-[80vw] lg:w-[12.5vw] mb-[10vw] lg:mb-0 lg:mr-[2vw]">
						<img
							className="w-[15vw] sm:w-[12.5vw] lg:w-[3vw]"
							src="/assets/worlds/vr-pano.svg"
							alt="vr-pano"
						/>
						<h2 className="text-[8vw] sm:text-[6vw] lg:text-[1.25vw] text-white font-bold mt-[1vw] mb-[1vw]">
							A new world
						</h2>
						<p className="text-[#B0B0B0] text-[5vw] sm:text-[4vw] lg:text-[.85vw]">
							We have the latest update with new world for you to
							try never mind
						</p>
					</div>
					<div className="flex flex-col items-start justify-start w-[80vw] mb-[10vw] lg:mb-0 lg:w-[12.5vw]">
						<img
							className="w-[15vw] sm:w-[12.5vw] lg:w-[3vw]"
							src="/assets/worlds/vr-logo.svg"
							alt="vr-logo"
						/>
						<h2 className="text-[8vw] sm:text-[6vw] lg:text-[1.25vw] text-white font-bold mt-[1vw] mb-[1vw]">
							More realistic
						</h2>
						<p className="text-[#B0B0B0] text-[5vw] sm:text-[4vw] lg:text-[.85vw]">
							In the latest update, your eyes are narrow, making
							the world more realistic than ever
						</p>
					</div>
				</motion.div>
			</div>
			<motion.img
				variants={fadeIn("left", "tween", 0.2, 1)}
				className="w-[90vw] sm:w-[80vw] lg:w-[40vw] scale-x-[-1] z-10 ml-[-5vw] lg:ml-0 lg:rotate-[-15deg]"
				src="/assets/worlds/planet-06.svg"
				alt="planet-06"
			/>
			<img
				className="absolute right-[-15vw] bottom-[-35vw] blur-[8vw] w-[110vw] h-[90vw]"
				src="/assets/light-news.svg"
				alt="light-news"
			/>
		</motion.div>
	);
};

export default NewsPage;
