import { useState } from "react"
import Button from "@mui/material/Button"

export const Login = () => {
  return (
    <div className="p-4 h-full">
      <div className="mb-14">
        <h1 className="text-6xl">Are you a </h1>
        <h1 className="text-6xl">top student?</h1>
      </div>
      <div className="flex flex-col ">
        <div className="bg-[#1876d1] flex flex-col text-white p-4 rounded my-2 text-center">
          <div className="text-4xl">Yes, i am</div>
          <div className="text-xl">sign me up</div>
        </div>
        <div className="border-2 border-[#1876d1] text-[#1876d1] flex flex-col p-4 rounded my-2 text-center">
          <div className="text-4xl">No, i am a </div>
          <div className="text-3xl underline">Talent Scout</div>
        </div>
      </div>
      <div>
        <img src="./login.svg" />
      </div>
    </div>
  )
}
