import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import Login from "./Login/Login";

function App() {
	return (
		<div className="font-danaregular" dir="rtl">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
