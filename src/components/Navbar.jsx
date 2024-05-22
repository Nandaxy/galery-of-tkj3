import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isDetailView = location.pathname.startsWith("/p/");

    const goBack = () => {
        navigate(-1);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    {isDetailView && (
                        <button
                            onClick={goBack}
                            className="mr-2 font-bold text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                        </button>
                    )}
                    <Link to="/" className="text-white text-lg font-bold">
                        Gallery Of TKJ 3
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">
                        Galery
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                        Album
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                        Services
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                        Tentang
                    </a>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden"
                    >
                        <Link
                            to="/"
                            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Galery
                        </Link>
                        <Link
                            to="/album"
                            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Album
                        </Link>
                        <Link
                            to="#"
                            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Tentang
                        </Link>
                        <Link
                            to="#"
                            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Sosial Media
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
