import { useQuery } from "@tanstack/react-query";


import { HashLoader } from "react-spinners";

import { useEffect, useState } from "react";

import useAxiosPublic from "../../Utils/useAxiosPublic";
import Card from "../Card/Card";



const AllProducts = () => {

    const [search, SetSearch] = useState('');
    const axiosPublic = useAxiosPublic();
    const [page, setPage] = useState(1);
    const [limit] = useState(6);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerpage = 6;

    const numberOfPages = Math.ceil(count / itemsPerpage);
    const pages = [];


    for (let i = 1; i <= numberOfPages; i++) pages.push(i);


    useEffect(() => {
        axiosPublic.get(`/productCount?search=${search}`)
            .then(data => setCount(data.data.length))
    }, [search])


    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['all-products-lists', page, limit, search],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/products?page=${page}&limit=${limit}&search=${search}`);
            return data
        }
    })



    const handlePageChange = (newPage) => {
        setPage(newPage);
        setCurrentPage(newPage)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        SetSearch(e.target.search.value);
    }



    if (isLoading) {
        return (
            <div>
                <div className="flex justify-center items-center h-screen">
                    <HashLoader color="blue" />
                </div>
            </div>
        )
    }
    return (
        <div className="mt-[110px] container mx-auto">


            <div>
                <div>
                    <form onSubmit={handleSearch} className="flex flex-col md:flex-row  items-center justify-center gap-5">
                        <div>
                            <input name="search" className="w-full py-3 px-5 border-blue-300 border outline-none" type="text" placeholder="product name" />
                        </div>
                        <button className="btn bg-blue-500 border-none text-white text-lg hover:bg-blue-800">Search</button>
                    </form>
                </div>
            </div>


            {
                products?.length > 0 ? <div className="pt-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-screen">
                        {
                            products?.map(product => <Card key={product._id} product={product}></Card>)
                        }
                    </div>
                    <div className="flex items-center mt-5">
                        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className="btn mr-2">Pre</button>

                        <span className="flex gap-4 ">
                            {
                                pages?.map((pageNo) => <button onClick={() => {
                                    setCurrentPage(pageNo)
                                    setPage(pageNo)
                                }} key={pageNo} className={`btn px-5 border-0 ${currentPage === pageNo ? 'bg-gray-400  text-white' : 'text-black'}   `}>{pageNo}</button>)
                            }
                        </span>
                        <button onClick={() => handlePageChange(page + 1)} disabled={currentPage === pages.length} className="btn ml-2">Next</button>
                    </div>
                </div> : <p className="text-6xl my-32 text-center">No Data found</p>
            }

        </div>
    );
};

export default AllProducts;