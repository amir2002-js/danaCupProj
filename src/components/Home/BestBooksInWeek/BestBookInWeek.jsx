export default function BestBookInWeek({ url , title , price , type }) {
	return (
		<div>
			<div className="flex justify-between items-center gap-3 mx-auto p-5 md:p-10 shadow-[0_0_10px_gray] dark:shadow-[0_0_15px_black] rounded-3xl">
				<img src={url} alt="" />
                <div className="flex flex-col gap-5">
                    {/* title */}
                    <h1 className="font-danablack dark:text-slate-200">{title}</h1>

                    {/* type */}
                    <p className="text-slate-500 dark:text-slate-400">{type}</p>

                    {/* price */}
                    <p className="font-peydabold text-teal-600">{price}</p>
                </div>
			</div>
		</div>
	);
}
