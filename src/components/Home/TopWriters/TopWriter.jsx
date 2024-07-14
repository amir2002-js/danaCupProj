export default function TopWriter({ urlImg, name, cap }) {
	return (
		<div className="bg-white shadow shadow-slate-500 rounded-xl flex flex-col justify-center items-center gap-3 p-5">
			<img src={urlImg} alt="" />
			<figure className="text-teal-600 font-danabold">{name}</figure>
			<figcaption className="text-slate-600 font-danalight">
				{cap}
			</figcaption>
		</div>
	);
}
