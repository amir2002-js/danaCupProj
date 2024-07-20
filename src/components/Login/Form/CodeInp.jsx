import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CodeInp({ spiner, setSpiner }) {
	const navigate = useNavigate();

	const inpElem1 = useRef(null);
	const inpElem2 = useRef(null);
	const inpElem3 = useRef(null);
	const inpElem4 = useRef(null);

	const [login, setLogin] = useState(false);

	useEffect(() => {
		inpElem1.current.focus();
	});

	useEffect(() => {
		if (login) {
			setSpiner(!spiner);
			console.log("loging....");
			setTimeout(() => {
				setSpiner(!spiner);
				navigate("/");
			}, 2000);
		}
	}, [login]);

	return (
		<div>
			<form action="" className="flex flex-row-reverse justify-between">
				<input
					ref={inpElem1}
					type="text"
					name=""
					id=""
					className="rounded-lg border border-slate-200 w-10 h-10 pr-4 outline-none focus-visible:ring-[3px] ring-teal-700/50"
					onChange={(e) => {
						let val = e.target.value;
						inpElem2.current.focus();
						if (e.target.value.length > 1) {
							e.target.value = val.substring(0, 1);
						}
						console.log(val);
					}}
				/>
				<input
					ref={inpElem2}
					type="text"
					name=""
					id=""
					className="rounded-lg border border-slate-200 w-10 h-10 pr-4 outline-none focus-visible:ring-[3px] ring-teal-700/50"
					onChange={(e) => {
						let val = e.target.value;
						inpElem3.current.focus();
						if (e.target.value.length > 1) {
							e.target.value = val.substring(0, 1);
						}
						console.log(val);
					}}
				/>
				<input
					ref={inpElem3}
					type="text"
					name=""
					id=""
					className="rounded-lg border border-slate-200 w-10 h-10 pr-4 outline-none focus-visible:ring-[3px] ring-teal-700/50"
					onChange={(e) => {
						let val = e.target.value;
						inpElem4.current.focus();
						if (e.target.value.length > 1) {
							e.target.value = val.substring(0, 1);
						}
						console.log(val);
					}}
				/>
				<input
					ref={inpElem4}
					type="text"
					name=""
					id=""
					className="rounded-lg border border-slate-200 w-10 h-10 pr-4 outline-none focus-visible:ring-[3px] ring-teal-700/50"
					onChange={(e) => {
						let val = e.target.value;
						setLogin(true);
						if (e.target.value.length > 1) {
							e.target.value = val.substring(0, 1);
						}
						console.log(val);
					}}
				/>
			</form>
		</div>
	);
}
