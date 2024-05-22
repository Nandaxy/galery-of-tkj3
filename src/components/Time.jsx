import React, { useState, useEffect } from "react";

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const getGreeting = () => {
        const hours = currentTime.getHours();
        if (hours < 12) return "Selamat Pagi";
        if (hours < 15) return "Selamat Siang";
        if (hours < 18) return "Selamat Sore";
        return "Selamat Malam";
    };

    const formatDate = date => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        return date.toLocaleDateString("id-ID", options);
    };

    const formatTime = date => {
        return date.toLocaleTimeString("id-ID", { hour12: false });
    };

    return (
        <div className="w-full flex items-center justify-between px-3 py-3">
            <div>
                <h2 className="font-semibold">
                    Assalamualaikum, {getGreeting()}
                </h2>
                <p className="text-sm">{formatDate(currentTime)}</p>
            </div>
            <div>
                <h3 className="text-2xl font-bold">
                    {formatTime(currentTime)}
                </h3>
            </div>
        </div>
    );
};

export default Time;
