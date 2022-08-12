import React, { useContext } from "react"
import { GlobalData } from "../state/globalState"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { useWindowSize } from "react-use"

export default function StudentSignUp() {
  const { width, height } = useWindowSize()

  const { studentSignUpModal, setStudentSignUpModal } = useContext(GlobalData)

  return (
    <div>
      <Dialog
        open={studentSignUpModal}
        onClose={() => setStudentSignUpModal(false)}
      >
        <DialogTitle>Step 1 of 5</DialogTitle>
        <h2 className="text-2xl px-6">Student sign up</h2>
        <DialogContent>
          <TextField
            autoComplete="fname"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            autoComplete="lname"
            name="lastName"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            autoFocus
            sx={{ marginBottom: "20px" }}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {width > 840 ? (
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                renderInput={(params) => <TextField {...params} />}
                onChange={() => console.log("1")}
                sx={{ marginBottom: "20px" }}
              />
            ) : (
              <MobileDatePicker
                label="Date mobile"
                inputFormat="MM/dd/yyyy"
                renderInput={(params) => <TextField {...params} />}
                onChange={() => console.log("1")}
                sx={{ marginBottom: "20px" }}
              />
            )}
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button>Next</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
