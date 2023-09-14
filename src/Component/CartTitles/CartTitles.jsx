import CartTitle from "../CartTitle/CartTitle";

const CartTitles = ({ cartTitles }) => {
    console.log(cartTitles)

    return (
        <div>
           {cartTitles.map(carttitle=><CartTitle cartTitle={carttitle}></CartTitle>)}
        </div>
    );
};

export default CartTitles;