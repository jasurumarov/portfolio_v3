import React, { useState, useEffect } from 'react';

// Images
import img1 from '../../assets/images/gradient-1.png';
import img2 from '../../assets/images/gradient-2.png';
import img3 from '../../assets/images/object-3d-1.png';
import img4 from '../../assets/images/object-3d-2.png';

const Background = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const translateX = (factor) => (position.x - window.innerWidth / 4) * factor;
    const translateY = (factor) => (position.y - window.innerHeight / 4) * factor;
    const rotate = (factor) => (position.x - window.innerWidth / 4) * factor;

    return (
        <div className="shapes">
            <div className="fixed -left-1/2 -top-1/2 animate-spin-very-slow xl:-left-[20%] xl:-top-1/3">
                <img src={img1} alt="Gradient 1" className="" />
            </div>

            <div className="fixed -right-[50%] top-[10%]  animate-spin-very-slow xl:-right-[15%] xl:top-[10%]">
                <img src={img2} alt="Gradient 2" className="" />
            </div>

            {/* Image 3 with slower movement and rotation */}
            <div
                className="move-with-cursor fixed left-[10%] top-[20%] "
                style={{
                    transition: 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)', // Slower transition
                    transform: `translate(${translateX(0.015)}px, ${translateY(0.02)}px) rotate(${rotate(0.01)}deg)`, // Slower movement and rotation
                }}
            >
                <img src={img3} alt="3D Object 1" className="" />
            </div>

            {/* Image 4 with slower movement and rotation */}
            <div
                className="move-with-cursor fixed bottom-[20%] right-[10%] "
                style={{
                    transition: 'transform 1.1s cubic-bezier(0.34, 1.56, 0.64, 1)', // Slower transition
                    transform: `translate(${translateX(0.01)}px, ${translateY(0.01)}px) rotate(${rotate(0.018)}deg)`, // Slower movement and rotation
                }}
            >
                <img src={img4} alt="3D Object 2" className="" />
            </div>
        </div>
    );
};

export default Background;
