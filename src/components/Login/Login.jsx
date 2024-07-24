import LoginBox from "./LoginBox.jsx/LoginBox";
import { useState } from "react";

export default function Login() {
	const [notValAlert, setAlert] = useState(true);
	const [isEmail, setIsEmail] = useState(false);
	const [isNumber, setIsNumber] = useState(false);

	return (
		<div className="h-svh bg-[url(../../src/images/Login.jpg)] bg-cover bg-center flex justify-center items-center ">
			<div className="size-full bg-black/50 fixed top-0"></div>
			<LoginBox
				setAlert={setAlert}
				notValAlert={notValAlert}
				setIsEmail={setIsEmail}
				setIsNumber={setIsNumber}
				isEmail={isEmail}
				isNumber={isNumber}
			/>
			<div
				className={`size-full absolute flex justify-center items-center bg-black/80 z-30 ${
					notValAlert ? "hidden" : null
				}`}
			>
				<div className="bg-white absolute z-40 p-5 flex flex-col justify-center items-center gap-5 rounded-2xl border">
					<p className="text-center">
						وااااااای از دست تو <br />
						{isEmail
							? "ببین داداش ایمیلی که وارد کردی معتبر نیست ...."
							: ""}
						{isNumber
							? "ببین داداش شماره تلفنی که وارد کردی معتبر نیست ...."
							: ""}
					</p>
					<button
						className="bg-red-400 hover:bg-red-600 text-white px-8 shadow py-1 rounded-md"
						onClick={() => {
							setIsEmail(false);
							setIsNumber(false);
							setAlert(!notValAlert);
						}}
					>
						حله...
					</button>
				</div>
			</div>
		</div>
	);
}
