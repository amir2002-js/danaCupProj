import { LuShoppingBag } from "react-icons/lu";

export default function BestSellerBook() {
	const dataSeller = [
		{
			title: "ارباب حلقه‌ها: یاران حلقه",
			description:
				"یاران حلقه‌، اولین جلد از سه‌گانۀ حماسی ارباب حلقه‌ها، اثر نویسندۀ انگلیسی جی‌.‌آر.آر تالکین است. جلد دوم این کتاب با نام «دو برج» در سال 1954 و جلد سوم آن با نام «بازگشت شاه» در سال 1955 منتشر شد. داستان این سه‌گانه در دنیای خیالی سرزمین میانه می‌گذرد و راوی اتحاد، تلاش‌ها و مبارزات خستگی‌ناپذیر موجودات خیالی در نبرد با اهریمن (سائورون) است.",
			price: "۳۰۰۰۰۰ تومان",
			type: "رمان خارجی",
			auther: "جرج آر آر تالکین",
			tarnslate: "رضا علیزاده",
			id: 1,
			url: "../../images/bstSeller1.png",
		},
		{
			title: "افسون خارها",
			description:
				"تمام افسونگران وجودی شیطانی دارند. این جزو اولین چیزهایی بود که الیزابت فراگرفت. الیزابت، بچه‌ای سرراهی که در یکی از کتابخانه‌های بزرگ آسترمیر پذیرفته شده؛ مابین ابزار جادوگری و کتاب‌های افسونی که در قفسه‌ها به زمزمه می‌پردازند و در زیر زنجیرهای آهنی تکان می‌خورند، بزرگ شده است. کتاب‌هایی که در صورت آسیب دیدن، به هیولاهایی بزرگ و خطرناک از جوهر و چرم تبدیل می‌گردند.",
			price: "200000 تومان",
			type: "رمان خارجی",
			auther: "مارگارت راجرسون",
			tarnslate: "اطلس خرامانی",
			id: 2,
			url: "../../images/bstSeller2.png",
		},
	];
	return (
		<div className="flex *:flex-grow gap-5">
			{dataSeller.map((book) => (
				<div
					className="flex container max-w-[584px] gap-4 bg-white rounded-3xl dark:bg-slate-700 dark:text-white/20 py-5 items-center justify-between"
					key={book.id}
				>
					<div className=" flex ">
						<img src={book.url} className="w-[178px]" alt="" />
					</div>

					{/* information */}
					<div className="flex flex-col gap-6 text-sm container dark:text-slate-100 w-[300px]">
						{/* title */}
						<p className="font-danabold ">{book.title}</p>

						{/* info about book writer */}
						<div className="flex items-center justify-evenly ">
							{/* type */}
							<div className="flex flex-col items-center justify-center">
								<p className="font-danalight text-slate-400">
									دسته بندی
								</p>
								<figcaption>{book.type}</figcaption>
							</div>

							<div className="h-full w-[2px] bg-slate-300"></div>

							{/* writer */}
							<div className="flex flex-col items-center justify-center">
								<p className="font-danalight text-slate-400">
									نویسنده
								</p>
								<figcaption>{book.auther}</figcaption>
							</div>

							<div className="h-full w-[2px] bg-slate-300"></div>

							{/* tarnslate */}
							<div className="flex flex-col items-center justify-center">
								<p className="font-danalight text-slate-400">
									مترجم
								</p>
								<figcaption>{book.tarnslate}</figcaption>
							</div>
						</div>

						{/* description */}
						<p className="font-danalight text-[10px] text-center text-wrap container">
							{book.description}
						</p>

						{/* sell */}
						<div className="flex items-center justify-between">
							<p>{book.price}</p>
							<button className="flex shadow gap-3 bg-teal-600 rounded-lg text-white px-4 py-2 items-center justify-center">
								<p>خرید</p>
								<LuShoppingBag />
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
