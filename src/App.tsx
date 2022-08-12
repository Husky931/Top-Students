import "./App.css"
import { useState } from "react"
import { Landing } from "./pages/Landing"
import Navbar from "./navigation/navbar"
import { Footer } from "./navigation/Footer"
import StudentSignUp from "./Auth/StudentSignUp"
import { GlobalData } from "./state/globalState"

const App = () => {
  const [studentSignUpModal, setStudentSignUpModal] = useState(false)

  return (
    <>
      <GlobalData.Provider
        value={{ studentSignUpModal, setStudentSignUpModal }}
      >
        <StudentSignUp />
        <Navbar />
        <Landing />
        <Footer />
      </GlobalData.Provider>
    </>
  )
}

export default App
