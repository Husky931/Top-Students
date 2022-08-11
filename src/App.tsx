import "./App.css"
import { useState } from "react"
import { Landing } from "./pages/Landing"
import Navbar from "./navigation/navbar"
import { Footer } from "./navigation/Footer"
import LoginForm from "./components/LoginForm"
import { GlobalData } from "./state/globalState"

const App = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false)

  return (
    <>
      <GlobalData.Provider value={{ openLoginModal, setOpenLoginModal }}>
        <LoginForm />
        <Navbar />
        <Landing />
        <Footer />
      </GlobalData.Provider>
    </>
  )
}

export default App
