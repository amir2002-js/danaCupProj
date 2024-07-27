export default function EnterNum({
	validation,
	setValidation,
	inpVla,
	changeVal,
	checknum,
}) {
	return (
		<div className={`relative ${checknum ? "hidden" : ""}`}>
			<input
				type="number"
				name=""
				id=""
				className=" no-spinner font-peydamd w-full bg-gray-100 rounded-lg outline-none border border-gray-300 px-3 py-1.5 shadow shadow-black/20"
				onChange={(e) => {
					changeVal(e.target.value);
					let number = inpVla;
					if (e.target.value.length > 11) {
						number = number.substring(0, 11);
						changeVal(number);
						e.target.value = number;
						if (number.substring(0, 2) == "09") {
							setValidation(true);
						} else {
							setValidation(false);
						}
					} else if (e.target.value.length == 11) {
						if (number.substring(0, 2) == "09") {
							setValidation(true);
						} else {
							setValidation(false);
						}
					} else {
						setValidation(false);
					}
				}}
			/>
			<p
				className={`font-danabold absolute mt-2 text-sm ${
					validation ? "text-teal-700 block" : "text-red-600 block"
				}`}
			>
				{validation ? "*شماره معتبر است" : "*شماره معتبر نیست...."}
			</p>
		</div>
	);
}
