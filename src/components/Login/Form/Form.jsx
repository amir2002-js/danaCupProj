import CodeInp from "./CodeInp";
import EnterNum from "./EnterNum";
import { useState } from "react";

export default function Form({ notValAlert, setAlert , spiner , setSpiner }) {
	const [validation, setValidation] = useState(false);
	const [inpVla, setInpVal] = useState(0);
	const [checknum, setCheckNum] = useState(false);

	const changeVal = (val) => {
		setInpVal(val);
	};

	return (
		<div className="flex flex-col justify-center items-stretch gap-4 w-[250px]">
			<p className={`${!checknum? "" : "text-xs"}`}>
				{!checknum? "تلفن همراه" : `کدی که به شماره ${inpVla} ارسال شد وارد کنید`} 


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
					<CodeInp spiner={spiner} setSpiner={setSpiner}/>
				</div>
				<button
					className="bg-teal-600 hover:bg-teal-700 text-white py-1.5 mt-6 rounded-lg shadow shadow-black/70"
					onClick={() => {
						if (!validation) {
							setAlert(false);
						} else {
							setCheckNum(true);
						}
					}}
				>
					ورود
				</button>
			</div>
		</div>
	);
}
