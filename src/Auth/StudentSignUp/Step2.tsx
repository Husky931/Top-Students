import TextField from "@mui/material/TextField"

export const Step2 = ({
  setUniName,
  setUniCountry,
  setUniCity,
  setUniMayor
}) => {
  return (
    <>
      <TextField
        name="universityName"
        required
        fullWidth
        id="universityName"
        label="University Name"
        autoFocus
        sx={{ marginBottom: "20px" }}
        onChange={(e) => setUniName(e.target.value)}
      />
      <TextField
        name="universitycountry"
        required
        fullWidth
        id="lastName"
        label="University Country"
        autoFocus
        sx={{ marginBottom: "20px" }}
        onChange={(e) => setUniCountry(e.target.value)}
      />
      <TextField
        name="universitycity"
        required
        fullWidth
        id="universitycity"
        label="University City"
        autoFocus
        sx={{ marginBottom: "20px" }}
        onChange={(e) => setUniCity(e.target.value)}
      />
      <TextField
        autoComplete="universitymayor"
        name="universitymayor"
        required
        fullWidth
        id="universitymayor"
        label="University Mayor"
        autoFocus
        sx={{ marginBottom: "20px" }}
        onChange={(e) => setUniMayor(e.target.value)}
      />
    </>
  )
}
