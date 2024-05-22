import React from "react";

const Footer = () => {
    return (
        <footer className="text-[0.7em] text-white/60 pt-4 pb-16 px-4 text-center">
            <div className="container mx-auto space-y-1">
                <p>Dibuat Dengan ❤️ Oleh Secret</p>
                <p>
                    &copy; {new Date().getFullYear()} TKJ 3. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
