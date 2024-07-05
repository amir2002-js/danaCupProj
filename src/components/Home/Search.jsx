import { LuSearch } from "react-icons/lu"

export const Search = () => {
  return (
    <>
        <form action="" className="flex border border-slate-200 bg-slate-50 gap-2 justify-center items-center rounded *:p-3 shadow-md">
            <label htmlFor="" >
                <LuSearch className="text-xl"/>
            </label>
            <input type="text" placeholder="جستجو توی کتابخونه..." className="outline-none bg-black/0 w-[30vw]"/>
        </form>  
    </>
  )
}
