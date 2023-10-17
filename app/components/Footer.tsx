import React from "react";

const Footer = () => {
	return (
		<div className="w-[100vw] h-fit flex flex-col items-center justify-center relative pt-[30vw] lg:pt-[15vw] pb-[5vw] lg:pb-[2.5vw] mx-auto overflow-hidden z-10">
			<div className="w-[85vw] lg:w-[80vw] flex flex-col lg:flex-row justify-between items-start lg:items-center">
				<h1 className="text-white text-[11vw] lg:text-[3.35vw] font-bold leading-[12.5vw] lg:leading-[4.25vw]">
					Enter the Metaverse{" "}
				</h1>
				<button className="w-[55vw] lg:w-[15.5vw] h-[12.5vw] lg:h-[3.75vw] rounded-[7vw] lg:rounded-[2vw] bg-[#25618B] flex items-center justify-center cursor-pointer mt-[7.5vw] lg:mt-0">
					<img
						className="w-[5.5vw] lg:w-[1.5vw]"
						src="/assets/headset.svg"
						alt="headset"
					/>
					<p className="mt-0 lg:mt-[.25vw] ml-[2vw] lg:ml-[1vw] text-white text-[4vw] lg:text-[1vw] uppercase">
						Enter Metaverse
					</p>
				</button>
			</div>
			<div className="mt-[10vw] lg:mt-[5vw] w-[85vw] lg:w-[80vw] h-[2px] bg-[#ffffff49] mb-[7.5vw] lg:mb-0"></div>
			<div className="mt-[3vw] w-[80vw] flex flex-col lg:flex-row items-start lg:items-center justify-between">
				<h2 className="text-white text-[7vw] lg:text-[1.25vw] font-bold">
					Metaversus
				</h2>
				<h4 className="text-[#FFFFFFB2] text-[3vw] lg:text-[.8vw] mt-[7.5vw] lg:mt-0 mb-[7.5vw] lg:mb-0">
					Copyright © 2021 - 2022 Metaversus. All rights reserved.
				</h4>
				<div className="flex items-center justify-center mb-[5vw] lg:mb-0">
					<img
						className="w-[7vw] lg:w-[1.5vw] cursor-pointer"
						src="/assets/twitter.svg"
						alt="twitter"
					/>
					<img
						className="w-[6vw] lg:w-[1.35vw] ml-[4vw] lg:ml-[1.5vw] cursor-pointer"
						src="/assets/linkdin.svg"
						alt="linkdin"
					/>
					<img
						className="w-[8vw] lg:w-[1.65vw] ml-[4vw] lg:ml-[1.5vw] cursor-pointer"
						src="/assets/instagram.svg"
						alt="instagram"
					/>
					<img
						className="w-[7vw] lg:w-[1.45vw] ml-[4vw] lg:ml-[1.5vw] cursor-pointer"
						src="/assets/facebook.svg"
						alt="facebook"
					/>
				</div>
			</div>
			<img
				className="absolute right-[-25vw] lg:right-[10vw] bottom-[-15vw] blur-[25vw] lg:blur-[10vw] w-[150vw] lg:w-[85vw] h-[100vw] lg:h-[50vw] z-0"
				src="/assets/light-footer.svg"
				alt="light-footer"
			/>
		</div>
	);
};

export default Footer;
