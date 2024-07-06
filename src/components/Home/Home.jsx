import CarouselComponents from "./Carousel/CarouselComponents";
import { Nav } from "./Navbar/Nav";

export const Home = () => {
	return (
		<>
			{/* navbar */}
			<nav className="border-b border-slate-300 py-3 z-10">
				<Nav />
			</nav>
			<div className="bg-slate-100 py-5">
				<div className=" container max-w-maxWidth">
					<CarouselComponents/>
				</div>
			</div>
		</>
	);
};
