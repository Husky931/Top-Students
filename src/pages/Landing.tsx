export const Landing = () => {
  return (
    <div className="p-4 h-auto max-w-[1350px] mx-auto md:flex-1">
      <div className="md:flex md:items-stretch ">
        <div className="md:flex-1">
          <div className="mb-14 lg:ml-12 font-light">
            <h1 className="text-6xl">Are you a </h1>
            <h1 className="text-6xl">top student?</h1>
          </div>
          <div className="flex flex-col md:mx-1 md:w-[80%]">
            <div className="bg-[#1876d1] flex flex-col text-white p-4 rounded my-2 text-center">
              <div className="text-4xl">Yes, i am</div>
              <div className="text-xl">sign me up</div>
            </div>
            <div className="border-2 border-[#1876d1] text-[#1876d1] flex flex-col p-4 rounded my-2 text-center md:mx-1">
              <div className="text-4xl">No, i am a </div>
              <div className="text-3xl underline">Talent Scout</div>
            </div>
          </div>
        </div>
        <div className="md:flex-1 my-6">
          <img src="./login.svg" className="h-full" />
        </div>
      </div>
    </div>
  )
}
