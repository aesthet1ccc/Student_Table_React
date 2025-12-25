import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "../src/App.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
