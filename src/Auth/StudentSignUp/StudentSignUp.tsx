import { useContext, useState } from "react"
import { GlobalData } from "../../state/globalState"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { Step1 } from "./Step1"

export default function StudentSignUp() {
  const { studentSignUpModal, setStudentSignUpModal } = useContext(GlobalData)

  let [step, setStep] = useState<number>(1)
  const [fname, setFname] = useState<string | undefined>(undefined)
  const [lname, setLname] = useState<string | undefined>(undefined)
  const [dateBirth, setDateBirth] = useState(undefined)

  return (
    <div>
      <Dialog
        open={studentSignUpModal}
        onClose={() => setStudentSignUpModal(false)}
      >
        <DialogTitle>Step {step} of 5</DialogTitle>
        <h2 className="text-2xl px-6">Student sign up</h2>
        <DialogContent>
          {step === 1 && (
            <Step1
              setFname={setFname}
              setLname={setLname}
              setDateBirth={setDateBirth}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => console.log(fname, lname, dateBirth)}>
            Cancel
          </Button>
          <Button onClick={() => setStep(step++)}>Next</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
