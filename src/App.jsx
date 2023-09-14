// import { useState } from "react"
import Courses from "./Component/Courses/Courses"

import Header from "./Component/Header/Header";


function App() {


  return (
    <div className="my-10 container mx-auto ">
      <Header></Header>
      <div className="flex gap-5">
        <div className="w-4/5">
          <Courses ></Courses>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}
export default App
