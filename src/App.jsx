import { Routes, Route, Link } from 'react-router-dom'

import { Js } from './Js';

function App() {
	return (
		<>
			<div className="min-h-[100svh] bg-slate-500 flex justify-center items-center">
				<p className="px-10 py-3 rounded-lg bg-blue-500 font-bold text-white text-[18px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.2),0_6px_20px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_10px_0px_rgba(0,0,0,0.2)] border-[1px] border-blue-400">
					hellow World
				</p>
				<Link to={'/ccc'}>kk</Link>
			</div>
			<Routes>
				<Route path='/ccc' element={<Js/>} />

			</Routes>
		</>
	);
}

export default App;
