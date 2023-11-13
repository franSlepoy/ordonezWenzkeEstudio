import Box from "@mui/material/Box";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function SettingsAdmin() {
	const auth = getAuth();

	//Me traigo el usuario loggeado
	onAuthStateChanged(auth, (user) => {
		if (user) {
			/* 	const uid = user.uid; */ // ya hice antes que coincida con la DB
			console.log("user es: ", user.email);
		} else {
			// User is signed out
			//navegar al login
		}
	});

	const user = auth.currentUser;
	console.log("user de auth.courrentUser: ", user);

	return (
		<Box>
			<h2>Admin Configuration</h2>
		</Box>
	);
}
