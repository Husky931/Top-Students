import "./App.css"
import { Landing } from "./pages/Landing"
import Navbar from "./navigation/navbar"
import { Footer } from "./navigation/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  )
}

export default App
