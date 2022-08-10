import "./App.css"
import { Login } from "./pages/Login"
import Navbar from "./navigation/navbar"
import { Footer } from "./navigation/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  )
}

export default App
