import React from "react";
import { Link } from "react-router-dom";

const Table = ({ image }) => {
    const formatFileSize = bytes => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    return (
        <table className="min-w-full bg-gray-800">
            <thead>
                <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Attribute
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Value
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                        ID
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {image.id}
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                        Tanggal
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {new Date(image.date).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                        Ukuran File
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {formatFileSize(image.size)}
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                        Album
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {image.tags.map((tag, index) => (
                            <Link
                                key={index}
                                to={`/album/${tag}`}
                                className="text-gray-300 hover:underline mr-2"
                            >
                                {tag}
                            </Link>
                        ))}
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                        Url
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 hover:underline">
                        <Link
                            to={`${window.location.origin}/p/${image.id}`}
                        >{`${window.location.origin}/p/${image.id}`}</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
