import { useState } from "react";
import { LuSun } from "react-icons/lu";

export const DarkMode = () => {
    const [darkMode , setMpde] = useState(false);

    function changeMode(){
        if(darkMode){
            setMpde(false);
        }else{
            setMpde(true);
        }
    }
	return (
		<>
			<button
				className="flex justify-center items-center border border-slate-200 p-3 rounded-md shadow"
				onClick={() => {
                    changeMode();
                    if(darkMode){
                        document.documentElement.classList.remove("dark");
                    }
                    else{
                        document.documentElement.classList.add("dark")
                    }
				}}
			>
				<LuSun className="text-xl" />
			</button>
		</>
	);
};
