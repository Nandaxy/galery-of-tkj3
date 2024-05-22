import React from "react";
import { Link, useLocation } from "react-router-dom";

const MobileNavigation = () => {
    const location = useLocation();

    const getLinkClass = path => {
        return location.pathname === path
            ? "bg-gray-700 text-white rounded"
            : "text-gray-400";
    };

    return (
        <div className="z-10 fixed w-full bottom-0 right-0 bg-gray-800 py-2 px-14 block md:hidden shadow-xl ">
            <div className="flex justify-between items-center w-full">
                <Link to="/" className={`w-1/3 pt-2  ${getLinkClass("/")}`}>
                    <div className="flex flex-col justify-center items-center px-2 ">
                        <span className="block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm1-2h12l-3.75-5l-3 4L9 13zm-1 2V5z"
                                />
                            </svg>
                        </span>
                        <p className="text-[8px] mt-[1px]">Galery</p>
                    </div>
                </Link>
                <Link
                    to="/album"
                    className={`w-1/3 pt-2 ${getLinkClass("/album")}`}
                >
                    <div className="flex flex-col justify-center items-center px-2">
                        <span className="block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024c.947 1.024.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464c-.897.743-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743c-.897-.743-1.072-1.983-1.422-4.464z" />
                                    <path
                                        d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"
                                        opacity="0.5"
                                    />
                                    <circle
                                        cx="16.5"
                                        cy="11.5"
                                        r="1.5"
                                        opacity="0.5"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        d="m20 20l-2.884-2.149c-.93-.692-2.316-.761-3.34-.166l-.266.155c-.712.414-1.68.345-2.294-.164l-3.839-3.177c-.766-.634-1.995-.668-2.81-.078l-1.324.96"
                                        opacity="0.5"
                                    />
                                </g>
                            </svg>
                        </span>
                        <p className="text-[8px] mt-[1px]">Album</p>
                    </div>
                </Link>
                <Link to="#" className="w-1/3 pt-1">
                    <div className="flex flex-col justify-center items-center px-2 opacity-30">
                        <span className="block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M10 6.2C10 4.3 8.8 2.6 7 2v3.7H4V2c-1.8.6-3 2.3-3 4.2s1.2 3.6 3 4.2v11c0 .4.2.6.5.6h2c.3 0 .5-.2.5-.5v-11c1.8-.6 3-2.3 3-4.3M16 8s-.1 0 0 0c-3.9.1-7 3.2-7 7c0 3.9 3.1 7 7 7s7-3.1 7-7s-3.1-7-7-7m0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m-1-9v5l3.6 2.2l.8-1.2l-2.9-1.7V11z"
                                />
                            </svg>
                        </span>
                        <p className="text-[8px] mt-[1px]">Upcomming</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MobileNavigation;
