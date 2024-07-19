import EnterNum from "./EnterNum";
import { useState } from "react";

export default function Form({ notValAlert, setAlert }) {
	const [validation, setValidation] = useState(false);

	return (
		<div className="flex flex-col justify-center items-stretch gap-4 w-[250px]">
			<p>تلفن همراه</p>
			<div className="flex flex-col gap-9">
				<EnterNum
					validation={validation}
					setValidation={setValidation}
				/>
				<button
					className="bg-teal-600 hover:bg-teal-700 text-white py-1.5 mt-6 rounded-lg shadow shadow-black/70"
					onClick={() => {
						if (!validation) {
							setAlert(false);
						}
					}}
				>
					ورود
				</button>
			</div>
		</div>
	);
}
