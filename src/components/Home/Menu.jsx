import {
    LuAlignCenter,
	LuBookDown,
	LuBookOpen,
	LuBookOpenCheck,
	LuHome,
	LuSchool,
} from "react-icons/lu";
import { PiFireBold } from "react-icons/pi";
import MenuBtn from "./MenuBtn";

export const Menu = () => {
	return (
		<>
			<div className=" container max-w-maxWidth pt-4 md:flex justify-between items-center hidden">
				<div className="flex *:flex *:gap-2 gap-5 *:justify-center *:items-center *:font-danalight *:text-slate-500">
					<MenuBtn/>
				</div>
				<div className="">
					<button className="flex justify-center items-center gap-2 *:text-red-300 *:hover:text-red-600">
						<PiFireBold className="text-xl" />
						<p className="font-danalight">فروش شگفت انگیز</p>
					</button>
				</div>
			</div>
		</>
	);
};
