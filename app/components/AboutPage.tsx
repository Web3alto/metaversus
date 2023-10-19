"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";

const AboutPage = () => {
	return (
		<motion.div
			variants={staggerContainer({
				staggerChildren: 0.2,
				delayChildren: 1,
			})}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="w-[70vw] mt-[25vw] lg:mt-[15vw] mb-[25vw] lg:mb-[15vw] flex items-center justify-center flex-col relative mx-auto"
		>
			<motion.h2
				variants={fadeIn("up", "tween", 0.3, 1)}
				className="flex flex-col items-center justify-center z-10 p-[1vw] text-[3vw] lg:text-[1vw] text-[#C7C7C780]"
			>
				| About Metaverus
			</motion.h2>
			<motion.h3
				variants={fadeIn("up", "tween", 0.3, 1)}
				className="text-[5vw] sm:text-[4vw] lg:text-[1.65vw] text-[#C7C7C7] text-center leading-[7vw] lg:leading-[3vw] relative"
			>
				<span className="text-white font-bold">Metaverse</span> is a new
				thing in the future, where you can enjoy the virtual world by
				feeling like it's really real, you can feel what you feel in
				this metaverse world, because this is really the{" "}
				<span className="text-white font-bold">
					madness of the metaverse
				</span>{" "}
				of today, using only{" "}
				<span className="text-white font-bold">VR</span> devices you can
				easily explore the metaverse world you want, turn your dreams
				into reality. Let's{" "}
				<span className="text-white font-bold">explore</span> the
				madness of the metaverse by scrolling down
			</motion.h3>
			<motion.img
				variants={fadeIn("up", "tween", 0.3, 1)}
				className="w-[7.5vw] sm:w-[6vw] lg:w-[2vw] mt-[4vw] lg:mt-[2vw] cursor-pointer z-10"
				src="/assets/arrow.svg"
				alt="arrow"
			/>
			<img
				className="absolute w-[150vw] h-[55vw] right-[-10vw] top-[-10vw] flex blur-[10vw]  "
				src="/assets/light-about.svg"
				alt="light-about"
			/>
		</motion.div>
	);
};

export default AboutPage;
