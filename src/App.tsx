import "./App.css"
import { useState } from "react"
import { Landing } from "./pages/Landing"
import Navbar from "./navigation/navbar"
import { Footer } from "./navigation/Footer"
import StudentSignUp from "./Auth/StudentSignUp/StudentSignUp"
import { GlobalData } from "./state/globalState"
import { Success } from "./components/Success"

const App = () => {
  const [studentSignUpModal, setStudentSignUpModal] = useState(false)

  const myObj = {}
  const smth: string[] = []

  return (
    <>
      <GlobalData.Provider
        value={{ studentSignUpModal, setStudentSignUpModal }}
      >
        <StudentSignUp />
        <Navbar />
        {/* <Success /> */}
        <Landing />
        <Footer />
      </GlobalData.Provider>
    </>
  )
}

export default App
