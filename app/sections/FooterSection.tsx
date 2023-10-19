"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Footer = () => {
	return (
		<motion.div
			variants={staggerContainer({
				staggerChildren: 0.2,
				delayChildren: 1,
			})}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="w-[100vw] h-fit flex flex-col items-center justify-center relative pt-[30vw] lg:pt-[15vw] pb-[5vw] lg:pb-[2.5vw] mx-auto overflow-hidden z-10"
		>
			<motion.div
				variants={fadeIn("up", "tween", 0.25, 0.55)}
				className="w-[85vw] lg:w-[70vw] flex flex-col lg:flex-row justify-between items-start lg:items-center"
			>
				<h1 className="text-white text-[11vw] sm:text-[8vw] lg:text-[3.35vw] font-bold leading-[12.5vw] lg:leading-[4.25vw]">
					Enter the Metaverse{" "}
				</h1>
				<button className="w-[55vw] sm:w-[35vw] lg:w-[13.5vw] h-[12.5vw] sm:h-[8.5vw] lg:h-[3vw] rounded-[7vw] lg:rounded-[2vw] bg-[#25618B] flex items-center justify-center cursor-pointer mt-[7.5vw] sm:mt-[3.5vw] lg:mt-0 z-10">
					<img
						className="w-[5.5vw] sm:w-[3.5vw] lg:w-[1.5vw]"
						src="/assets/headset.svg"
						alt="headset"
					/>
					<p className="mt-0 lg:mt-[.15vw] ml-[2vw] lg:ml-[1vw] text-white text-[4vw] sm:text-[2.5vw] lg:text-[.9vw] uppercase">
						Enter Metaverse
					</p>
				</button>
			</motion.div>
			<motion.div
				variants={fadeIn("up", "tween", 0.25, 0.55)}
				className="mt-[10vw] sm:mt-[7.5vw] lg:mt-[2.5vw] w-[85vw] lg:w-[70vw] h-[2px] bg-[#ffffff49] mb-[7.5vw] sm:mb-[3.5vw] lg:mb-0"
			></motion.div>
			<motion.div
				variants={fadeIn("up", "tween", 0.25, 0.55)}
				className="mt-[3vw] w-[85vw] lg:w-[70vw] flex flex-col sm:flex-row items-start sm:items-center justify-between"
			>
				<h2 className="text-white text-[7vw] sm:text-[3.25vw] lg:text-[1.25vw] font-bold">
					Metaversus
				</h2>
				<h4 className="text-[#FFFFFFB2] text-[3vw] sm:text-[1.5vw] lg:text-[.8vw] mt-[7.5vw] sm:mt-0 mb-[7.5vw] sm:mb-0">
					Copyright © 2021 - 2022 Metaversus. All rights reserved.
				</h4>
				<div className="flex items-center justify-center mb-[5vw] sm:mb-0 z-10">
					<img
						className="w-[7vw] sm:w-[3.5vw] lg:w-[1.5vw] cursor-pointer"
						src="/assets/twitter.svg"
						alt="twitter"
					/>
					<img
						className="w-[6vw] sm:w-[3.25vw] lg:w-[1.35vw] ml-[4vw] sm:ml-[1.5vw] cursor-pointer"
						src="/assets/linkdin.svg"
						alt="linkdin"
					/>
					<img
						className="w-[8vw] sm:w-[3.75vw] lg:w-[1.65vw] ml-[4vw] sm:ml-[1.5vw] cursor-pointer"
						src="/assets/instagram.svg"
						alt="instagram"
					/>
					<img
						className="w-[7vw] sm:w-[3.5vw] lg:w-[1.45vw] ml-[4vw] sm:ml-[1.5vw] cursor-pointer"
						src="/assets/facebook.svg"
						alt="facebook"
					/>
				</div>
			</motion.div>
			<img
				className="absolute right-[-25vw] lg:right-[10vw] bottom-[-30vw] blur-[25vw] lg:blur-[15vw] w-[150vw] lg:w-[50vw] h-[100vw] lg:h-[50vw] z-0"
				src="/assets/light-footer.svg"
				alt="light-footer"
			/>
		</motion.div>
	);
};

export default Footer;
