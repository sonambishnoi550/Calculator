import React from 'react'
import { useState } from "react";
const Calculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput("Error");
        }
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <input
                    type="text"
                    value={input}
                    readOnly
                    className="w-full mb-4 p-2 text-right text-black text-xl border rounded-lg"
                />
                <div className="grid grid-cols-4 gap-2">
                    {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((button) => (
                        <button
                            key={button}
                            onClick={() => (button === "=" ? handleCalculate() : handleClick(button))}
                            className="p-4 text-xl text-black bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                            {button}
                        </button>
                    ))}
                    <button
                        onClick={handleClear}
                        className="col-span-4 p-4 text-xl bg-red-500 text-black rounded-lg hover:bg-red-600"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Calculator