import React from "react";
import { LuBookDown, LuBookOpen, LuBookOpenCheck, LuHome, LuSchool } from "react-icons/lu";
import { PiFire, PiFireBold } from "react-icons/pi";

export const Menu = () => {
	return (
		<div className=" container max-w-maxWidth pt-5 pb-3 flex justify-between items-center">
			<div className="flex *:flex *:gap-2 gap-5 *:justify-center *:items-center *:font-danalight *:text-slate-500">
				<button className="hover:text-slate-900">
                    <LuHome/>
                    <p>خانه</p>
                </button>
				<button className="hover:text-slate-900">
                <LuBookDown/>
                <p>کتاب صوتی</p>
                </button>
				<button className="hover:text-slate-900">
                <LuHome/>
                <p>کتاب الکترونیک</p>
                </button>
				<button className="hover:text-slate-900">
                <LuBookOpen/>
                <p>عمومی</p>
                </button>
				<button className="hover:text-slate-900">
                <LuSchool/>
                <p>درسی و دانشگاهی</p>
                </button>
				<button className="hover:text-slate-900">
                <LuBookOpenCheck/>
                <p>رمان و داستان</p>
                </button>
			</div>
			<div className="">
                <button className="flex justify-center items-center gap-2 *:text-red-300 *:hover:text-red-600">
                    <PiFireBold className="text-xl"/>
                    <p className="font-danalight">فروش شگفت انگیز</p>
                </button>
            </div>
		</div>
	);
};
