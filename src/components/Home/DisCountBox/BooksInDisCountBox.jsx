import { LuStar } from "react-icons/lu";

export const BooksInDisCountBox = () => {
	const listBooks = [
		{
			title: "معجزه‌های خواربار فروشی نامیا",
			disCountedPrice: "210000 تومان",
			price: "260000 تومان",
			urlBook: "../../images/disCount1.png",
			id: 1000,
		},
		{
			title: "تاریخ فشرده‌ی اروپا ",
			disCountedPrice: "150000 تومان",
			price: "200000 تومان",
			urlBook: "../../images/disCount2.png",
			id: 1001,
		},
		{
			title: "امپراطوری",
			disCountedPrice: "300000 تومان",
			price: "350000 تومان",
			urlBook: "../../images/disCount3.png",
			id: 1002,
		},
		{
			title: "شازده کوچولو",
			disCountedPrice: "70000 تومان",
			price: "90000 تومان",
			urlBook: "../../images/disCount4.png",
			id: 1003,
		},
		{
			title: "فلسفه تحلیلی و نظریه شناخت در فلسفه اسلامی",
			disCountedPrice: "318000 تومان",
			price: "455000 تومان",
			urlBook: "../../images/disCount5.png",
			id: 1004,
		},
	];
	return (
		<div className="flex justify-between items-center py-4">
			{listBooks.map((book) => (
				<div
					className="max-w-[220px] border-x border-slate-300 px-2 flex flex-col gap-3"
					key={book.id}
				>
                    {/* image */}
					<div className="">
						<img src={book.urlBook} alt="" />
					</div>
                    {/* information */}
					<div className="flex flex-col gap-2">
						<div className="font-danabold truncate text-ellipsis overflow-hidden whitespace-nowrap dark:text-slate-200">
							{book.title}
						</div>
                        {/* rank & price */}
						<div className="flex justify-between items-center">
							{/* rank */}
							<div className="">
								<span className="text-orange-500 bg-orange-200 flex rounded-full text-[10px] font-peydalight p-1">
									<LuStar />
									<span>4.5</span>
								</span>
							</div>
							{/* prices */}
							<div className="flex flex-col justify-center items-center text-teal-600">
								<figcaption className="text-sm font-peydalight line-through text-slate-400">
									{book.price}
								</figcaption>
								<caption className="font-peydamd whitespace-nowrap">
									{book.disCountedPrice}
								</caption>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
