import { BestSellerBooks } from "./Best Seller/BestSellerBooks";
import CarouselComponents from "./Carousel/CarouselComponents";
import { DisCountBox } from "./DisCountBox/DisCountBox";
import Duty from "./DutyOfSite/Duty";
import Events from "./Events/Events";
import { Nav } from "./Navbar/Nav";
import PublishersBox from "./Publisher/PublishersBox";

export const Home = () => {
	return (
		<>
			{/* navbar */}
			<nav className="border-b fixed top-0 w-full bg-white dark:bg-slate-800 border-slate-300 py-3 z-10">
				<Nav />
			</nav>
			<div className="bg-slate-100 dark:bg-slate-900 py-5 mt-[138px]">
				<div className=" container max-w-maxWidth">
					<CarouselComponents />
					<DisCountBox />
					<Duty />
					<BestSellerBooks />
					<PublishersBox />
					<Events />
				</div>
			</div>
		</>
	);
};
