import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ImageModal = ({ image, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!image) return null;

    const handleShareLink = () => {
        const url = `${window.location.origin}/p/${image.id}`;
        if (navigator.share) {
            navigator
                .share({
                    title: "Bagiakan Fotonya",
                    url: url
                })
                .catch(console.error);
        } else {
            alert(
                "Sharing not supported on this browser. Link copied to clipboard!"
            );
            navigator.clipboard.writeText(url);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 backdrop-blur-sm"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-red-500 text-4xl font-bold p-2 rounded-full z-[100] "
                    >
                        &times;
                    </button>
                    <motion.div
                        className="bg-gray-800 p-4 rounded-md relative max-w-full max-h-full overflow-autoshadow-2xl shadow-white/10"
                        onClick={e => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <img
                            src={image.src}
                            alt="Selected"
                            className="w-full max-h-[60vh] object-cover"
                        />
                        <div className="flex justify-between pt-1 items-center">
                            <p className="mt-4 text-white text-center mb-2">
                                {new Date(image.date).toLocaleDateString(
                                    "id-ID",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric"
                                    }
                                )}
                            </p>
                            <div className="flex items-center justify-center space-x-3 px-4 ">
                                <Link
                                    to={`/p/${image.id}`}
                                    className="flex justify-center items-center"
                                >
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={30}
                                            height={30}
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                fill="none"
                                                stroke="white"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                color="white"
                                            >
                                                <path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045"></path>
                                                <path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </Link>
                                <button onClick={handleShareLink}>
                                    <span className="my-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={30}
                                            height={30}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="white"
                                                d="M6.747 4h3.464a.75.75 0 0 1 .102 1.493l-.102.007H6.747a2.25 2.25 0 0 0-2.245 2.095l-.005.155v9.5a2.25 2.25 0 0 0 2.096 2.244l.154.006h9.5a2.25 2.25 0 0 0 2.246-2.096l.005-.154v-.498a.75.75 0 0 1 1.493-.102l.007.102v.498a3.75 3.75 0 0 1-3.551 3.744l-.2.006h-9.5a3.75 3.75 0 0 1-3.745-3.551l-.005-.2v-9.5a3.75 3.75 0 0 1 3.55-3.744zh3.464zm7.754 2.52V3.75a.75.75 0 0 1 1.187-.61l.082.068l5.995 5.75c.28.269.305.7.076.998l-.076.085l-5.995 5.752a.75.75 0 0 1-1.262-.435l-.007-.107v-2.725l-.343.03c-2.4.25-4.7 1.331-6.915 3.26c-.52.453-1.322.025-1.237-.658c.665-5.32 3.447-8.251 8.196-8.619zV3.75zm1.5-1.012V7.25a.75.75 0 0 1-.75.75c-3.873 0-6.274 1.676-7.311 5.157l-.08.278l.353-.237C10.449 11.737 12.799 11 15.25 11a.75.75 0 0 1 .743.649l.007.101v1.743L20.162 9.5z"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageModal;
