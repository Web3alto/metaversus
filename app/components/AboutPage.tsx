import React from "react";

const AboutPage = () => {
	return (
		<div className="w-[70vw] h-[100vh] flex items-center justify-center flex-col relative mx-auto">
			<h3 className="text-[5vw] sm:text-[4vw] lg:text-[1.65vw] text-[#C7C7C7] text-center leading-[7vw] lg:leading-[3vw] relative">
				<div className="absolute left-[24vw] sm:left-[22.5vw] lg:left-[31vw] top-[-10vw] lg:top-[-3.5vw] flex flex-col items-center justify-center z-10">
					<h2 className="text-[3vw] lg:text-[1vw] text-[#C7C7C780]">
						| About Metaverus
					</h2>
				</div>
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
			</h3>
			<img
				className="w-[7.5vw] sm:w-[6vw] lg:w-[2.25vw] mt-[4vw] lg:mt-[2vw] cursor-pointer z-10"
				src="/assets/arrow.svg"
				alt="arrow"
			/>
			<img
				className="absolute w-[150vw] h-[55vw] right-[-10vw] top-[-10vw] flex blur-[10vw]  "
				src="/assets/light-about.svg"
				alt="light-about"
			/>
		</div>
	);
};

export default AboutPage;
