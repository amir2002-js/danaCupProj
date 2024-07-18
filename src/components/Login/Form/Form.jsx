
export default function Form() {
  return (
    <div className="flex flex-col justify-center items-stretch gap-2 w-[250px]">
        <p>تلفن همراه</p>
        <input type="number" name="" id="" className=" no-spinner bg-gray-200 rounded-lg outline-none border border-gray-300 px-3 py-1.5 shadow shadow-black/20" onChange={(e) => {
            let number = e.target.value;

            if(number.length > 11){
                number = number.substring(0,11);
                e.value = number;
                console.log(e.value);
                
            }
        }}/>
        <button className="bg-teal-600 hover:bg-teal-700 text-white py-1.5 mt-6 rounded-lg shadow shadow-black/70">
        ورود
        </button>
    </div>
  )
}
