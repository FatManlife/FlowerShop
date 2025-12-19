import { useState } from "react";

const Counter = ({ val, onChange }) => {
    return (
        <div className="inline-flex border border-black items-center">
            <button
                onClick={() => onChange((prev) => (prev > 0 ? prev - 1 : 0))}
                className="flex items-center justify-center w-11 h-11 text-3xl font-thin border-r"
            >
                −
            </button>

            <p className="px-6 text-lg font-normal select-none">{val}</p>

            <button
                onClick={() => onChange((prev) => prev + 1)}
                className="flex items-center justify-center w-11 h-11 text-3xl font-thin border-l"
            >
                +
            </button>
        </div>
    );
};

export default Counter;
