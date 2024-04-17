import axios from 'axios'
import { useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);
    const [discount, setDiscount] = useState('');
    const [quantity, setQuantity] = useState('');
    const [featured, setFeatured] = useState(false);
    const [special, setSpecial] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append("file", file)
        formData.append("productName", productName)
        formData.append("category", category)
        formData.append("price", price)
        formData.append("quantity", quantity)
        formData.append("discount", discount)
        formData.append("featured", featured)
        formData.append("special", special)
        try {
            const response = await axios.post("http://localhost:5001/api/product/addproduct", formData)
            console.log(response);
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <div className="flex flex-col h-screen ">
            <h1 className='capitalize mt-4 text-3xl font-bold flex justify-center '>Add your product</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-2  gap-4 w-[600px] m-auto '>
                <div className="">
                    <label htmlFor="productName" className="block mb-2">Product Name</label>
                    <input
                        type="text"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div className="">
                    <label htmlFor="category" className="block mb-2">Category</label>

                    <select value={category} onChange={(e) => setCategory(e.target.value)}
                        className='w-full p-2 border border-gray-400'
                    >
                        <option>Select Category</option>
                        <option value="male">Male Fashion</option>
                        <option value="female">Female Fashion</option>
                        <option value="electronics">Electronics</option>
                        <option value="Cosmotics">Cosmotics</option>
                        <option value="Jewlery">Jewlery</option>
                        <option value="other">Others</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="price" className="block mb-2">Price</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full border border-gray-300 rounded p-2"
                    />
                </div>

                <div className="">
                    <label htmlFor="discount" className="block mb-2">Discount</label>
                    <input
                        type="number"
                        id="discount"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        className="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div className="">
                    <label htmlFor="quantity" className="block mb-2">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full border border-gray-300 rounded p-2"
                    />
                </div>

                <div className="flex justify-between">
                    <div className="mb-4">
                        <label className="block mb-2">Featured</label>
                        <div>
                            <label className="mr-2">
                                <input
                                    type="radio"
                                    value="true"
                                    checked={featured}
                                    onChange={(e) => setFeatured(e.target.value === 'true')}
                                    className="mr-1"
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="false"
                                    checked={!featured}
                                    onChange={(e) => setFeatured(e.target.value === 'true')}
                                    className="mr-1"
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <label className="block mb-2">Special</label>
                        <div>
                            <label className="mr-2">
                                <input
                                    type="radio"
                                    value="true"
                                    checked={special}
                                    onChange={(e) => setSpecial(e.target.value === 'true')}
                                    className="mr-1"
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="false"
                                    checked={!special}
                                    onChange={(e) => setSpecial(e.target.value === 'true')}
                                    className="mr-1"
                                />
                                No
                            </label>
                        </div>
                    </div>

                </div>
                <div className="flex items-center">
                    <label htmlFor="file" className="block mb-2">
                        <BiSolidImageAdd size={50} fill='darkgreen' />
                    </label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className=" hidden"
                    />
                    {file?.name}
                </div>

                <button type="submit" className="bg-blue-500 text-white h-14 px-4 rounded">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;