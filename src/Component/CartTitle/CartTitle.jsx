
const CartTitle = ({cartTitle , count}) => {
    const{title}=cartTitle

    // console.log(title)
    return (
        <div>
            <h1 className='text-[#444343] font-semibold text-[16px] mb-1'>{count}.{title}</h1>
        </div>
    );
};

export default CartTitle;