import { useEffect, useState } from 'react';
import CartTitles from '../CartTitles/CartTitles';
import toast, { Toaster } from 'react-hot-toast';

const Cart = ({ cartTitles, credits, price, Remaining  }) => {
  // const [previousRemaining, setPreviousRemaining] = useState(Remaining);
  // useEffect(() => {
  //   if (Remaining < 0 && credits > 20) {
  //     toast.error('You never get any other course');
  //   }
  //   // setPreviousRemaining(Remaining);
  // }, [Remaining]);

    return (
      (
          <div className="mt-10 bg-white rounded-xl p-5">
          <div className="py-5 border-b-2">
            <h1 className="text-blue-500 text-xl font-semibold">Credit Hour Remaining { Remaining } hr</h1>
          </div>
          <div className="border-b-2 py-5">
            <h1 className="text-2xl font-semibold mb-2">Course Name :</h1>
            <CartTitles cartTitles={cartTitles} />
          </div>
          <div className="border-b-2 py-5">
            <h2 className='font-semibold'>Total Credit Hour : {credits}</h2>
          </div>
          <div className=" py-5">
            <h2 className='font-semibold'>Total Price : {credits<=20 && price} USD</h2>
          </div>
          <Toaster />
        </div>   
        )
      
    )
  }
  
// }



export default Cart;