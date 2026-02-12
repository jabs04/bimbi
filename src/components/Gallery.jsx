import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

function Gallery() {
    const [showModal, setShowModal] = useState(false);
    const photos = Array.from({ length: 6 }, (_, i) => `/images/photo${i + 1}.jpg`);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <motion.div
            className="gallery-page"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* Floating hearts overlay */}
            <div className="hearts-overlay">
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="floating-heart"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 50,
                            opacity: 0
                        }}
                        animate={{
                            y: -100,
                            opacity: [0, 1, 1, 0],
                            x: Math.random() * window.innerWidth
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    >
                        💕
                    </motion.div>
                ))}
            </div>

            {/* Romantic message overlay */}
            <motion.div
                className="message-overlay"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <h2 className="romantic-message glow">
                    Happy Valentine's Day, my love.
                    <br />
                    Every moment with you is my favorite memory. 💖🌹
                </h2>
            </motion.div>

            {/* Photo gallery grid */}
            <motion.div
                className="gallery-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        className="gallery-item"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            zIndex: 10,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <img
                            src={photo}
                            alt={`Memory ${index + 1}`}
                            onError={(e) => {
                                e.target.src = `https://via.placeholder.com/400x400/ff6b9d/ffffff?text=Photo+${index + 1}`;
                            }}
                        />
                        <div className="image-overlay">
                            <span className="image-number">#{index + 1}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Don't Click Button */}
            <motion.div
                className="favorite-button-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <motion.button
                    className="favorite-button"
                    onClick={() => setShowModal(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    🚫 Don't Click It! It's My Fav Photo 🚫
                </motion.button>
            </motion.div>

            {/* Favorite Photos Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="modal-close"
                                onClick={() => setShowModal(false)}
                            >
                                ✕
                            </button>

                            <h3 className="modal-title">My Favorite Photos 💖</h3>

                            <div className="modal-photos">
                                <motion.div
                                    className="modal-photo-item"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <img
                                        src="/images/fav1.jpg"
                                        alt="Favorite 1"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/500x500/ff6b9d/ffffff?text=Fav+1';
                                        }}
                                    />
                                </motion.div>

                                <motion.div
                                    className="modal-photo-item"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <img
                                        src="/images/fav2.jpg"
                                        alt="Favorite 2"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/500x500/ff6b9d/ffffff?text=Fav+2';
                                        }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Gallery;
