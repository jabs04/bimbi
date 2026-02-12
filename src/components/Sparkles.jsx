import { useEffect, useState } from 'react';
import './Sparkles.css';

function Sparkles() {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const generateSparkles = () => {
            const newSparkles = Array.from({ length: 30 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 3,
                duration: 2 + Math.random() * 2
            }));
            setSparkles(newSparkles);
        };

        generateSparkles();
    }, []);

    return (
        <div className="sparkles-container">
            {sparkles.map((sparkle) => (
                <div
                    key={sparkle.id}
                    className="sparkle"
                    style={{
                        left: `${sparkle.x}%`,
                        top: `${sparkle.y}%`,
                        animationDelay: `${sparkle.delay}s`,
                        animationDuration: `${sparkle.duration}s`
                    }}
                >
                    ✨
                </div>
            ))}
        </div>
    );
}

export default Sparkles;
