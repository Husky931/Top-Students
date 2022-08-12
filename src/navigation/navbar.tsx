import React, { useContext, useState } from "react"
import { GlobalData } from "../state/globalState"
import Button from "@mui/material/Button"
import Menu, { MenuProps } from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Divider from "@mui/material/Divider"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import SchoolIcon from "@mui/icons-material/School"
import SearchIcon from "@mui/icons-material/Search"

export default function CustomizedMenus(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const { setStudentSignUpModal } = useContext(GlobalData)

  return (
    <div className="w-full p-4 flex justify-end max-w-[1350px] mx-auto">
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Options
      </Button>
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        {...props}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose()
            setStudentSignUpModal(true)
          }}
          disableRipple
        >
          <SchoolIcon sx={{ marginRight: "2px" }} />
          Top Student
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <SearchIcon />
          Talent Scout
        </MenuItem>
      </Menu>
    </div>
  )
}
