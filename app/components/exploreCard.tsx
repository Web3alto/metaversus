"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

interface ExploreCardProps {
	id: string;
	imgUrl: string;
	title: string;
	index: number;
	active: string | null;
	handleClick: (id: string) => void;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
	id,
	imgUrl,
	title,
	index,
	active,
	handleClick,
}) => (
	<motion.div
		variants={fadeIn("right", "spring", index * 0.5, 0.75)}
		className={`relative ${
			active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
		} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[.6s] ease-out-flex cursor-pointer`}
		onClick={() => handleClick(id)}
	>
		<img
			src={imgUrl}
			alt="planet-04"
			className="absolute w-full h-full object-cover rounded-[3vw] lg:rounded-[1vw]"
		/>
		{active !== id ? (
			<h3 className="lg:rotate-[270deg] text-[5vw] lg:text-[1.75vw] text-white font-bold lg:absolute static lg:w-[15vw] bottom-[9vw] sm:bottom-[5.25vw] lg:bottom-[8vw] left-[22.5vw] lg:left-[-3.25vw] z-10 ">
				{title}
			</h3>
		) : (
			<div className="absolute bottom-0 p-[5vw] lg:p-[2vw] flex justify-start w-full flex-col  rounded-b-[1.25vw] overflow-hidden">
				<img
					src="/assets/worlds/vr-logo.svg"
					alt="vr-logo"
					className=" w-[10vw] lg:w-[4vw] mb-[2vw] lg:mb-[20px]"
				/>
				<p className="text-[3vw] lg:text-[1.5vw] text-white  w-[75vw] lg:w-[15vw] ">
					Enter Metaverse
				</p>
				<h2 className="text-[5vw] lg:text-[3vw] text-white font-bold w-[100vw]">
					{title}
				</h2>
			</div>
		)}
	</motion.div>
);

export default ExploreCard;
