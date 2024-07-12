import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { BooksBox } from "./BooksBox";

export const DisCountBox = () => {
	const listBooks = [
		{
			title: "معجزه‌های خواربار فروشی نامیا",
			disCountedPrice: "210000 تومان",
			price: "260000 تومان",
			urlBook: "../../images/disCount1.png",
			id: 1000,
		},
		{
			title: "تاریخ فشرده‌ی اروپا ",
			disCountedPrice: "150000 تومان",
			price: "200000 تومان",
			urlBook: "../../images/disCount2.png",
			id: 1001,
		},
		{
			title: "امپراطوری",
			disCountedPrice: "300000 تومان",
			price: "350000 تومان",
			urlBook: "../../images/disCount3.png",
			id: 1002,
		},
		{
			title: "شازده کوچولو",
			disCountedPrice: "70000 تومان",
			price: "90000 تومان",
			urlBook: "../../images/disCount4.png",
			id: 1003,
		},
		{
			title: "فلسفه تحلیلی و نظریه شناخت در فلسفه اسلامی",
			disCountedPrice: "318000 تومان",
			price: "455000 تومان",
			urlBook: "../../images/disCount5.png",
			id: 1004,
		},
	];
	return (
		<div className="py-10">
			<div className="flex justify-between">
				<div className="">
					<p className="dark:text-slate-300 font-danabold">
						تخفیفات شگفت انگیز
					</p>
				</div>
				<div className="flex gap-3">
					<button className="border-[2px] dark:text-slate-400 dark:hover:text-white text-slate-400 hover:border-slate-600 hover:text-slate-700 dark:border-slate-400 dark:hover:border-white border-slate-300 p-1 rounded-md">
						<LuChevronRight />
					</button>
					<button className="border-[2px] dark:text-slate-400 dark:hover:text-white text-slate-400 hover:border-slate-600 hover:text-slate-700 dark:border-slate-400 dark:hover:border-white border-slate-300 p-1 rounded-md">
						<LuChevronLeft />
					</button>
				</div>
			</div>
			<BooksBox listBooks={listBooks} />
		</div>
	);
};
