import { useContext, useState, useEffect } from "react"
import { GlobalData } from "../../state/globalState"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Alert from "@mui/material/Alert"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { Step1 } from "./Step1"
import { Step2 } from "./Step2"

export default function StudentSignUp() {
  const { studentSignUpModal, setStudentSignUpModal } = useContext(GlobalData)

  let [step, setStep] = useState<number>(1)
  const [fname, setFname] = useState<string | undefined>(undefined)
  const [lname, setLname] = useState<string | undefined>(undefined)
  const [dateBirth, setDateBirth] = useState(undefined)
  const [uniName, setUniName] = useState<string>(undefined)
  const [uniCountry, setUniCountry] = useState<string>(undefined)
  const [uniCity, setUniCity] = useState<string>(undefined)
  const [uniMayor, setUniMayor] = useState<string>(undefined)

  const nextStep = () => {
    setStep(step + 1)
  }
  const prevStep = () => {
    setStep(step - 1)
  }

  function sentStudentInfo() {
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
        <DialogTitle>Step {step} of 2</DialogTitle>
        <h2 className="text-2xl px-6">Student sign up</h2>
        <DialogContent>
          {step === 1 && (
            <Step1
              setFname={setFname}
              setLname={setLname}
              setDateBirth={setDateBirth}
            />
          )}
          {step === 2 && (
            <Step2
              setUniName={setUniName}
              setUniCountry={setUniCountry}
              setUniCity={setUniCity}
              setUniMayor={setUniMayor}
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
              step !== 2 ? nextStep() : sentStudentInfo()
            }}
          >
            {step === 2 ? "Finish" : "Next"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
