"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const ReviewPage = () => {
	return (
		<motion.div
			variants={staggerContainer({
				staggerChildren: 0.2,
				delayChildren: 1,
			})}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="w-[85vw] h-fit flex flex-col lg:flex-row items-center justify-center relative pt-[7.5vw] lg:pt-[15vw] mx-auto "
		>
			<motion.div
				variants={fadeIn("right", "tween", 0.2, 1)}
				className="border border-[#6A6A6A] h-[100vw] lg:h-[33.5vw] w-[85vw] lg:w-[22.5vw] flex flex-col items-start justify-end bg-[#ffffff0a] mb-[5vw] lg:mb-0 mr-0 lg:mr-[2vw] rounded-[5vw] lg:rounded-[2vw] p-[5vw] lg:p-[3vw] z-10"
			>
				<h2 className="text-[6.5vw] lg:text-[1.65vw] text-white">
					Samantha{" "}
				</h2>
				<h3 className="text-[4vw] lg:text-[.95vw] text-white pb-[7.5vw] lg:pb-[1vw] pt-[4vw] lg:pt-[1vw]">
					Founder | Metaverus
				</h3>
				<p className="text-[4.85vw] lg:text-[1.3vw] leading-[10.5vw] lg:leading-[2.4vw] text-white">
					“With the development of today&apos;s technology, metaverse is
					very useful for today&apos;s work, or can be called web 3.0. by
					using metaverse you can use it as anything”
				</p>
			</motion.div>
			<motion.div
				variants={fadeIn("left", "tween", 0.2, 1)}
				className="w-[85vw] lg:w-[50vw] h-[60vw] lg:h-[33.5vw] bg-[url('/assets/worlds/planet-09.png')] bg-center bg-cover rounded-[5vw] lg:rounded-[2vw] z-10"
			></motion.div>
			<motion.img
				variants={fadeIn("left", "tween", 0.2, 1)}
				className="hidden lg:flex absolute rotate-[-30deg] w-[25vw] bottom-[13.5vw] right-[44vw] z-10"
				src="/assets/scroll.svg"
				alt="scroll"
			/>
			<img
				className="absolute right-[20vw] bottom-[20vw] blur-[10vw] w-[75vw] h-[75vw]"
				src="/assets/light-review.svg"
				alt="light-review"
			/>
		</motion.div>
	);
};

export default ReviewPage;
