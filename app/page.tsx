import AboutPage from "./sections/AboutSection";
import Footer from "./sections/FooterSection";
import HomePage from "./sections/HomeSection";
import InsightPage from "./sections/InsightSection";
import MapPage from "./sections/MapSection";
import NewsPage from "./sections/NewsSection";
import ReviewPage from "./sections/ReviewSection";
import WorldPage from "./sections/WorldSection";

export default function Home() {
	return (
		<main className="w-full h-full flex flex-col overflow-x-hidden bg-[#1b2430]">
			<HomePage />
			<AboutPage />
			<WorldPage />
			<NewsPage />
			<MapPage />
			<InsightPage />
			<ReviewPage />
			<Footer />
		</main>
	);
}
