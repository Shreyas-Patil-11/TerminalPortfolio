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

      case "ls":
        outputContent = (
          <ul>
            <li><span className="text-green-400">about</span><span className="text-white">: Displays the about section</span></li>
            <li><span className="text-green-400">education</span><span className="text-white">: Displays the education section</span></li>
            <li><span className="text-green-400">skills</span><span className="text-white">: Displays the skills section</span></li>
            <li><span className="text-green-400">projects</span><span className="text-white">: Displays the projects section</span></li>
            <li><span className="text-green-400">contact</span><span className="text-white">: Displays the contact section</span></li>
          </ul>
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
        <div className="flex flex-col sm:flex-row items-center">
          {/* Shreyas@detail ~ */}
          <p className="text-theme  sm:mr-2">
            Shreyas@detail ~
          </p>

          {/* Terminal input with $ symbol */}
          <form
            onSubmit={handleCommandSubmit}
            className=" flex items-center w-full sm:max-w-md"
          >
            <span className="text-blue-400">$</span>
            <input
              type="text"
              value={currentCommand}
              onChange={handleInputChange}
              className="bg-transparent text-white outline-none flex-grow pl-2 w-full sm:w-auto sm:max-w-md"
              placeholder="Type a command..."
            />
          </form>
        </div>

        {/* Terminal Output */}
        <div className={`terminal-content flex-grow overflow-y-auto  text-green-400 ${output ? "fade-in" : ""}`}>
          {output && (
            <div className="mb-2">
              <div className="text-green-400">{output}</div>
            </div>
          )}
        </div>

        {/* List of Commands */}
        <div className="command-list bg-gray-800 p-4 mt-4 text-white">
          <ul className="list-disc pl-5">
            <li>
              <span className="text-green-400">ls</span>: Lists all available commands.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
