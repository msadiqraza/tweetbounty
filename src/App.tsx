import { BrowserRouter } from "react-router-dom";
import Routing from "./pages";
import React from "react";

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<Routing />
		</BrowserRouter>
	);
}

export default App;
