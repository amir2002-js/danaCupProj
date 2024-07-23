import EnterEmail from "./EnterEmail";
import CodeInp from "./CodeInp";

export default function LoginByEmail({
	emailVal,
	emailValidation,
	setEmailValidation,
	setEmailVal,
	setAlert,
	checkEmail,
	setCheckEmail,
	spiner,
	setSpiner,
}) {
	// export default function LoginByEmail({emailVal , emailValidation , setEmailValidation , setEmailVal , setAlert  }) {

	return (
		<>
			<p className={`${checkEmail ? "text-sm" : " "} text-center`}>
				{checkEmail
					? `کدی را که به ایمیل ${emailVal} ارسال کردیم وارد کنید`
					: "ایمیل خود را وارد کنید"}
			</p>
			<div className="flex flex-col gap-9">
				<EnterEmail
					emailVal={emailVal}
					setEmailVal={setEmailVal}
					emailValidation={emailValidation}
					setEmailValidation={setEmailValidation}
					checkEmail={checkEmail}
				/>

				<div className={`${checkEmail ? "" : "hidden"}`}>
					<CodeInp spiner={spiner} setSpiner={setSpiner} />
				</div>

				<button
					className="bg-teal-600 hover:bg-teal-700 text-white py-1.5 mt-6 rounded-lg shadow shadow-black/70"
					onClick={() => {
						if (emailValidation) {
							setCheckEmail(true);
						} else {
							setAlert(false);
						}
					}}
				>
					ورود
				</button>
			</div>
		</>
	);
}
