import { LuShoppingBasket, LuSun, LuUser2 } from "react-icons/lu"
import { Search } from "./Search"
import { Menu } from "./Menu"

export const Nav = () => {
  return (
    <>
    <div className="container flex justify-between max-w-maxWidth py-3">
        {/* logo */}
        <div className="flex gap-2 justify-center items-center">
          <img src="../../images/logo.png" alt=""/>
          <div className="md:block hidden">
            <h1 className="font-danabold">کتابخونه</h1>
            <p className="font-danalight text-[15px] whitespace-nowrap">فروشگاه آنلاین کتاب</p>
          </div>
        </div>

        {/* search bar */}
        <div className="">
          <Search/>
        </div>

        {/* login */}
        <button className="flex justify-center items-center border border-slate-200 p-3 rounded-md gap-4 shadow">
          <LuUser2 className="text-xl"/>
          <p className="hidden md:block">
            ثبت نام | ورود
          </p>
        </button>

        {/* dark mood btn*/}
        <button className="flex justify-center items-center border border-slate-200 p-3 rounded-md shadow">
          <LuSun className="text-xl"/>
        </button>

        {/*shop cart btn*/}
        <button className="flex justify-center items-center border border-slate-200 p-3 rounded-md shadow">
          <LuShoppingBasket className="text-xl"/>
        </button>

    </div>
    <Menu/>
    </>
  )
}
