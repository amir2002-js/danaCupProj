import CodeInp from "./CodeInp";
import EnterNum from "./EnterNum";
import { useState } from "react";
import LoginByNum from "./LoginByNum";

export default function Form({ setAlert, spiner, setSpiner }) {
	const [validation, setValidation] = useState(false);
	const [inpVla, setInpVal] = useState(0);
	const [checknum, setCheckNum] = useState(false);
	const [loginByNumber, setLoginByNumber] = useState(true);

	const changeVal = (val) => {
		setInpVal(val);
	};

	return (
		<div className="flex flex-col justify-center items-stretch gap-4 w-[250px]">
			<p className={`${!checknum ? "" : "text-xs"}`}>
				{!checknum
					? "تلفن همراه"
					: `کدی که به شماره ${inpVla} ارسال شد وارد کنید`}
			</p>
			<LoginByNum
				validation={validation}
				setValidation={setValidation}
				spiner={spiner}
				setSpiner={setSpiner}
				inpVla={inpVla}
				checknum={checknum}
				changeVal={changeVal}
				setAlert={setAlert}
				setCheckNum={setCheckNum}
			/>
			<button
				className={`text-blue-500 hover:text-purple-500 font-peydalight ${
					!checknum ? "" : "hidden"
				}`}
			>
				{loginByNumber ? "لاگین با ایمیل" : "لاگین با شماره تلفن"}
			</button>
		</div>
	);
}
