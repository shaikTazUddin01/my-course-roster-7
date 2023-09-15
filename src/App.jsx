import { useState } from "react"
import Courses from "./Component/Courses/Courses"
import Cart from "./Component/Cart/Cart"
import Header from "./Component/Header/Header";
import toast, { Toaster } from 'react-hot-toast';
// import toast, { Toaster } from 'react-hot-toast';


function App() {

  const [cartTitles, setcartTitles] = useState([])

  const [credits,setcredits]=useState(0);

  const [prices,setPrice]=useState(0)

  const [Remaining,setRemaining]=useState(20);

  // const [create,setcreate]=useState(0);
  
  const handaleTitle = (course, id ,credit,price) => {


    const items = cartTitles.find(item => item.id == id)

    const setNewTitles = [...cartTitles, course]
    const newPrice=prices+price;
    const newRemaining=Remaining-credit;
    const newCredit=credits+credit

if (newRemaining < 0) {
  return toast.error('You never get course up to 20 Credit');
}

    if (!items && credits<=20) {
        setcartTitles(setNewTitles);
        setPrice(newPrice)
        setRemaining(newRemaining )
        setcredits(newCredit)
      }
      else{
        toast.error('Already you add this course');
      }
      

  }


  // const handletitleToRemaing=(coursecreate)=>{
  //       // console.log(coursecreate)
  //       setcreate(coursecreate)
  // }

  return (
    <div className="my-10 container mx-auto p-10 lg:p-4">
      <Header></Header>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full md:w-full lg:w-3/4">
          <Courses handaleTitle={handaleTitle}></Courses>
        </div>
        <div className="w-full md:w-full lg:w-1/4">
        {/* handletitleToRemaing={handletitleToRemaing} */}
            <Cart cartTitles={cartTitles} credits={credits} price={prices} Remaining={Remaining}></Cart>
        </div>
      </div>
      <Toaster/>
    </div>
  )
}
export default App
