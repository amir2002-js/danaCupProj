import EnterNum from "./EnterNum";

export default function Form() {
	return (
		<div className="flex flex-col justify-center items-stretch gap-4 w-[250px]">
			<p>تلفن همراه</p>
			<div className="flex flex-col gap-9">
				<EnterNum />
				<button
					className="bg-teal-600 hover:bg-teal-700 text-white py-1.5 mt-6 rounded-lg shadow shadow-black/70"
					onClick={() => {}}
				>
					ورود
				</button>
			</div>
		</div>
	);
}
