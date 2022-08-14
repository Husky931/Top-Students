import TextField from "@mui/material/TextField"

export const Step3 = ({
  setEmail,
  email,
  setPassword,
  password,
  setConfirmPass,
  confirmPass
}) => {
  return (
    <>
      <TextField
        name="email"
        required
        fullWidth
        id="email"
        label="Email"
        autoFocus
        type="email"
        sx={{ marginBottom: "20px" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        name="password"
        required
        fullWidth
        id="password"
        label="Password"
        type="password"
        sx={{ marginBottom: "20px" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        name="confirmPass"
        required
        fullWidth
        id="confirmPass"
        label="Confirm Pass"
        type="password"
        sx={{ marginBottom: "20px" }}
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
      />
    </>
  )
}
