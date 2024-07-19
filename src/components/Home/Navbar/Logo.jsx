export default function Logo({hide}) {
	return (
		<>
			<button className="flex gap-2 justify-center items-center">
				<img src="../../images/logo.png" alt="" />
				<div className={`md:block text-right ${hide? "hidden" : ""}`}>
					<h1 className="font-danabold">کتابخونه</h1>
					<p className="font-danalight text-[15px] whitespace-nowrap">
						فروشگاه آنلاین کتاب
					</p>
				</div>
			</button>
		</>
	);
}
