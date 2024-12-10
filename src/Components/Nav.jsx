import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const words = ["Web Developer", "Web Designer", "Coder", "MERN Stack Developer"];

const Nav = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const word = words[currentWordIndex];
        let timeout;

        if (isTyping) {
            if (currentText.length < word.length) {
                timeout = setTimeout(() => {
                    setCurrentText(word.slice(0, currentText.length + 1));
                }, 100); // Typing speed
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 3000); // Pause before erasing
            }
        } else {
            if (currentText.length > 0) {
                timeout = setTimeout(() => {
                    setCurrentText(currentText.slice(0, -1));
                }, 50); // Erasing speed
            } else {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [currentText, isTyping, currentWordIndex]);

    return (
        <Link
            to="/"
            className="flex items-center justify-center flex-col"
            onClick={() => window.scrollTo(0, 0)}
        >
            <h1 className="text-white text-[36px] font-bold">Welcome to Shreyas Portfolio</h1>

            <p className="text-white text-[25px] font-semibold">
                {currentText}
                <span className={`cursor-line ${isTyping ? "blink" : ""}`}>|</span>
            </p>
        </Link>
    );
};

export default Nav;
