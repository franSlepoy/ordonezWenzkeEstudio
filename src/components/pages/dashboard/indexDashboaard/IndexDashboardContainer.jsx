import { Link, Outlet } from "react-router-dom";

const IndexDashboardContainer = () => {
	return (
		<>
			<div
				style={{
					border: "solid green",
					minHeight: "20vh",
					backgroundColor: "pink",
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				<h2>Dashboard Container</h2>
				<Link to="/dashboard-settings">ADMIN</Link>
				<p>Logout</p>
			</div>
			<div>
				<Outlet />
			</div>
		</>
	);
};

export default IndexDashboardContainer;
