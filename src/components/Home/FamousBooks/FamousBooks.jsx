import { BooksBox } from "../DisCountBox/BooksBox";
import HeadCough from "../headCough/HeadCough";

export default function FamousBooks() {
	const listBooks = [
		{
			title: "بزرگراه لینکن",
			disCountedPrice: "210000 تومان",
			price: "260000 تومان",
			urlBook: "../../images/publisher1.png",
			id: 1000,
		},
		{
			title: "نگذار بماند",
			disCountedPrice: "150000 تومان",
			price: "200000 تومان",
			urlBook: "../../images/publisher2.png",
			id: 1001,
		},
		{
			title: "معجزه‌گر خاموش",
			disCountedPrice: "300000 تومان",
			price: "350000 تومان",
			urlBook: "../../images/publisher3.png",
			id: 1002,
		},
		{
			title: "همسایه‌ی فضایی: فضایی‌ها برای حمله می آیند؟",
			disCountedPrice: "70000 تومان",
			price: "90000 تومان",
			urlBook: "../../images/publisher4.png",
			id: 1003,
		},
		{
			title: "همسایه‌ی فضایی: تازه وارد",
			disCountedPrice: "318000 تومان",
			price: "455000 تومان",
			urlBook: "../../images/publisher5.png",
			id: 1004,
		},
	];
	return (
		<div className="my-10">
			<HeadCough title={"معروف ترین کتاب ها"} />
			<BooksBox listBooks={listBooks} />
		</div>
	);
}
