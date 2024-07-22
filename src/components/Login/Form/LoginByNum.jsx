import CodeInp from "./CodeInp";
import EnterNum from "./EnterNum";

export default function LoginByNum({
	validation,
	setValidation,
	spiner,
	setSpiner,
	inpVla,
	checknum,
	changeVal,
	setAlert,
	setCheckNum,
}) {
	return (
		<>
			<p className={`${!checknum ? "" : "text-xs"} text-center`}>
				{!checknum
					? "تلفن همراه"
					: `کدی که به شماره ${inpVla} ارسال شد وارد کنید`}
			</p>
			<div className="flex flex-col gap-9">
				<EnterNum
					validation={validation}
					setValidation={setValidation}
					inpVla={inpVla}
					changeVal={changeVal}
					checknum={checknum}
				/>
				<div className={`${checknum ? "" : "hidden"}`}>
					<CodeInp spiner={spiner} setSpiner={setSpiner} />
				</div>
				<button
					className="bg-teal-600 hover:bg-teal-700 text-white py-1.5 mt-6 rounded-lg shadow shadow-black/70"
					onClick={() => {
						if (!validation) {
							// به کاربر پیام میدهد که شماره اشتباهه
							setAlert(false);
						} else {
							setCheckNum(true);
						}
					}}
				>
					ورود
				</button>
			</div>
		</>
	);
}
