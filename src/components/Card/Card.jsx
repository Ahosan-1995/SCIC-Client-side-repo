

const Card = ({ product }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl cursor-pointer rounded-none ">
                <figure className="w-full h-[350px] p-5 bg-gray-100">
                    <img className="h-full w-full "
                        src={product?.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    

                    <div className="">
                        <h2 className="card-title">{product?.name}</h2>
                        <p>Rating : <span className="text-blue-500 text-lg font-bold ml-5"> {product?.ratings}</span></p>
                    </div>
                    <p className="text-lg">
                       Brand : <span className="text-gray-600 font-semibold ml-5">{product?.brand} </span>
                    </p>
                    <p>{product?.description}</p>
                    <div className="card-actions justify-end  font-bold">
                        <p className="text-xl">Price : <span className="text-blue-500 text-xl">${product?.price}</span></p>
                        <button className="btn bg-blue-500 text-white text-lg border-none hover:bg-blue-800">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;