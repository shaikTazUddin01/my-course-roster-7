import { useState } from "react"
import Courses from "./Component/Courses/Courses"
import Cart from "./Component/Cart/Cart"
import Header from "./Component/Header/Header";


function App() {

  const [cartTitles, setcartTitles] = useState([])

  const [credits,setcredits]=useState(0);

  const [prices,setPrice]=useState(0)

  const [Remaining,setRemaining]=useState(20);
  
  const handaleTitle = (course, id ,credit,price) => {

    const items = cartTitles.find(item => item.id == id)
    if (!items) {
      const setNewTitles = [...cartTitles, course]
      setcartTitles(setNewTitles);

      const newPrice=prices+price;
      setPrice(newPrice)

    
        const newCredit=credits+credit
        setcredits(newCredit)

        const newRemaining=Remaining-credit;

        setRemaining(newRemaining)
      
     
    } 
  }

  return (
    <div className="my-10 container mx-auto p-10 lg:p-4">
      <Header></Header>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full md:w-full lg:w-3/4">
          <Courses handaleTitle={handaleTitle}></Courses>
        </div>
        <div className="w-full md:w-full lg:w-1/4">
            <Cart cartTitles={cartTitles} credits={credits} price={prices} Remaining={Remaining}></Cart>
        </div>
      </div>
    </div>
  )
}
export default App
