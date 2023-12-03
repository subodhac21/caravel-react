import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_pro } from '../../auth/productSlice';
const ViewProduct = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/get_products").then((response)=>{
            // console.log(response);
            dispatch(add_pro(response.data.arr));
            let arrPro = response.data.arr;
            // setProduct(arrPro);
        })
    },[]);  
const itemPro = useSelector((state)=>{
    return state.productReducer.products;
})
  return (
    <div>
      <h1 className='text-xl font-weight mb-8'>View products</h1>
      

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Product Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Product Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Product Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Product Discount
                </th>
                <th scope="col" className="px-6 py-3">
                    Added Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

    {
        itemPro.map((pro, id)=>{
            return (
                <>
                <tr key={id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {pro.name}
                    </th>
                    <td className="px-6 py-4">
                        {pro.quantity}
                    </td>
                    <td className="px-6 py-4">
                        {pro.price}
                    </td>
                    <td className="px-6 py-4">
                        {pro.cat_name}
                    </td>
                    <td className="px-6 py-4">
                        {pro.discount_id}
                    </td>
                    <td className="px-6 py-4">
                        {pro.created_at.substring(0, 10)}
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        <br/>
                        <a href="#" className="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</a>
                    </td>
                </tr>
                                </>
                            );
                        })
                    }
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ViewProduct
