import React from "react";
import EnterEmail from "./EnterEmail";

export default function LoginByEmail() {
	return (
		<>
			<p className={``}>
				ایمیل خود را وارد کنید
			</p>
			<div className="flex flex-col gap-9">
				
				<EnterEmail/>
				<button
					className="bg-teal-600 hover:bg-teal-700 text-white py-1.5 mt-6 rounded-lg shadow shadow-black/70"
					onClick={() => {
						
					}}
				>
					ورود
				</button>
			</div>
		</>
	);
}
