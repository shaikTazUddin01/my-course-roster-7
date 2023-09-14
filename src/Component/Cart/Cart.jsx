import CartTitles from '../CartTitles/CartTitles';
const Cart = ({cartTitles,credits,price}) => {
    return (
        <div className="mt-10 bg-white rounded-xl p-5">
        <div className="py-5 border-b-2">
            <h1 className="text-blue-500 text-xl font-semibold">Credit Hour Remaining 7 hr</h1>
          </div>
          <div className="border-b-2 py-5">
            <h1 className="text-2xl font-semibold">Course Name :</h1>
            <CartTitles cartTitles={cartTitles}></CartTitles>
            {/* <CartTitles></CartTitles> */}
          </div>
          <div className="border-b-2 py-5">
            <h2 className='font-semibold'>Total Credit Hour : {credits}</h2>
          </div>
          <div className=" py-5">
            <h2 className='font-semibold'>Total Price : {price} USD</h2>
          </div>

        </div>
    );
};

export default Cart;