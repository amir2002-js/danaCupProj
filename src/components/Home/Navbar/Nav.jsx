import {
	LuAlignCenter,
	LuPanelRightClose,
	LuShoppingBasket,
	LuUser2,
} from "react-icons/lu";
import { Search } from "./Search";
import { Menu } from "./Menu";
import Logo from "./Logo";
import { useState } from "react";
import MenuBtn from "./MenuBtn";
import { DarkMode } from "./DarkMode";
import { Link } from "react-router-dom";

export const Nav = () => {
	const [isopen, setStyle] = useState(false);

	function cOo() {
		setStyle(!isopen);
	}
	return (
		<>
			<div className="container flex justify-between max-w-maxWidth py-3 dark:text-slate-100">
				{/* logo */}
				<div>
					<Logo />
				</div>

				{/* search bar */}
				<div className="sm:block hidden">
					<Search />
				</div>

				{/* login */}
				<Link to="/Login">
					<button className="flex justify-center items-center border border-slate-200 p-3 rounded-md gap-4 shadow">
						<LuUser2 className="text-xl" />
						<p className="hidden md:block">ثبت نام | ورود</p>
					</button>
				</Link>

				{/* dark mood btn*/}
				<DarkMode />

				{/*shop cart btn*/}
				<button className="flex justify-center items-center border border-slate-200 p-3 rounded-md shadow">
					<LuShoppingBasket className="text-xl" />
				</button>

				<button
					className="md:hidden flex justify-center items-center border border-slate-200 p-3 rounded-md shadow"
					onClick={() => {
						cOo();
					}}
				>
					<LuAlignCenter className="text-xl" />
				</button>
			</div>
			<div className="sm:hidden container max-w-maxWidth">
				<Search />
			</div>
			<div className="">
				<Menu />
			</div>
			<div
				className={`p-7 min-h-[100vh] w-72 bg-slate-200 dark:bg-gray-800 dark:text-slate-100 fixed top-0 transition-all duration-500 transform ${
					isopen ? "translate-x-0" : `translate-x-full`
				}`}
			>
				<div className="text-end mb-5">
					<button
						className="border border-slate-400 p-2 rounded-md inline shadow"
						onClick={() => {
							cOo();
						}}
					>
						<LuPanelRightClose className="text-2xl " />
					</button>
				</div>
				<div className="flex flex-col *:flex *:justify-start gap-5 *:gap-2 *:container *:items-center">
					<MenuBtn addStyle="hover:bg-gradient-to-l from-slate-500 via-slate-500/5 to-white/0 p-2 rounded-md" />
				</div>
			</div>
		</>
	);
};
