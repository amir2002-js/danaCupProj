import { useState } from "react";

export default function Book() {
	const [dataBook, setDataBook] = useState([
		{
			url: "../../src/images/ev4.png",
			description: "تنوعی بی‌نظیر از بهترین رمان‌های فانتزی جهان",
			caption: "یه فانتزی جدید، یه دنیای جدید",
			id: 1,
			themeBg: "bg-blue-200",
			themetxt: "text-blue-800",
			themecap: "text-blue-400",
		},
		{
			url: "../../src/images/ev5.png",
			description: "تنوعی بی‌نظیر از بهترین رمان‌های فانتزی جهان",
			caption: "سری به دنیای‌ حماسه‌ها بزن",
			id: 2,
			themeBg: "bg-orange-200",
			themetxt: "text-orange-800",
			themecap: "text-orange-400",
		},
	]);
	return (
		<div className="flex flex-wrap gap-5 justify-evenly items-center mt-14 mb-10">
			{dataBook.map((b) => (
				<div
					className={`rounded-lg ${b.themeBg} flex justify-evenly items-center p-5 shadow-[0_0_10px_gray] dark:shadow-[0_0_10px_black] `}
					key={b.id}
				>
					<img src={b.url} alt="" />
					<div className="flex flex-col justify-center items-start gap-7">
						<div className="flex flex-col justify-center items-start gap-1">
							<h1 className={`${b.themetxt}`}>{b.caption}</h1>
							<p className={`${b.themecap}`}>{b.description}</p>
						</div>
						<button className="bg-white dark:bg-teal-700 dark:text-slate-200 rounded-lg hover:shadow-[0_0_10px_gray] hover:dark:shadow-[0_0_10px_black] py-1 px-10">
							مشاهده
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
