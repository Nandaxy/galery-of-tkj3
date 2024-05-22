import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllTags } from "../libs/getAllTags";
import { getRandomImageByTag } from "../libs/getRandomImageByTag";
import { ImageData } from "./ImageData.js";

const Album = () => {
    const [tags, setTags] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        const uniqueTags = getAllTags(ImageData);
        setTags(uniqueTags);
    }, []);

    const handleSortChange = event => {
        const order = event.target.value;
        setSortOrder(order);
        sortTags(order);
    };

    const sortTags = order => {
        const sortedTags = [...tags].sort((a, b) => {
            if (order === "asc") {
                return a.localeCompare(b);
            } else {
                return b.localeCompare(a);
            }
        });
        setTags(sortedTags);
    };

    const renderSkeleton = () => {
        const skeletonArray = Array.from({ length: 12 });
        return skeletonArray.map((_, index) => (
            <div key={index} className="shadow-md rounded-lg animate-pulse">
                <div className="w-[120px] h-[150px] bg-gray-700 rounded-md mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto"></div>
            </div>
        ));
    };

    const header = () => {
        return (
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl text-gray-100 font-semibold">
                    Album of TKJ 3
                </h1>
                <select
                    className="px-4 py-2 rounded-md bg-gray-800 text-white shadow-gray-100/10 shadow-lg transition-all hover:shadow-none hover:bg-gray-900"
                    onChange={handleSortChange}
                >
                    <option value="asc">Sort by A-Z</option>
                    <option value="desc">Sort by Z-A</option>
                </select>
            </div>
        );
    };

    const formatTag = tag => {
        return (
            tag.replace(/-/g, " ").charAt(0).toUpperCase() +
            tag.replace(/-/g, " ").slice(1)
        );
    };

    if (tags.length === 0) {
        return (
            <div className="px-4 py-8">
                {header()}
                <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-2">
                    {renderSkeleton()}
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="px-4 py-8">
                {" "}
                {header()}
                <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-2">
                    {tags.map(tag => {
                        const randomImageSrc = getRandomImageByTag(
                            tag,
                            ImageData
                        );
                        return (
                            <Link key={tag} to={`/album/${tag.toLowerCase()}`}>
                                <div className="shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
                                    <img
                                        src={
                                            randomImageSrc
                                                ? randomImageSrc
                                                : "https://via.placeholder.com/150"
                                        }
                                        alt={tag}
                                        className="w-[150px] h-[150px] object-cover rounded-md mb-2"
                                    /><p className="text-gray-100 text-center text-sm transition-colors duration-300 hover:text-blue-500">
    {formatTag(tag)}
</p>


                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Album;
