# TerminalPortfolio



// import { useState, useEffect } from "react";
// import Nav from "./Nav";

// const Hero = () => {
//   const [currentCommand, setCurrentCommand] = useState("");
//   const [outputQueue, setOutputQueue] = useState([]); // Queue of elements to process
//   const [typedOutput, setTypedOutput] = useState([]); // Final output after typing
//   const [currentText, setCurrentText] = useState(""); // Current typing text
//   const [currentIndex, setCurrentIndex] = useState(0); // Current character index
//   const [isTyping, setIsTyping] = useState(false);

//   const handleInputChange = (e) => {
//     setCurrentCommand(e.target.value);
//   };

//   const handleCommandSubmit = (e) => {
//     e.preventDefault();
//     if (currentCommand.trim() !== "") {
//       processCommand(currentCommand.trim());
//       setCurrentCommand("");
//     }
//   };

//   const processCommand = (command) => {
//     let commandOutput = [];
//     switch (command.toLowerCase()) {
//       case "about":
//         commandOutput = [<p>This is an interactive terminal-style portfolio.</p>];
//         break;

//       case "education":
//         commandOutput = [<p>Bachelor’s in Computer Science, XYZ University</p>];
//         break;

//       case "skills":
//         commandOutput = [
//           <ul>
//             <li>React</li>
//             <li>JavaScript</li>
//             <li>Node.js</li>
//             <li>MongoDB</li>
//             <li>Docker</li>
//           </ul>,
//         ];
//         break;

//       case "projects":
//         commandOutput = [
//           <ul>
//             <li>
//               WorkoutHub - <span>This is the website of WorkoutHub.</span>
//             </li>
//             <li>
//               E-commerce - <span>This is an online shopping platform.</span>
//             </li>
//           </ul>,
//         ];
//         break;

//       case "contact":
//         commandOutput = [
//           <div>
//             <h1>Contact Me</h1>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
//           </div>,
//         ];
//         break;

//       case "ls":
//         commandOutput = [
//           <ul>
//             <li>about: Displays the about section</li>
//             <li>education: Displays the education section</li>
//             <li>skills: Displays the skills section</li>
//             <li>projects: Displays the projects section</li>
//             <li>contact: Displays the contact section</li>
//           </ul>,
//         ];
//         break;

//       default:
//         commandOutput = [<p>Command not found: {command}</p>];
//     }

//     setOutputQueue(commandOutput);
//     setIsTyping(true);
//     setCurrentIndex(0);
//     setCurrentText(""); // Reset current text for typing
//   };

//   useEffect(() => {
//     if (isTyping && outputQueue.length > 0) {
//       const currentElement = outputQueue[0];
//       const textContent = extractTextFromElement(currentElement);

//       if (currentIndex < textContent.length) {
//         const timeout = setTimeout(() => {
//           setCurrentText((prev) => prev + textContent[currentIndex]);
//           setCurrentIndex((prevIndex) => prevIndex + 1);
//         }, 50); // Typing speed
//         return () => clearTimeout(timeout);
//       } else {
//         // Typing for current element is complete
//         setTypedOutput((prev) => [...prev, outputQueue[0]]);
//         setOutputQueue((prev) => prev.slice(1)); // Remove first element
//         setCurrentText("");
//         setCurrentIndex(0);

//         if (outputQueue.length === 1) {
//           setIsTyping(false); // Typing complete
//         }
//       }
//     }
//   }, [isTyping, outputQueue, currentIndex]);

//   const extractTextFromElement = (element) => {
//     if (typeof element === "string") return element;
//     if (Array.isArray(element)) return element.map(extractTextFromElement).join("");
//     if (element?.props?.children) {
//       return extractTextFromElement(element.props.children);
//     }
//     return "";
//   };

//   return (
//     <div className="bg-black text-white h-screen flex flex-col">
//       <Nav />

//       <div className="border border-gray-600 rounded-lg bg-gray-900 p-4 mt-4">
//         {/* Terminal Input */}
//         <form onSubmit={handleCommandSubmit} className="flex items-center">
//           <span className="text-theme font-mono">
//             Shreyas@detail ~ <span className="text-blue-400">$</span>
//           </span>
//           <input
//             type="text"
//             value={currentCommand}
//             onChange={handleInputChange}
//             className="bg-transparent text-white outline-none flex-grow pl-2 font-mono"
//             placeholder="Type a command..."
//           />
//         </form>

//         {/* Terminal Output */}
//         <div className="terminal-content flex-grow overflow-y-auto font-mono text-green-400 mt-4">
//           {/* Render completed typed output*/}
//           {typedOutput.map((element, index) => (
//             <div key={index} className="text-left">
//               {element}
//             </div>
//           ))}

//           {/* Render typing animation */}
//           {/* {isTyping && <p className="text-left">{currentText}</p>} */}
//           {/* <div className="terminal-content flex-grow overflow-y-auto font-mono text-green-400 mt-4"> */}
//             {/* Render completed typed output with fade-in animation */}
//             {/* {typedOutput.map((element, index) => (
//               <div key={index} className="text-left  animate-typing">
//                 {element}
//                 <span className="cursor-blink">|</span>
//               </div>
//             ))} */}

//             {/* Render typing animation */}
//             {isTyping && (
//               <p className="text-left animate-typing">
//                 {currentText}
//                 <span className="cursor-blink">|</span>
//               </p>
//             )}
//           </div>

//         </div>
//       </div>
//     // </div>
//   );
// };

// export default Hero;

