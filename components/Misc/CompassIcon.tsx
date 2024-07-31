import * as React from "react"
import {useEffect, useState} from "react";

function CompassIcon({index, ...props}: { index: number }) {

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const {clientX, clientY} = event;

            const angle = Math.atan2(clientY - index, clientX - index);
            const degrees = angle * (180 / Math.PI);

            setRotation(degrees + index * 30); // Add offset based on index
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [index]);

    return (
        <svg
            style={{
                margin: '5px',
                width:'40px',
                transform: `rotate(${rotation-45}deg)`,
                transition: 'transform 0.1s ease-out',
            }}
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            {...props}
        >
            <g
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth={12}
                clipPath="url(#a)"
            >
                <path
                    strokeLinecap="round"
                    d="M22 170l47.906-78.702a64 64 0 0121.392-21.392L170 22l-47.906 78.702a63.984 63.984 0 01-21.392 21.392L22 170z"
                />
                <path d="M78 78l36 36"/>
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h192v192H0z"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default CompassIcon
