import { useState } from "react";
import TopWriter from "./TopWriter";
import HeadCough from "../headCough/HeadCough";

export default function TopWriters() {
	const [topWritersData, setTopWritersData] = useState([
		{
			name: "آگاتا کریستی",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/Ellipse 1951.png",
		},
		{
			name: "برندون سندرسون",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/Ellipse 1952.png",
		},
		{
			name: "جی کی رولینگ",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/Ellipse 1953.png",
		},
		{
			name: "جی آر آر تالکین",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/Ellipse 1954.png",
		},
		{
			name: "نیل گیمن",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/Ellipse 1955.png",
		},
		{
			name: "جرج مارتین",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/Ellipse 1956.png",
		},
		{
			name: "پاتریک راتفاس",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/Ellipse 1957.png",
		},
	]);
	return (
		<div className="my-10">
			<HeadCough title={"بهترین نویسندگان"} />
			<div className="flex flex-wrap justify-evenly items-center gap-y-6 my-4">
				{topWritersData.map((writer, index) => (
					<TopWriter
						urlImg={writer.img}
						name={writer.name}
						cap={writer.cap}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}
