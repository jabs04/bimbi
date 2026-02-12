import { useState } from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';

function LandingPage({ onYesClick, onNoClick }) {
    const [noClickCount, setNoClickCount] = useState(0);

    const handleNoClick = () => {
        setNoClickCount(prev => prev + 1);
        onNoClick();
    };

    // Calculate button sizes based on NO clicks
    // YES button grows, NO button shrinks until it disappears
    // When NO disappears, YES expands to cover the whole screen
    const noScale = Math.max(0, 1 - (noClickCount * 0.2));
    const noOpacity = noScale > 0.1 ? 1 : 0; // Hide when too small
    const yesScale = noOpacity === 0 ? 8 : 1 + (noClickCount * 0.3);

    return (
        <motion.div
            className="landing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
        >
            <div className="landing-content">
                <motion.div
                    className="romantic-card"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.2
                    }}
                >
                    <motion.h1
                        className="question glow"
                        animate={{
                            scale: [1, 1.02, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Will you be my Valentine? 💖
                    </motion.h1>

                    {noClickCount > 0 && (
                        <motion.p
                            className="hint-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {noClickCount === 1 && "Are you sure? 🥺"}
                            {noClickCount === 2 && "Really? Think about it... 💭"}
                            {noClickCount === 3 && "The NO button is shrinking... 👀"}
                            {noClickCount === 4 && "It's getting smaller... 😏"}
                            {noClickCount >= 5 && noOpacity > 0 && "Almost gone! Just say YES! 💕"}
                            {noOpacity === 0 && "The NO button has vanished! Only YES remains! 💖"}
                        </motion.p>
                    )}

                    <div className="button-container">
                        <motion.button
                            className="yes-button"
                            onClick={onYesClick}
                            style={{ scale: yesScale }}
                            whileHover={{ scale: yesScale * 1.05 }}
                            whileTap={{ scale: yesScale * 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            ✅ YES
                        </motion.button>

                        <motion.button
                            className="no-button"
                            onClick={handleNoClick}
                            style={{
                                scale: noScale,
                                opacity: noOpacity,
                                pointerEvents: noOpacity === 0 ? 'none' : 'auto'
                            }}
                            animate={noClickCount > 0 ? {
                                x: [0, -10, 10, -10, 10, 0],
                                rotate: [0, -5, 5, -5, 5, 0]
                            } : {}}
                            whileHover={{ scale: noScale * 1.05 }}
                            whileTap={{ scale: noScale * 0.95 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                x: { duration: 0.5 },
                                rotate: { duration: 0.5 }
                            }}
                        >
                            ❌ NO
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default LandingPage;
