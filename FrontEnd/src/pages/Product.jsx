import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import { useState } from "react";
import Counter from "../components/Counter";
import ProductCarousel from "../components/product/ProductCarousel";
import OtherProducts from "../components/product/OtherProducts";

const Product = () => {
    const params = useParams();
    const url = "/product/" + params["id"];
    const { data, error, loading } = useFetchData(url);

    const [selectedOption, setSelectedOption] = useState("onetime");

    if (loading)
        return (
            <div className="border-r border-l max-w-7xl p-8 text-center">
                Loading...
            </div>
        );
    if (error)
        return (
            <div className="border-r border-l max-w-7xl p-8 text-center text-red-500">
                Error: {error.message}
            </div>
        );

    return (
        <div className="max-w-7xl mx-auto border-r border-l">
            <div className="grid grid-cols-2 border-b">
                {/* Image Section */}
                <div className="bg-gray-100">
                    <img
                        src={`/images/products/${data.img}`}
                        alt={data.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
                        <span className="text-black">{data.category}</span> /{" "}
                        {data.name}
                    </p>

                    {/* Title */}
                    <h1 className="text-4xl font-light mb-6">
                        {data.name} - ${data.price}
                    </h1>

                    {/* Description */}
                    <p className="text-black text-sm leading-relaxed mb-8">
                        {data.description}
                    </p>

                    {/* Quantity */}
                    <div className="mb-8 flex items-center gap-3">
                        <p className="text-md font-medium ">Quantity</p>
                        <Counter />
                    </div>

                    {/* Vase Options */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-md font-medium">
                                Excellent Combination with:
                            </p>
                            <p className="text-sm text-gray-500">
                                Vase Not Included
                            </p>
                        </div>
                        <ProductCarousel />
                    </div>

                    {/* Price Options */}
                    <div className="mb-8">
                        <p className="text-md font-medium mb-4">
                            Price options
                        </p>

                        <div className="space-y-3">
                            {/* One-time purchase */}
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="priceOption"
                                    value="onetime"
                                    checked={selectedOption === "onetime"}
                                    onChange={(e) =>
                                        setSelectedOption(e.target.value)
                                    }
                                    className="w-4 h-4 accent-black text-black focus:ring-black focus:ring-offset-0"
                                />
                                <span className="text-sm">
                                    One time purchase. Price ${data.price}
                                </span>
                            </label>

                            {/* Subscribe option */}
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="priceOption"
                                    value="subscribe"
                                    checked={selectedOption === "subscribe"}
                                    onChange={(e) =>
                                        setSelectedOption(e.target.value)
                                    }
                                    className="w-4 h-4 accent-black text-black focus:ring-black focus:ring-offset-0"
                                />
                                <span className="text-sm">
                                    Subscribe now, and save 25% on this order.
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Add to Basket Button */}
                    <button className="w-full bg-black text-white py-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors">
                        Add to Basket
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center py-20 border-b">
                <h1 className="text-4xl">You may also like...</h1>
            </div>
            <div>
                <OtherProducts />
            </div>
        </div>
    );
};

export default Product;
