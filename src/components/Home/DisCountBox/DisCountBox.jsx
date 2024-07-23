import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { BooksBox } from "./BooksBox";
import HeadCough from "../headCough/HeadCough";

export const DisCountBox = () => {
	const listBooks = [
		{
			title: "معجزه‌های خواربار فروشی نامیا",
			disCountedPrice: "210000 تومان",
			price: "260000 تومان",
			urlBook: "../../src/images/disCount1.png",
			id: 1000,
		},
		{
			title: "تاریخ فشرده‌ی اروپا ",
			disCountedPrice: "150000 تومان",
			price: "200000 تومان",
			urlBook: "../../src/images/disCount2.png",
			id: 1001,
		},
		{
			title: "امپراطوری",
			disCountedPrice: "300000 تومان",
			price: "350000 تومان",
			urlBook: "../../src/images/disCount3.png",
			id: 1002,
		},
		{
			title: "شازده کوچولو",
			disCountedPrice: "70000 تومان",
			price: "90000 تومان",
			urlBook: "../../src/images/disCount4.png",
			id: 1003,
		},
		{
			title: "فلسفه تحلیلی و نظریه شناخت در فلسفه اسلامی",
			disCountedPrice: "318000 تومان",
			price: "455000 تومان",
			urlBook: "../../src/images/disCount5.png",
			id: 1004,
		},
	];
	return (
		<div className="py-10">
			<HeadCough title={"تخفیفات شگفت انگیز"} />
			<BooksBox listBooks={listBooks} />
		</div>
	);
};
