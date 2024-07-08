import CarouselComponents from "./Carousel/CarouselComponents";
import { DisCountBox } from "./DisCountBox/DisCountBox";
import { Nav } from "./Navbar/Nav";

export const Home = () => {
	return (
		<>
			{/* navbar */}
			<nav className="border-b dark:bg-slate-800 border-slate-300 py-3 z-10">
				<Nav />
			</nav>
			<div className="bg-slate-100 dark:bg-slate-900 py-5">
				<div className=" container max-w-maxWidth">
					<CarouselComponents/>
					<DisCountBox/>
				</div>
			</div>
		</>
	);
};
