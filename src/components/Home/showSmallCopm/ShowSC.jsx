export default function ShowSC({ urlImg, name, cap, theme }) {
	return (
		<div className="bg-white dark:bg-slate-700 shadow-[0_0_10px_gray] dark:shadow-[0_0_10px_black] rounded-xl flex flex-col justify-center items-center gap-3 p-5">
			<img
				src={urlImg}
				alt=""
				className={`${
					theme
						? "bg-teal-200 p-3 rounded-xl"
						: "rounded-full shadow-[0_0_10px_gray] dark:shadow-[0_0_10px_black]"
				}`}
			/>
			<figure className="text-teal-600 font-danabold">{name}</figure>
			<figcaption className="text-slate-600 font-danalight dark:text-slate-300">
				{cap}
			</figcaption>
		</div>
	);
}
