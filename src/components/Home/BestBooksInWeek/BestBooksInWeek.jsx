import { useState } from "react";
import HeadCough from "../headCough/HeadCough";
import BestBookInWeek from "./BestBookInWeek";

export default function BestBooksInWeek() {
	const [dataInbbiw, setDataInbbiw] = useState([
		{
			imgUrl: "../../src/images/bbiw.png",
			title: "بزرگراه لینکن",
			price: "۳۶۸،۰۰۰ تومان",
			type: "رمان خارجی / امور تولز",
			id: 1,
		},
		{
			imgUrl: "../../src/images/bbiw.png",
			title: "بزرگراه لینکن",
			price: "۳۶۸،۰۰۰ تومان",
			type: "رمان خارجی / امور تولز",
			id: 2,
		},
		{
			imgUrl: "../../src/images/bbiw.png",
			title: "بزرگراه لینکن",
			price: "۳۶۸،۰۰۰ تومان",
			type: "رمان خارجی / امور تولز",
			id: 3,
		},
		{
			imgUrl: "../../src/images/bbiw.png",
			title: "بزرگراه لینکن",
			price: "۳۶۸،۰۰۰ تومان",
			type: "رمان خارجی / امور تولز",
			id: 4,
		},
		{
			imgUrl: "../../src/images/bbiw.png",
			title: "بزرگراه لینکن",
			price: "۳۶۸،۰۰۰ تومان",
			type: "رمان خارجی / امور تولز",
			id: 5,
		},
		{
			imgUrl: "../../src/images/bbiw.png",
			title: "بزرگراه لینکن",
			price: "۳۶۸،۰۰۰ تومان",
			type: "رمان خارجی / امور تولز",
			id: 6,
		},
	]);
	return (
		<div>
			<HeadCough title={"برترین کتابهای هفته"} />
			<div className="flex flex-wrap items-center justify-center my-5 gap-3 ">
				{dataInbbiw.map((book) => (
					<BestBookInWeek
						url={book.imgUrl}
						title={book.title}
						price={book.price}
						type={book.type}
						key={book.id}
					/>
				))}
			</div>
		</div>
	);
}
