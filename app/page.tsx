import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import InsightPage from "./components/InsightPage";
import MapPage from "./components/MapPage";
import NewsPage from "./components/NewsPage";
import ReviewPage from "./components/ReviewPage";
import WorldPage from "./components/WorldPage";

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
