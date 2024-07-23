export default function WeekWriter() {
	return (
		<div className="bg-white dark:text-white/80 dark:bg-slate-700 shadow-[0_0_10px_gray] dark:shadow-[0_0_10px_black]  grid lg:grid-cols-2 max-lg:gap-5 grid-cols-1 rounded-xl p-4 shadow-slate-400 justify-between items-center">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center justify-items-center justify-center">
				<img src="../../src/images/writer.png" alt="" />
				<div className="flex flex-col gap-3 max-sm:text-center">
					<h1 className="font-danabold text-red-600">
						نویسنده برتر هفته
					</h1>
					<div className="flex divide-x-2 justify-start items-center  ">
						<p>Brandon Sanderson</p>
						<p>برندون سندرسون</p>
					</div>
					<figcaption className="text-slate-700 dark:text-slate-400 text-sm">
						برندن سَندرسون نویسنده اهل آمریکا است. او بیشتر به
						خاطر سری مه زاد و دست داشتن برای به اتمام رساندن
						کتاب خیال‌پردازی حماسی چرخ زمان، نوشته رابرت جوردن بعد
						از مرگ وی، شناخته شده‌است. در اوت سال ۲۰۱۰، ساندرسون
						اولین قسمت از مجموعه کتاب‌های ده‌گانه استورم‌لایت
						آرکایو، با نام طریق شاهان را منتشر کرد.
					</figcaption>
					<button className="bg-teal-600 rounded-lg text-slate-100 w-60 py-1.5 max-sm:mx-auto hover:bg-teal-700 shadow-md">
						بیشتر
					</button>
				</div>
			</div>

			<div className="grid grid-cols-3 justify-items-center gap-4 items-stretch">
				<img
					src="../../src/images/book1-bestWriterInWeak.png"
					width={"190px"}
				/>
				<img
					src="../../src/images/book2-bestWriterInWeak.png"
					width={"190px"}
				/>
				<img
					src="../../src/images/book3-bestWriterInWeak.png"
					width={"190px"}
				/>
			</div>
		</div>
	);
}
