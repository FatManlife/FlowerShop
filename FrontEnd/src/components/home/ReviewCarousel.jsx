import { useState } from "react";

const reviews = [
    {
        text: "Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!",
        author: "Ronald Richards",
    },
    {
        text: "Beautiful arrangements and quick delivery. Will definitely order again!",
        author: "Sophia Brown",
    },
    {
        text: "Excellent service and gorgeous flowers. My friends loved them!",
        author: "James Wilson",
    },
];

export default function ReviewCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="w-full max-w-6xl mx-auto relative flex flex-col justify-center items-center h-34">
            <div className="pt-6 pb-6 text-center">
                <p className="text-lg italic mb-4 max-w-5xl">&quot;{reviews[currentIndex].text}&quot;</p>
                <p className="text-sm font-normal">- {reviews[currentIndex].author}</p>
            </div>

            {/* Navigation arrows */}
            <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 text-5xl"
            >
                ‹
            </button>
            <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 text-5xl"
            >
                ›
            </button>

            {/* Dots at the bottom */}
            <div className="absolute bottom-2 flex items-center justify-center space-x-1">
                {reviews.map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full ${idx === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}
                    ></span>
                ))}
            </div>
        </div>
    );

}
