import React from "react";

const InsightPage = () => {
	return (
		<div className="w-[85vw] lg:w-full h-fit flex flex-col items-center justify-center relative pt-[10vw] mx-auto">
			<h1 className="text-center text-[11vw] sm:text-[8.5vw] lg:text-[3.4vw] text-white font-bold leading-[12.5vw] sm:leading-[10vw] lg:leading-[4.25vw] pb-[15vw] lg:pb-[3vw] relative">
				<div className="absolute left-[36.5vw] lg:left-[17.75vw] top-[-11.5vw] lg:top-[-4vw] flex flex-col items-start justify-center">
					<h2 className="text-[3vw] lg:text-[1vw] text-[#C7C7C780]">
						| Insight
					</h2>
				</div>
				Insight about metaverse
			</h1>
			<div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-center mb-[10vw] lg:mb-[2vw] z-10">
				<div className="w-[85vw] lg:w-[15vw] h-[60vw] lg:h-[13vw] rounded-[10vw] lg:rounded-[2vw] mb-[7vw] lg:mb-0 mr-[3vw] bg-[url('/assets/worlds/planet-06.png')] bg-center bg-cover hover:scale-105 transition duration-500 ease"></div>
				<div className="flex flex-col items-start justify-start">
					<h2 className="w-[85vw] lg:w-[35vw] text-[7.25vw] sm:text-[6.25vw] lg:text-[2.25vw] text-white leading-[8.5vw] lg:leading-[2.75vw] mb-[5vw] lg:mb-[1vw] ">
						The launch of the Metaverse makes Elon musk ketar-ketir
					</h2>
					<p className="w-[85vw] lg:w-[30vw] text-[4.25vw] sm:text-[3.5vw] lg:text-[1vw] text-[#adb1bb] leading-[6vw] lg:leading-[2.1vw]">
						Magna etiam tempor orci eu lobortis elementum nibh
						tellus molestie. Diam maecenas sed enim ut sem viverra
						alique.
					</p>
				</div>
				<img
					className="hidden lg:flex w-[5vw] ml-[3vw] cursor-pointer hover:rotate-[30deg] transition duration-500 ease"
					src="/assets/arrow-right.svg"
					alt="arrow-right"
				/>
			</div>
			<div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-center mb-[10vw] lg:mb-[2vw] z-10">
				<div className="w-[85vw] lg:w-[15vw] h-[60vw] lg:h-[13vw] rounded-[10vw] lg:rounded-[2vw] mb-[7vw] lg:mb-0  mr-[3vw] bg-[url('/assets/worlds/planet-07.png')] bg-center bg-cover hover:scale-105 transition duration-500 ease"></div>
				<div className="flex flex-col items-start justify-start">
					<h2 className="w-[85vw] lg:w-[35vw] text-[7.25vw] sm:text-[6.25vw] lg:text-[2.25vw] text-white leading-[8.5vw] lg:leading-[2.75vw] mb-[5vw] lg:mb-[1vw]">
						7 tips to easily master the madness of the Metaverse
					</h2>
					<p className="w-[85vw] lg:w-[30vw] text-[4.25vw] sm:text-[3.5vw] lg:text-[1vw] text-[#adb1bb] leading-[6vw] lg:leading-[2.1vw]">
						Vitae congue eu consequat ac felis donec. Et magnis dis
						parturient montes nascetur ridiculus mus. Convallis
						tellus id interdum
					</p>
				</div>
				<img
					className="hidden lg:flex w-[5vw] ml-[3vw] cursor-pointer hover:rotate-[30deg] transition duration-500 ease"
					src="/assets/arrow-right.svg"
					alt="arrow-right"
				/>
			</div>
			<div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-center mb-[10vw] lg:mb-[2vw] z-10">
				<div className="w-[85vw] lg:w-[15vw] h-[60vw] lg:h-[13vw] rounded-[10vw] lg:rounded-[2vw] mb-[7vw] lg:mb-0 mr-[3vw] bg-[url('/assets/worlds/planet-08.png')] bg-center bg-cover hover:scale-105 transition duration-500 ease"></div>
				<div className="flex flex-col items-start justify-start">
					<h2 className="w-[85vw] lg:w-[35vw] text-[7.25vw] sm:text-[6.25vw] lg:text-[2.25vw] text-white leading-[8.5vw] lg:leading-[2.75vw] mb-[5vw] lg:mb-[1vw]">
						With one platform you can explore the whole world
						virtually
					</h2>
					<p className="w-[85vw] lg:w-[30vw] text-[4.25vw] sm:text-[3.5vw] lg:text-[1vw] text-[#adb1bb] leading-[6vw] lg:leading-[2.1vw]">
						Quam quisque id diam vel quam elementum. Viverra nam
						libero justo laoreet sit amet cursus sit. Mauris in
						aliquam sem
					</p>
				</div>
				<img
					className="hidden lg:flex w-[5vw] ml-[3vw] cursor-pointer hover:rotate-[30deg] transition duration-500 ease"
					src="/assets/arrow-right.svg"
					alt="arrow-right"
				/>
			</div>
			<img
				className="absolute right-[-5vw] bottom-[10vw] blur-[10vw] w-[50vw] h-[50vw]"
				src="/assets/light-insight.svg"
				alt="light-insight"
			/>
		</div>
	);
};

export default InsightPage;
