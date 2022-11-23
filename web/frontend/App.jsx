import { BrowserRouter } from "react-router-dom";
// import { NavigationMenu } from "@shopify/app-bridge-react";
// import Routes from "./Routes";
import { TruendoApp } from "./components";
// import { TruendoInput } from "./assets";
import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            <TruendoApp/>
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
