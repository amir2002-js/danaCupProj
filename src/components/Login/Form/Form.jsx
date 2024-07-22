import { useState } from "react";
import LoginByNum from "./LoginByNum";
import LoginByEmail from "./LoginByEmail";

export default function Form({ setAlert, spiner, setSpiner }) {
	const [loginByNumber, setLoginByNumber] = useState(true);

	// number form
	const [validation, setValidation] = useState(false);
	const [inpVla, setInpVal] = useState(0);
	const [checknum, setCheckNum] = useState(false);

	const changeVal = (val) => {
		setInpVal(val);
	};

	// email form
	const [emailVal, setEmailVal] = useState("");
	const [emailValidation, setEmailValidation] = useState(false);
	const [checkEmail, setCheckEmail] = useState(false);

	return (
		<div className="flex flex-col justify-center items-stretch gap-4 w-[250px]">
			{loginByNumber ? (
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
			) : (
				<LoginByEmail
					emailVal={emailVal}
					setEmailVal={setEmailVal}
					emailValidation={emailValidation}
					setEmailValidation={setEmailValidation}
					setAlert={{ setAlert }}
					checkEmail={checkEmail}
					setCheckEmail={setCheckEmail}
					spiner={spiner}
					setSpiner={setSpiner}
				/>
			)}
			<button
				className={`text-blue-500 hover:text-purple-500 font-peydalight ${
					!checknum ? "" : "hidden"
				}`}
				onClick={() => {
					setLoginByNumber(!loginByNumber);
				}}
			>
				{loginByNumber ? "لاگین با ایمیل" : "لاگین با شماره تلفن"}
			</button>
		</div>
	);
}
