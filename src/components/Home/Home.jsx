import ApplicationComp from "./Application/ApplicationComp";
import { BestSellerBooks } from "./Best Seller/BestSellerBooks";
import BestBooksInWeek from "./BestBooksInWeek/BestBooksInWeek";
import BestPublishers from "./bestPublisher/BestPublishers";
import CarouselComponents from "./Carousel/CarouselComponents";
import { DisCountBox } from "./DisCountBox/DisCountBox";
import Duty from "./DutyOfSite/Duty";
import Events from "./Events/Events";
import NextEvents from "./Events2/NextEvents";
import FamousBooks from "./FamousBooks/FamousBooks";
import Footer from "./Footer/Footer";
import Grouping from "./Grouping/Grouping";
import PublishersBox from "./Publisher/PublishersBox";
import TopWriters from "./TopWriters/TopWriters";
import WeekWriter from "./WeekWriter/WeekWriter";

export const Home = () => {
	return (
		<>
			<div className="bg-slate-100 dark:bg-slate-900 pt-5 mt-[146px] sm:mt-[98px] md:mt-[138px]">
				<div className=" container max-w-maxWidth">
					<CarouselComponents />
					<DisCountBox />
					<Duty />
					<BestSellerBooks />
					<PublishersBox />
					<Events />
					<FamousBooks />
					<Grouping />
					<WeekWriter />
					<TopWriters />
					<BestBooksInWeek />
					<NextEvents />
					<BestPublishers />
					<ApplicationComp />
				</div>
				<Footer />
			</div>
		</>
	);
};
