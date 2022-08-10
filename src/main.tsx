import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import CssBaseline from "@mui/material/CssBaseline"

const root = createRoot(document.getElementById("root")!)
root.render(
  <CssBaseline>
    <App />
  </CssBaseline>
)
