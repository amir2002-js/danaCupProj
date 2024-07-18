import LoginBox from "./LoginBox.jsx/LoginBox";
import { useState } from "react";

export default function Login() {
	const [notValAlert, setAlert] = useState(true);
	return (
		<div className="h-svh bg-[url(../../images/Login.jpg)] bg-cover bg-center flex justify-center items-center ">
			<div className="size-full bg-black/50 fixed top-0"></div>
			<LoginBox setAlert={setAlert} notValAlert={notValAlert} />
			<div
				className={`size-full absolute flex justify-center items-center bg-black/80 z-30 ${
					notValAlert ? "hidden" : null
				}`}
			>
				<div className="bg-white absolute z-40 p-5 flex flex-col justify-center items-center gap-5 rounded-2xl border">
					<p className="text-center">
						وااااااای از دست تو <br /> ببین داداش شماره تلفنی که وارد کردی
						معتبر نیست ....
					</p>
					<button
						className="bg-red-400 hover:bg-red-600 text-white px-8 shadow py-1 rounded-md"
						onClick={() => {
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
