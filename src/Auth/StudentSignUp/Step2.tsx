import TextField from "@mui/material/TextField"

export const Step2 = ({
  setUniName,
  uniName,
  setUniCountry,
  uniCountry,
  setUniCity,
  uniCity,
  setUniMayor,
  uniMayor
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
        value={uniName}
        onChange={(e) => setUniName(e.target.value)}
      />
      <TextField
        name="universitycountry"
        required
        fullWidth
        id="lastName"
        label="University Country"
        sx={{ marginBottom: "20px" }}
        value={uniCountry}
        onChange={(e) => setUniCountry(e.target.value)}
      />
      <TextField
        name="universitycity"
        required
        fullWidth
        id="universitycity"
        label="University City"
        sx={{ marginBottom: "20px" }}
        value={uniCity}
        onChange={(e) => setUniCity(e.target.value)}
      />
      <TextField
        autoComplete="universitymayor"
        name="universitymayor"
        required
        fullWidth
        id="universitymayor"
        label="University Mayor"
        sx={{ marginBottom: "20px" }}
        value={uniMayor}
        onChange={(e) => setUniMayor(e.target.value)}
      />
    </>
  )
}
