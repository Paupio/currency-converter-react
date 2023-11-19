import React, { useState, useEffect } from "react";
import "./style.css";

const formatDate = (date) =>
    date.toLocaleString(undefined, {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        day: "numeric",
        month: "long",
    });

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="clock">
            Dzisiaj jest {formatDate(date)}
        </div>
    )
};

export default Clock;