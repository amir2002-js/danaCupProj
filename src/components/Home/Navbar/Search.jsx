import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const Search = () => {
	const [inpVal, setInpVal] = useState("");

	const navigate = useNavigate();

	function searchHandler(e) {
		e.preventDefault();
		if (inpVal.trim()) {
			navigate(`/search?q=${inpVal}`);
		}
	}

	return (
		<>
			<form
				action=""
				className="flex border min-w-[30vw] border-slate-200 bg-slate-50 gap-2 justify-start items-center rounded *:p-3 shadow-md"
				onSubmit={searchHandler}
			>
				<button type="submit">
					<LuSearch className="text-xl text-slate-800" />
				</button>

				<input
					type="text"
					placeholder="جستجو توی کتابخونه..."
					className="outline-none bg-black/0 w-full dark:text-slate-900"
					onChange={(e) => {
						setInpVal(e.target.value);
					}}
				/>
			</form>
		</>
	);
};
