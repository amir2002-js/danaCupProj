export default function TopWriter({ urlImg, name, cap }) {
	return (
		<div className="bg-white dark:bg-slate-700 shadow-[0_0_10px_gray] dark:shadow-[0_0_10px_black] rounded-xl flex flex-col justify-center items-center gap-3 p-5">
			<img src={urlImg} alt=""  className="shadow-[0_0_10px_gray] dark:shadow-[0_0_10px_black] rounded-full"/>
			<figure className="text-teal-600 font-danabold">{name}</figure>
			<figcaption className="text-slate-600 font-danalight dark:text-slate-300">
				{cap}
			</figcaption>
		</div>
	);
}
