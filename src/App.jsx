import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Descripcion from "./components/pages/descripcion/Descripcion";
import IndexDashboardContainer from "./components/pages/dashboard/indexDashboaard/IndexDashboardContainer";
import IndexDash2 from "./components/pages/dashboard/indexDashboaard/IndexDash2";
import ProjectsListContainer from "./components/pages/dashboard/projectsList/ProjectsListContainer";
import SettingsAdmin from "./components/pages/dashboard/settingsAdmin/SettingsAdmin";
import AddProjects from "./components/pages/dashboard/agregarProjects/AddProjects";
import EditStudio from "./components/pages/dashboard/EditStudio/EditStudio";
import EditInicio from "./components/pages/dashboard/editInicio/EditInicio";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/description" element={<Descripcion />} />

				<Route element={<IndexDashboardContainer />}>
					<Route path="/dashboard2" element={<IndexDash2 />} />
					<Route
						path="/dashboard-projectsList"
						element={<ProjectsListContainer />}
					/>
					<Route path="/dashboard-settings" element={<SettingsAdmin />} />
					<Route path="/dashboard-addProjects" element={<AddProjects />} />
					<Route path="/dashboard-editStudio" element={<EditStudio />} />
					<Route path="/dashboard-editInicio" element={<EditInicio />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
