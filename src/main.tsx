import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React from "react";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<MetaMaskUIProvider
			sdkOptions={{
				dappMetadata: {
					name: "Example React UI Dapp",
					url: window.location.href,
				},
				infuraAPIKey: "https://infura.io/v3/c2277863d49b42909d1a6b452b4d2553",
			}}
		>
			<App />
		</MetaMaskUIProvider>
	</StrictMode>
);
