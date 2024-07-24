import { useState } from "react";
import Logo from "../../Home/Navbar/Logo";
import Form from "../Form/Form";

export default function LoginBox({
	notValAlert,
	setAlert,
	setIsNumber,
	setIsEmail,
	isEmail,
	isNumber,
}) {
	const [spiner, setSpiner] = useState(false);
	return (
		<div className="bg-white rounded-xl flex flex-col justify-center items-center gap-8 px-1 py-8 z-10 w-[300px]">
			<div className="">
				<Logo />
			</div>
			<div className="flex flex-col justify-center items-center gap-2">
				<h1 className="font-danablack">ورود | ثبت‌نام</h1>
				<p className="font-danalight text-sm">
					لطفاً تلفن همراه خود را وارد کنید.
				</p>
			</div>
			<div className="">
				<Form
					notValAlert={notValAlert}
					setAlert={setAlert}
					spiner={spiner}
					setSpiner={setSpiner}
					setIsEmail={setIsEmail}
					setIsNumber={setIsNumber}
					isEmail={isEmail}
					isNumber={isNumber}
				/>
			</div>
			<div
				className={`absolute bg-black/70 size-full justify-center items-center ${
					spiner ? "flex" : "hidden"
				}`}
			>
				<img
					src="../../src/images/loading.gif"
					alt=""
					className="w-[200px] rounded-xl"
				/>
			</div>
		</div>
	);
}
