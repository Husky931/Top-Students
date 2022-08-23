import TextField from "@mui/material/TextField"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { useWindowSize } from "react-use"
import { Button, DialogActions, DialogContent } from "@mui/material"

export const Step1 = ({
  setFname,
  setLname,
  setDateBirth,
  fname,
  lname,
  dateBirth
}) => {
  const { width, height } = useWindowSize()

  return (
    <>
      <TextField
        name="firstName"
        required
        fullWidth
        id="firstName"
        label="First Name"
        autoFocus
        sx={{ marginBottom: "20px" }}
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <TextField
        name="lastName"
        required
        fullWidth
        id="lastName"
        label="Last Name"
        sx={{ marginBottom: "20px" }}
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {width > 840 ? (
          <DesktopDatePicker
            label="Date of birth"
            inputFormat="MM/dd/yyyy"
            renderInput={(params) => <TextField {...params} />}
            onChange={(e) => setDateBirth(e)}
            value={dateBirth}
            sx={{ marginBottom: "20px" }}
          />
        ) : (
          <MobileDatePicker
            label="Date of birth"
            inputFormat="MM/dd/yyyy"
            renderInput={(params) => <TextField {...params} />}
            onChange={(e) => setDateBirth(e)}
            value={dateBirth}
            sx={{ marginBottom: "20px" }}
          />
        )}
      </LocalizationProvider>
    </>
  )
}
