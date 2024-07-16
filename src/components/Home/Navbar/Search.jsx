import { LuSearch } from "react-icons/lu";

export const Search = () => {
	return (
		<>
			<form
				action=""
				className="flex border min-w-[30vw] border-slate-200 bg-slate-50 gap-2 justify-start items-center rounded *:p-3 shadow-md"
			>
				<label htmlFor="">
					<LuSearch className="text-xl text-slate-800" />
				</label>
				<input
					type="text"
					placeholder="جستجو توی کتابخونه..."
					className="outline-none bg-black/0 w-full dark:text-slate-900"
				/>
			</form>
		</>
	);
};
