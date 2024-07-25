import { Outlet } from "react-router-dom";
import { Nav } from "./Home/Navbar/Nav";
export default function Layout() {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
}
