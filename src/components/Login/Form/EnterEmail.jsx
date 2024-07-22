
export default function EnterEmail({emailVal , emailValidation , setEmailValidation , setEmailVal ,checkEmail}) {
	return (
		<div className={`${checkEmail? "hidden":""}`}>
			<input
            placeholder="*****@gmail.com"
            dir="ltr"
				type="text"
				className="font-peydamd w-full bg-gray-100 rounded-lg outline-none border border-gray-300 px-3 py-1.5 shadow shadow-black/20"
                onInput={(e) => {
                    if(e.target.value.endsWith("@gmail.com")){
                        setEmailVal(e.target.value);
                        console.log(emailVal);
                        setEmailValidation(true); 
                    }else{
                        setEmailValidation(false); 
                    }
                }}
			/>
			<p
				className={`font-danabold absolute mt-2 text-sm ${
					emailValidation ? "text-teal-700 block" : "text-red-600 block"
				}`}
			>
				{emailValidation ? "*ایمیل معتبر است" : "*ایمیل معتبر نیست...."}
			</p>
		</div>
	);
}
