import { useState } from "react";

export default function Event() {
	const [evData, setEvData] = useState([
		{
			imgUrl: "../../images/ev1.png",
			title: "مجموعه رمان‌های مه‌زاد",
			caption: "یک فانتزی تمام عیار",
			id: 1,
			bg: "bg-blue-200",
			text_title: "text-blue-800",
			text_cap: "text-blue-400",
		},
		{
			imgUrl: "../../images/ev2.png",
			title: "مجموعه رمان‌های ویچر",
			caption: "حماسه‌ی گرالت از ریویا",
			id: 2,
			bg: "bg-teal-200",
			text_title: "text-teal-800",
			text_cap: "text-teal-500",
		},
		{
			imgUrl: "../../images/ev3.png",
			title: "مجموعه رمان‌های مه‌زاد",
			caption: "یک فانتزی تمام عیار",
			id: 3,
			bg: "bg-orange-200",
			text_title: "text-orange-800",
			text_cap: "text-orange-400",
		},
	]);
	return (
		<div className="flex justify-between items-center gap-9 flex-wrap *:flex-grow my-10">
			{evData.map((e) => (
				<div
					className={`flex flex-col  min-w-72 justify-center items-center ${e.bg} rounded-lg py-5`}
					key={e.id}
				>
					{/* img */}
					<div className="">
						<img src={e.imgUrl} alt="" />
					</div>
					{/* title & caption */}
					<div className="flex flex-col justify-center items-center gap-2 -mt-10">
						{/* title */}
						<div className={`font-danabold ${e.text_title}`}>
							<p>{e.title}</p>
						</div>

						{/* caption */}
						<div className={`font-danalight ${e.text_cap}`}>
							<p>{e.caption}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
