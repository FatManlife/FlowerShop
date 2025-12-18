import { useFetchData } from "../hooks/useFetchData";
import { useParams } from "react-router-dom";
import ProductCard from "../components/card/ProductCard";
import { shopImg } from "../constants/img";

const Shop = () => {
    const params = useParams();
    let category;

    if (!params["category"]) {
        category = "/product/all";
    } else {
        category = "/product/" + params["category"];
    }

    const { data, error, loading } = useFetchData(category);

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
        <div className="border-r border-l max-w-7xl mx-auto">
            <div className="grid grid-cols-2 ">
                {/*Display*/}
                <div className="relative w-full h-160">
                    <img
                        src={shopImg.img1}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-white text-4xl font-bold">
                            {params["category"]
                                ? params["category"].toUpperCase()
                                : "ALL Products"}
                        </h2>
                    </div>
                </div>
                {/*Prouducts*/}
                <div>
                    <ul className="grid grid-cols-2">
                        {data.map((product, index) => (
                            <li
                                key={product.id}
                                className={`bg-gray-50 border-l border-b ${
                                    index >= data.length - 2 ? "border-b-0" : ""
                                }`}
                            >
                                <ProductCard product={product} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Shop;
