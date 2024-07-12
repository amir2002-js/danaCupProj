import {
	LuBookDown,
	LuBookOpen,
	LuBookOpenCheck,
	LuHome,
	LuSchool,
} from "react-icons/lu";
export default function MenuBtn({ addStyle }) {
	return (
		<>
			<button
				className={`dark:hover:text-white hover:text-slate-900 ${addStyle}`}
			>
				<LuHome />
				<p>خانه</p>
			</button>
			<button
				className={`dark:hover:text-white hover:text-slate-900 ${addStyle}`}
			>
				<LuBookDown />
				<p>کتاب صوتی</p>
			</button>
			<button
				className={`dark:hover:text-white hover:text-slate-900 ${addStyle}`}
			>
				<LuHome />
				<p>کتاب الکترونیک</p>
			</button>
			<button
				className={`dark:hover:text-white hover:text-slate-900 ${addStyle}`}
			>
				<LuBookOpen />
				<p>عمومی</p>
			</button>
			<button
				className={`dark:hover:text-white hover:text-slate-900 ${addStyle}`}
			>
				<LuSchool />
				<p>درسی و دانشگاهی</p>
			</button>
			<button
				className={`dark:hover:text-white hover:text-slate-900 ${addStyle}`}
			>
				<LuBookOpenCheck />
				<p>رمان و داستان</p>
			</button>
		</>
	);
}
