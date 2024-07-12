import { LuShield } from "react-icons/lu";

export default function Duty() {
	const dutis = [
		{
			caption: "امنیت پرداخت",
			figCaption: "پرداخت مطمئن با تمامی کارت‌های عضو شتاب",
			id: 1,
		},
		{
			caption: "تضمین بهترین قیمت",
			figCaption: "مناسب‌ترین قیمت کتاب در تمامی فروشگاه‌ها",
			id: 2,
		},
		{
			caption: "ضمانت اصالت کالا",
			figCaption: "تمامی کالاها دارای ضمانت اصالت می‌باشند",
			id: 3,
		},
		{
			caption: "ارسال اکسپرس",
			figCaption: "سریع‌ترین ارسال کالا به سراسر کشور",
			id: 4,
		},
	];
	return (
		<div className="grid md:grid-cols-4 grid-cols-2 gap-3 justify-between items-center">
			{dutis.map((duty) => (
				<div className="flex flex-wrap dark:shadow-white/10 dark:shadow-md items-center lg:gap-5 md:gap-2.5 px-2 justify-start gap-1 bg-white dark:bg-slate-700 rounded-2xl w-full py-4 shadow" key={duty.id}>
					<div className="">
                        <span className="bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 w-8 h-8">
						<LuShield className="text-xl" />
                        </span>
					</div>
					<div className="flex flex-col items-start dark:text-slate-100">
						<caption>{duty.caption}</caption>
						<figcaption className="font-dana text-[8px] whitespace-nowrap">{duty.figCaption}</figcaption>
					</div>
				</div>
			))}
		</div>
	);
}
