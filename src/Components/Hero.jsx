import { useState, useEffect } from "react";
import Nav from "./Nav";


const Hero = () => {
  const [currentCommand, setCurrentCommand] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [spinner, setSpinner] = useState("|");

  useEffect(() => {
    if (isLoading) {
      const spinnerCharacters = ["|", "/", "-", "\\"];
      let index = 0;

      const interval = setInterval(() => {
        setSpinner(spinnerCharacters[index]);
        index = (index + 1) % spinnerCharacters.length;
      }, 200); // Change spinner character every 200ms

      return () => clearInterval(interval);
    }
  }, [isLoading]);

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
    setIsLoading(true);
    setLoadingMessage("Finding package");

    setTimeout(() => {
      let outputContent = "";
      let isValidCommand = true; // Track if the command is valid

      switch (command.toLowerCase()) {
        case "about":
          outputContent = (
            <div>
              <p>I&apos;m <span className="text-white">Shreyas Patil</span>, a passionate Full Stack Developer specializing in building scalable and innovative web applications using the MERN stack. I thrive at the intersection of creativity and problem-solving to deliver user-focused solutions.</p>
              <p>Currently diving deeper into Docker and advanced cloud strategies, I aim to develop robust, distributed systems that solve real-world challenges. Outside of tech, I enjoy contributing to open source and participating in hackathons to refine my creative and collaborative skills.</p>
            </div>
          );
          break;

        case "education":
          outputContent = (
            <div>
              <h1>Bachelor of Technology in Computer Science</h1>
              <h3><i>Rajarambapu Institute of Technology</i></h3>
              <span>2022 – 2026</span>
              <p>Relevant Coursework: Data Structures & Algorithms, Web Development, Cloud Computing, Software Engineering, Operating System</p>
            </div>
          );
          break;

        case "skills":
          outputContent = (
            <div>
              <div className="border border-bold rounded-lg bg-gray-900 p-4 mt-4">
                <div className="underline underline-offset-4 text-yellow-400">Technical Skills</div>
                <ul >
                  <li>Programming Languages: <span className="text-white">JavaScript, HTML, CSS, C++</span></li>
                  <li>Frameworks & Libraries: <span className="text-white">React.js, Node.js, Express.js, Next.js, Material UI</span></li>
                  <li>Databases & Storage: <span className="text-white">MongoDB, MySQL</span></li>
                  <li>Cloud & Deployment: <span className="text-white">AWS, Docker, Kubernetes, Vercel</span></li>
                  <li>Version Control & Dev Tools: <span className="text-white">Git, GitHub, NPM</span></li>
                </ul>
              </div>

              <div className="border border-bold rounded-lg bg-gray-900 p-4 mt-4">
                <div className="underline underline-offset-4 text-yellow-400">Soft Skills</div>
                <ul>
                  <li>Strong problem-solving abilities</li>
                  <li>Time management and project planning</li>
                  <li>Ability to work in fast-paced, team-oriented environments</li>
                </ul>
              </div>
            </div>
          );
          break;

        case "projects":
          outputContent = (
            <div>
              <div className="project">

                <div className="project-1 border border-bold rounded-lg bg-gray-900 p-4 mt-4">
                  <h1 className="underline underline-offset-4 text-yellow-400">NPM Package (hooks-library-react)</h1>
                  <i >A collection of custom React hooks to streamline common functionality such as data fetching, debouncing, local storage management, and more.</i>
                  <p>Description: <span className="text-white">Developed an npm package hooks-library-react that includes reusable custom React hooks for various common tasks. The library is designed to simplify development by providing easy-to-use hooks that can be integrated into any React application.</span></p>
                  <span>Key Features</span>
                  <ul>
                    <li className="text-white">1. <i>useDataFetch</i>: Custom hook for fetching data from APIs with loading, error, and success states.</li>
                    <li className="text-white">2. <i>useDebounce</i>: Custom hook for debouncing input fields or functions to optimize performance.</li>
                    <li className="text-white">3. <i>useLocalStorage</i>:  A hook to easily manage local storage with automatic syncing.</li>
                    <li className="text-white">4. <i>usePrevious</i>: A hook to keep track of previous values for comparison.</li>
                  </ul>
                  <a href="https://www.npmjs.com/package/hooks-library-react" target="_blank"><span className="underline underline-offset-4">Website Link</span> <span className="text-white"> npmjs.com/package/hooks-library-react</span></a>
                </div>



                <div className="project-2 border border-bold rounded-lg bg-gray-900 p-4 mt-4">
                  <h1 className="underline underline-offset-4 text-yellow-400">E-commerce Website: StyleSavvy</h1>
                  <i >A complete e-commerce platform featuring both a customer-facing client side and a powerful admin panel for product management and analytics.</i>
                  <p>Description: <span className="text-white"> Designed and developed an e-commerce platform with two distinct sides</span>
                    <ul className="text-white">
                      <li>Client Side: Provides users with a smooth and interactive shopping experience, allowing them to browse products, add items to their cart, and complete secure purchases.</li>
                      <li>Admin Side: Allows admins to manage product listings, and track orders</li>
                    </ul>
                  </p>
                  <div>
                    <span>Key Features</span>
                    <ul>
                      <div>
                        <span className="text-white underline underline-offset-4">Client Side</span>
                        <ul className="text-white">
                          <li>1. Real-time shopping cart updates</li>
                          <li>2. User authentication and order tracking</li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-white underline underline-offset-4">Admin Side</span>
                        <ul className="text-white">
                          <li>1. Product management: add, update, delete, and categorize products</li>
                          <li>2. Order management</li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                  <div>
                    <h1>Website Links</h1>
                    <a href="https://stylsavvy.vercel.app/" target="_blank"><span className="underline underline-offset-4">Client Side</span> <span className="text-white"> stylsavvy.vercel.app/</span></a><br />
                    <a href="https://stylesavvyadmin.vercel.app/" target="_blank"><span className="underline underline-offset-4">Admin Side</span> <span className="text-white"> stylesavvyadmin.vercel.app/</span></a>
                  </div>
                </div>


                <div className="project-3 border border-bold rounded-lg bg-gray-900 p-4 mt-4">
                  <h1 className="underline underline-offset-4 text-yellow-400">Fitness Website: WorkOutHub</h1>
                  <i >An AI-powered fitness platform that provides workout routines, instructional GIFs, and health tracking tools</i>
                  <p>Description: <span className="text-white"> Developed a web-based fitness platform offering 1,000+ exercise GIFs, BMI calculators, and personalized workout recommendations. Integrated AI to suggest similar exercises and YouTube fitness content.</span></p>
                  <span>Key Features</span>
                  <ul>
                    <li className="text-white">1. Personalized workout plans based on user goals</li>
                    <li className="text-white">2. Real-time BMI calculation with AI-powered insights</li>
                  </ul>
                  <a href="https://workouthub.vercel.app/" target="_blank"><span className="underline underline-offset-4">Website Link</span> <span className="text-white"> workouthub.vercel.app/</span></a>
                </div>

              </div>
            </div>
          );
          break;

        case "contact":
          outputContent = (
            <div>
              <h1>Contact Me</h1>
              <p>Email: <a href="mailto:shreyaspatil1311@gmail.com" target="_blank"><span className="text-white">: shreyaspatil1311@gmail.com</span></a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/shreyas-patil11/" target="_blank"><span className="text-white">: linkedin.com/in/shreyas-patil11/</span></a></p>
              <p>GitHub: <a href="https://github.com/Shreyas-Patil-11" target="_blank"><span className="text-white">: github.com/Shreyas-Patil-11</span></a></p>
            </div>
          );
          break;

        case "ls":
          outputContent = (
            <ul>
              <span className="flex justify-center text-center">All available commands</span>
              <li>
                <span className="text-green-400">about</span>
                <span className="text-white">: Learn about my journey and passion for web development</span>
              </li>
              <li>
                <span className="text-green-400">education</span>
                <span className="text-white">: Explore my academic background and expertise</span>
              </li>
              <li>
                <span className="text-green-400">skills</span>
                <span className="text-white">: Discover the technologies I specialize in.</span>
              </li>
              <li>
                <span className="text-green-400">projects</span>
                <span className="text-white">: Check out the impactful projects I&apos;ve built.</span>
              </li>
              <li>
                <span className="text-green-400">contact</span>
                <span className="text-white">: Reach out for collaborations or inquiries</span>
              </li>
            </ul>
          );
          break;

        default:
          isValidCommand = false; // Mark as invalid
          outputContent = (
            <div >
              <p className="text-red-400">Package not found: <span className="text-white">{command}</span></p>
              <p>To know available commands type <span className="text-white">ls</span> command</p>
            </div>
          );
          break;
      }

      if (isValidCommand) {
        setLoadingMessage(
          <div>
            <p>Package installed </p>
            <p>found 0 vulnerabilities</p>
          </div>
        );
        setTimeout(() => {
          setOutput(outputContent);
          setIsLoading(false);
        }, 3000); // Show "Dependencies installed" for 2 seconds
      } else {
        setOutput(outputContent);
        setIsLoading(false);
      }
    }, 3000); // Show "...... loading" for 3 seconds
  };



  return (
    <div className="bg-black text-white h-screen flex flex-col">
      <Nav />

      <div className="snake-border rounded-lg bg-gray-900 p-4 mt-4 sm:px-1 md:px-4">
        {/* Terminal Input */}
        <div className="flex flex-col sm:flex-row items-center">
          {/* Shreyas@detail ~ */}
          <p className="text-theme sm:mr-2">Shreyas@detail <span className="font-mono">~</span></p>

          {/* Terminal input with $ symbol */}
          <form
            onSubmit={handleCommandSubmit}
            className="flex items-center w-full sm:max-w-md"
          >
            <span className="text-blue-400">$ npm install </span>
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
        <div
          className={`terminal-content text-left flex-grow overflow-y-auto ${output ? "fade-in" : ""
            }`}
          style={{ fontSize: "1rem" }} // Increased font size and line height
        >
          {isLoading ? (
            <div className="flex items-center mt-4">
              <span className="text-yellow-400">{loadingMessage} {spinner}</span>
            </div>
          ) : (
            output && (
              <div className="mt-4">
                <div className="text-green-400">{output}</div>
              </div>
            )
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
