import LoginBox from "./LoginBox.jsx/LoginBox";

export default function Login() {
	return (
		<div className="h-svh bg-[url(../../images/Login.jpg)] bg-cover bg-center flex justify-center items-center">
			<div className="size-full bg-black/50 fixed top-0"></div>
			<LoginBox />
		</div>
	);
}
