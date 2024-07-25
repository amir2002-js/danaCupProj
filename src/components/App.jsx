import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import Login from "./Login/Login";
import SearchPage from "./Search/SearchPage";
import Layout from "./Layout";

function App() {
	return (
		<div className="font-danaregular" dir="rtl">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="search" element={<SearchPage />} />
				</Route>
				<Route path="/Login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
