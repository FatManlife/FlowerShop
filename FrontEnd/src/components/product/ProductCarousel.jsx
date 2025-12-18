import { useFetchData } from "../../hooks/useFetchData";
import ProductCardCarousel from "../card/ProductCardCarousel";
import React from "react";

const ProductCarousel = () => {
    const { data, error, loading } = useFetchData("/product/recommendation/10");

    const scrollContainerRef = React.useRef(null);
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

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
        <div className="relative group">
            {/* Left Arrow */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Scroll left"
            >
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            {/* Carousel Container */}
            <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {data.map((product) => (
                    <ProductCardCarousel product={product} key={product.id} />
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Scroll right"
            >
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
};

export default ProductCarousel;
