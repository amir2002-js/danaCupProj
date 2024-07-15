import { useState } from "react";
import ShowSC from "../showSmallCopm/ShowSC";
import HeadCough from "../headCough/HeadCough";

export default function BestPublishers() {
	const [bsetPublisherData, setTopWritersData] = useState([
		{
			name: "نشر جنگل",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/bp.png",
			greenTheme: true,
		},
		{
			name: "نشر جنگل",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/bp.png",
			greenTheme: true,
		},
		{
			name: "نشر جنگل",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/bp.png",
			greenTheme: true,
		},
		{
			name: "نشر جنگل",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/bp.png",
			greenTheme: true,
		},
		{
			name: "نشر جنگل",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/bp.png",
			greenTheme: true,
		},
		{
			name: "نشر جنگل",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/bp.png",
			greenTheme: true,
		},
		{
			name: "نشر جنگل",
			cap: "۲۰ اثر ترجمه‌شده",
			img: "../../images/bp.png",
			greenTheme: true,
		},
	]);
	return (
		<div className="">
			<HeadCough title={"برترین ناشران"} />
			<div className="flex justify-evenly items-center flex-wrap gap-2 gap-y-5">
				{bsetPublisherData.map((publisher, index) => (
					<ShowSC
						name={publisher.name}
						cap={publisher.cap}
						key={index}
						urlImg={publisher.img}
						theme={publisher.greenTheme}
					/>
				))}
			</div>
		</div>
	);
}
