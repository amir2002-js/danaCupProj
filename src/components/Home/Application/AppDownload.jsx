export default function AppDownload({ url, title, description }) {
	return (
		<div className="bg-white flex py-2 rounded-xl gap-4 justify-evenly items-center min-w-48">
			<div className="flex flex-col gap-2">
				<h1 className="font-danablack text-sm">{title}</h1>
				<p className="text-xs font-danalight text-slate-300">
					{description}
				</p>
			</div>

			<img src={url} alt="" className="max-w-[35px] max-h-[34px]" />
		</div>
	);
}
