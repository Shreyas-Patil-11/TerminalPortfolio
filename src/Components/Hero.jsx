import { useState } from "react";
import Nav from "./Nav";

const Hero = () => {
  const [currentCommand, setCurrentCommand] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setCurrentCommand(e.target.value);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (currentCommand.trim() !== "") {
      processCommand(currentCommand.trim());
      setCurrentCommand("");
    }
  };

  

  const processCommand = (command) => {
    let outputContent = "";
    switch (command.toLowerCase()) {
      case "about":
        outputContent = (
          <div>
            <h1>Welcome to Shreyas portfolio!</h1>
            <p>This is an interactive terminal-style portfolio.</p>
          </div>
        );
        break;

      case "education":
        outputContent = (
          <div>Bachelor&lsquo;s in Computer Science, XYZ University</div>
        );
        break;

      case "skills":
        outputContent = (
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Docker</li>
          </ul>
        );
        break;

      case "projects":
        outputContent = (
          <ul>
            <li>WorkoutHub</li>
            <span>This is the website of workout hub</span>
            <li>E-commerce</li>
            <span>This is the website of workout hub</span>
          </ul>
        );
        break;

      case "contact":
        outputContent = (
          <div>
            <h1>Contact Me</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nam nemo quo
              molestiae corporis laborum neque sequi vero rerum itaque.
            </p>
          </div>
        );
        break;

      default:
        outputContent = `Command not found: ${command}`;
    }
    setOutput(outputContent);
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col">
      <Nav />

      <div className="border border-gray-600 rounded-lg bg-gray-900 p-4 mt-4">
        {/* Terminal Input */}
        <form
          onSubmit={handleCommandSubmit}
          className=" border-gray-600 pt-2 flex items-center"
        >
          <span className="text-theme font-mono">
            Shreyas@detail ~ <span className="text-blue-400">$</span>
          </span>
          <input
            type="text"
            value={currentCommand}
            onChange={handleInputChange}
            className="bg-transparent text-white outline-none flex-grow pl-2 font-mono"
            placeholder="Type a command..."
          />
        </form>


        {/* Terminal Output */}
        <div className={`terminal-content flex-grow overflow-y-auto font-mono text-green-400 ${output ? "fade-in" : ""}`}>
          {output && (
            <div className="mb-2">
              <div className="text-green-400">{output}</div>
            </div>
          )}
        </div>




        {/* List of Commands */}
        <div className="command-list bg-gray-800 p-4 mt-4 text-white">
          <h2 className="font-bold text-xl">Available Commands:</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="text-green-400">about</span>: Displays the about section code.
            </li>
            <li>
              <span className="text-green-400">education</span>: Displays the education section code.
            </li>
            <li>
              <span className="text-green-400">skills</span>: Displays the skills section code.
            </li>
            <li>
              <span className="text-green-400">projects</span>: Displays the projects section code.
            </li>
            <li>
              <span className="text-green-400">contact</span>: Displays the contact section code.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;