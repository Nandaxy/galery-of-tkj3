import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Table from "./Table";

const ImageDetail = ({ image }) => {
    const [showTable, setShowTable] = useState(true);

    const toggleTable = () => {
        setShowTable(!showTable);
    };

    return (
        <div className="flex flex-col items-center bg-gray-800 rounded-md shadow-lg min-h-[90vh] mx-auto pt-2">
            <img
                src={image.src}
                alt="Detailed View"
                className="w-full h-auto  mb-8"
            />
            <motion.button
                onClick={toggleTable}
                className="text-white mb-4 ml-auto px-8 transition-all hover:opacity-70"
                animate={{ rotate: showTable ? 0 : 90 }}
            >
                {showTable ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="white"
                            d="M4 4V3H3v1zm7.293 8.707a1 1 0 0 0 1.414-1.414zM5 10V4H3v6zM4 5h6V3H4zm-.707-.293l8 8l1.414-1.414l-8-8z"
                        ></path>
                        <path
                            fill="white"
                            d="M4 20v1H3v-1zm7.293-8.707a1 1 0 0 1 1.414 1.414zM5 14v6H3v-6zm-1 5h6v2H4zm-.707.293l8-8l1.414 1.414l-8 8z"
                        ></path>
                        <path
                            fill="white"
                            d="M20 4V3h1v1zm-7.293 8.707a1 1 0 0 1-1.414-1.414zM19 10V4h2v6zm1-5h-6V3h6zm.707-.293l-8 8l-1.414-1.414l8-8z"
                        ></path>
                        <path
                            fill="white"
                            d="M20 20v1h1v-1zm-7.293-8.707a1 1 0 0 0-1.414 1.414zM19 14v6h2v-6zm1 5h-6v2h6zm.707.293l-8-8l-1.414 1.414l8 8z"
                        ></path>
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 2048 2048"
                        className="opacity-60"
                    >
                        <path
                            fill="white"
                            d="M1664 1664v-384h128v512h-512v-128zM1280 256h512v512h-128V384h-384zM256 768V256h512v128H384v384zm128 512v384h384v128H256v-512z"
                        ></path>
                    </svg>
                )}
            </motion.button>
            <motion.div
                className="overflow-x-auto w-full"
                animate={{ height: showTable ? "auto" : 0 }}
            >
                {showTable && <Table image={image} />}
            </motion.div>
        </div>
    );
};

export default ImageDetail;
