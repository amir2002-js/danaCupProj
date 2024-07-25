import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
	const location = useLocation();
	useEffect(() => {
		console.log(location);
	}, [location]);
	return (
		<div>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
			eveniet architecto incidunt vitae. Explicabo voluptatum ratione
			autem placeat, distinctio vero, laboriosam quisquam dolor neque iste
			nobis nihil quo, quod adipisci?
		</div>
	);
}
