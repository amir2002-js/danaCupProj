import { LuStar } from "react-icons/lu";

export const BooksBox = ({ listBooks }) => {
	return (
		<div className="flex flex-wrap md:justify-between justify-around items-center gap-4">
			{listBooks.map((book) => (
				<div
					className="max-w-[220px] \ border-x my-2 border-slate-300 px-2 flex flex-col gap-4 gap-y-8" 
					key={book.id}
				>
					{/* image */}
					<div className="">
						<img src={book.urlBook} alt="" />
					</div>
					{/* information */}
					<div className="flex flex-col gap-5">
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
								<p className="font-peydamd whitespace-nowrap">
									{book.disCountedPrice}
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
