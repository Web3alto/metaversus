"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { exploreWorlds } from "../utils/constants";
import { fadeIn, staggerContainer } from "../utils/motion";
import ExploreCard from "../components/exploreCard";

const Explore = () => {
	const [active, setActive] = useState("world-2");

	return (
		<section className="w-[85vw] mx-auto relative z-10" id="explore">
			<motion.div
				variants={staggerContainer({
					staggerChildren: 0.2,
					delayChildren: 1,
				})}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={` mx-auto flex flex-col`}
			>
				<motion.h2
					variants={fadeIn("up", "tween", 0.2, 1)}
					className="flex flex-col items-center justify-center z-10 p-[1vw] text-[3vw] lg:text-[1vw] text-[#C7C7C780]"
				>
					| The World
				</motion.h2>
				<motion.h1
					variants={fadeIn("up", "tween", 0.25, 1)}
					className="text-[11vw] sm:text-[8.65vw] lg:text-[3.4vw] text-white font-bold text-center leading-[12.5vw] sm:leading-[9vw] lg:leading-[4.25vw] z-10"
				>
					Choose the world you want <br />
					to explore
				</motion.h1>
				<div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 z-10">
					{exploreWorlds.map((world, index) => (
						<ExploreCard
							key={world.id}
							{...world}
							index={index}
							active={active}
							handleClick={setActive}
						/>
					))}
				</div>
			</motion.div>
			<img
				className="absolute left-[-10vw] bottom-[-30vw] blur-[15vw] w-[100vw] h-[80vw]"
				src="/assets/light-world.svg"
				alt="light-world"
			/>
		</section>
	);
};

export default Explore;
