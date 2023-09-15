import CartTitle from "../CartTitle/CartTitle";

const CartTitles = ({ cartTitles }) => {
    // console.log(cartTitles)

    return (
        <div>
           {cartTitles.map((carttitle,idx)=><CartTitle key={idx} count={idx+1} cartTitle={carttitle}></CartTitle>)}
        </div>
    );
};

export default CartTitles;