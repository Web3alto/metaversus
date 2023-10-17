import React from "react";

const MapPage = () => {
	return (
		<div className="w-full h-fit flex flex-col items-center justify-center relative pt-[20vw] lg:pt-[10vw]">
			<h1 className="w-5/6 lg:w-2/4 text-center text-[11vw] sm:text-[8.5vw] lg:text-[3.4vw] text-white font-bold leading-[14.5vw] sm:leading-[10vw] lg:leading-[4.25vw] pb-[1.5vw] relative">
				<div className="absolute left-[27.5vw] lg:left-[19.75vw] top-[-12.5vw] lg:top-[-4vw] flex flex-col items-start justify-center">
					<h2 className="text-[3vw] lg:text-[1vw] text-[#C7C7C780]">
						| People on the World
					</h2>
				</div>
				Track friends around you and invite them to play together in the
				same world
			</h1>
			<img
				className="w-[280vw] sm:w-[150vw] lg:w-[80vw] max-w-none mt-[5vw] lg-mt-0"
				src="/assets/map.png"
				alt="map"
			/>
			<img
				className="absolute left-0 bottom-[-40vw] blur-[10vw] w-[85vw] h-[80vw]"
				src="/assets/light-map.svg"
				alt="light-map"
			/>
		</div>
	);
};

export default MapPage;
