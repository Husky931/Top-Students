import TextField from "@mui/material/TextField"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { useWindowSize } from "react-use"
import { Button, DialogActions, DialogContent } from "@mui/material"

export const Step1 = ({ setFname, setLname, setDateBirth }) => {
  const { width, height } = useWindowSize()

  return (
    <>
      <TextField
        autoComplete="fname"
        name="firstName"
        required
        fullWidth
        id="firstName"
        label="First Name"
        autoFocus
        sx={{ marginBottom: "20px" }}
        onChange={(e) => setFname(e.target.value)}
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
        onChange={(e) => setLname(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {width > 840 ? (
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            renderInput={(params) => <TextField {...params} />}
            onChange={(e) => setDateBirth(e)}
            sx={{ marginBottom: "20px" }}
          />
        ) : (
          <MobileDatePicker
            label="Date mobile"
            inputFormat="MM/dd/yyyy"
            renderInput={(params) => <TextField {...params} />}
            onChange={(e) => setDateBirth(e)}
            sx={{ marginBottom: "20px" }}
          />
        )}
      </LocalizationProvider>
    </>
  )
}
