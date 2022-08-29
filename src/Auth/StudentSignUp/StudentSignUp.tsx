import { useContext, useState, useEffect } from "react"
import { GlobalData } from "../../state/globalState"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { Step1 } from "./Step1"
import { Step2 } from "./Step2"
import { Step3 } from "./Step3"

export default function StudentSignUp() {
  const { studentSignUpModal, setStudentSignUpModal } = useContext(GlobalData)

  let [step, setStep] = useState<number>(1)
  const [fname, setFname] = useState<string>("")
  const [lname, setLname] = useState<string>("")
  const [dateBirth, setDateBirth] = useState()
  const [uniName, setUniName] = useState<string>("")
  const [uniCountry, setUniCountry] = useState<string>("")
  const [uniCity, setUniCity] = useState<string>("")
  const [uniMayor, setUniMayor] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPass, setConfirmPass] = useState<string>("")

  const nextStep = () => {
    setStep(step + 1)
  }
  const prevStep = () => {
    setStep(step - 1)
  }

  async function submitRegister() {
    if (
      fname === "" ||
      lname === "" ||
      dateBirth === undefined ||
      uniName === "" ||
      uniCountry === "" ||
      uniCity === "" ||
      uniMayor === "" ||
      email === "" ||
      password === "" ||
      confirmPass === ""
    ) {
      console.log("missing field")
    }
    if (password !== confirmPass) {
      console.log("password dont match")
    }

    const bla = await fetch(
      `${import.meta.env.VITE_BASE_URL}auth/local/register`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          password: password,
          email: email,
          username: email
        }),
        method: "POST"
      }
    )
    bla.json().then((data) => console.log(data))
    // bla.json().then((data) => console.log(data))

    console.log("mua")

    // if sent to server is succesful
    // display Success popUp
    // disable Next/Previous buttons while popUP is active
    // when user clicks OK do setStudentSignUpModal(false) and transfer user to news feed page
  }

  useEffect(() => {}, [step])

  return (
    <div>
      <Dialog
        open={studentSignUpModal}
        onClose={() => setStudentSignUpModal(false)}
      >
        <DialogTitle>Step {step} of 3</DialogTitle>
        <h2 className="text-2xl px-6">Student sign up</h2>
        <DialogContent>
          {step === 1 && (
            <Step1
              setFname={setFname}
              fname={fname}
              setLname={setLname}
              lname={lname}
              setDateBirth={setDateBirth}
              dateBirth={dateBirth}
            />
          )}
          {step === 2 && (
            <Step2
              setUniName={setUniName}
              uniName={uniName}
              setUniCountry={setUniCountry}
              uniCountry={uniCountry}
              setUniCity={setUniCity}
              uniCity={uniCity}
              setUniMayor={setUniMayor}
              uniMayor={uniMayor}
            />
          )}
          {step === 3 && (
            <Step3
              setEmail={setEmail}
              email={email}
              setPassword={setPassword}
              password={password}
              setConfirmPass={setConfirmPass}
              confirmPass={confirmPass}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              step === 1 ? setStudentSignUpModal(false) : prevStep()
            }}
          >
            {step === 1 ? "Cancel" : "Previous"}
          </Button>
          <Button
            onClick={() => {
              step !== 3 ? nextStep() : submitRegister()
            }}
          >
            {step === 3 ? "Finish" : "Next"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
