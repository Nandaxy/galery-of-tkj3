import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = ({ message }) => {
    console.log(message);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <h1 className="text-6xl font-bold text-white">Error 404!</h1>
            <p className="mt-4 text-lg text-gray-200">
                {message ? message : "Sepertinya Anda Tersesat!"}
            </p>
            <Link
                to="/"
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md transition-colors hover:bg-blue-700"
            >
                Kembali
            </Link>
        </div>
    );
};

export default NotFoundPage;
