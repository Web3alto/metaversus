"use client";

const HomePage = () => {
	return (
		<div className="w-full h-fit flex items-center justify-center flex-col relative mb-0 sm:mb-[20vw] lg:mb-0">
			<nav className="w-[85vw] lg:w-[80vw] h-[25vw] lg:h-[7.5vw] flex justify-between items-center mx-auto z-10">
				<img
					className="w-[8vw] sm:w-[5vw] lg:w-[1.75vw] text-white cursor-pointer"
					src="/assets/search.svg"
					alt="search"
				/>
				<h2 className="text-[6vw] sm:text-[4vw] lg:text-[1.5vw] uppercase font-bold text-white pt-[2vw] pb-[2vw]">
					METAVERSUS
				</h2>
				<img
					className="w-[8vw] sm:w-[6vw] lg:w-[2vw] cursor-pointer hover:scale-110 transition duration-500 ease"
					src="/assets/menu.svg"
					alt="menu"
				/>
			</nav>
			{/* //////////////////////////////////////////////////////////////////////////////////////// */}
			{/* //////////////////////////////////////// HEADER //////////////////////////////////////// */}
			{/* //////////////////////////////////////////////////////////////////////////////////////// */}
			<img
				className="absolute left-0 top-[-15vw] blur-[6.5vw] w-[55vw] h-[60vw]"
				src="/assets/light-header.svg"
				alt="light-header"
			/>
			<div className="z-10 mt-[15vw] sm:mt-[10vw] lg:mt-[7.5vw]">
				<h1 className="text-[12.5vw] lg:text-[7.5vw] uppercase font-bold text-white">
					Metaverse
				</h1>
				<div className="flex items-center mt-[-4vw] z-10">
					<h1 className="text-[12.5vw] lg:text-[7.5vw] uppercase font-bold text-white mr-[.5vw]">
						Ma
					</h1>
					<img
						className="mt-[.5vw] lg:mt-[.4vw] w-[21vw] h-[9.5vw] lg:w-[11.5vw] lg:h-[5.5vw]"
						src="/assets/madness.svg"
						alt=""
					/>

					<h1 className="text-[12.5vw] lg:text-[7.5vw] uppercase font-bold text-white">
						ness
					</h1>
				</div>
			</div>
			<div className="w-full h-fit flex items-center justify-end relative">
				<div className="w-[90vw] h-[90vw] sm:h-[60vw] lg:h-[40vw] rounded-tl-[30vw] lg:rounded-tl-[10vw] rounded-bl-[3vw] mt-[-8vw] lg:mt-[-4.5vw] bg-[url('/assets/galaxy.png')] bg-center bg-cover "></div>
				<img
					className="absolute w-[65vw] sm:w-[50vw] lg:w-[25vw] bottom-[-32.5vw] sm:bottom-[-25.5vw] lg:bottom-[-12.5vw] right-[-15vw] sm:right-[-7.5vw] lg:right-[.5vw] "
					src="/assets/scroll.svg"
					alt="scroll"
				/>
			</div>
			<div className="absolute right-[5vw] top-[10vw] hidden lg:flex flex-col items-center justify-center">
				<img
					className="w-[1.75vw] mt-[.65vw] mb-[.65vw] cursor-pointer hover:scale-110 transition duration-500 ease"
					src="/assets/reddit.svg"
					alt="reddit"
				/>
				<img
					className="w-[1.75vw] mt-[.65vw] mb-[.65vw] cursor-pointer hover:scale-110 transition duration-500 ease"
					src="/assets/discord.svg"
					alt="discord"
				/>
				<img
					className="w-[1.75vw] mt-[.65vw] mb-[.65vw] cursor-pointer hover:scale-110 transition duration-500 ease"
					src="/assets/twitter.svg"
					alt="twitter"
				/>
				<img
					className="w-[1.75vw] mt-[.65vw] mb-[.65vw] cursor-pointer hover:scale-110 transition duration-500 ease"
					src="/assets/instagram.svg"
					alt="instagram"
				/>
			</div>
			<div className="absolute left-[20vw] top-[17.75vw] hidden lg:flex flex-col items-center justify-center">
				<h2 className="text-[1vw] text-[#C7C7C780]">| Home</h2>
			</div>
		</div>
	);
};

export default HomePage;
