import './FloatingPetals.css';

function FloatingPetals() {
    const petals = Array.from({ length: 20 });

    return (
        <div className="petals-container">
            {petals.map((_, index) => (
                <div
                    key={index}
                    className="petal"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${10 + Math.random() * 10}s`,
                        fontSize: `${1 + Math.random() * 1.5}rem`,
                        opacity: 0.6 + Math.random() * 0.4
                    }}
                >
                    🌹
                </div>
            ))}
        </div>
    );
}

export default FloatingPetals;
