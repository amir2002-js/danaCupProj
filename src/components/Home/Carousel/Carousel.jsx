import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Carousel() {
	return (
		<div className="hidden  relative h-full bg-emerald-700 rounded-xl lg:flex flex-col justify-center items-center min-h-[360px] max-w-[250px] flex-grow gap-4 shadow-[2px_2px_10px_rgba(0,0,0,0.8)]">
			<p className="font-danalight text-amber-400 text-sm">فروش ویژه</p>
			<div className="flex justify-center items-center flex-col">
				<img
					src="../../images/Hardcover.png"
					className="h-[140px]"
					alt=""
				/>
				<div className="flex flex-col justify-center items-center text-white gap-3">
					<h1 className="font-danabold text-sm ">
						سرگذشت شاهکش : نام راستین باد
					</h1>
					<p className="font-danalight  text-sm">
						حماسه‌ی کوات ؛ جادوگر بدنام
					</p>
					<div className="flex justify-between items-center w-full">
						<span className="bg-red-600 rounded-full text-[11px] p-1">
							45%
						</span>
						<div className="flex flex-col">
							<figcaption className="font-peydalight text-sm text-white/40">
								300000 تومان
							</figcaption>
							<p className="text-sm font-peydalight">
								175000 تومان
							</p>
						</div>
					</div>
					<div className="h-[2px] rounded  w-full bg-slate-50 flex items-start flex-row-reverse">
						<span className="w-[60%] h-full bg-yellow-500"></span>
					</div>
				</div>
			</div>
			<button className="w-10 h-10 absolute  text-slate-400 hover:text-slate-500 top-auto bottom-auto my-auto -right-5 bg-white border border-x-slate-200 rounded-[50%] flex justify-center items-center">
				<LuChevronRight className="text-xl" />
			</button>

			<button className="w-10 h-10 absolute text-slate-400 hover:text-slate-500  top-auto bottom-auto my-auto -left-5 bg-white border border-x-slate-200  rounded-[50%] flex justify-center items-center">
				<LuChevronLeft className="text-xl" />
			</button>
		</div>
	);
}
