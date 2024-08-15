import '../styles/styles.css';
import {useRef, useEffect, useState} from 'react';
import {useImageAnalyzerContext} from "../context/context.jsx";
import Marked from 'marked-react';
import {toast} from 'react-toastify';

const Main = () => {

    const notify = (errorMessages) => {
        toast.error(errorMessages, {
            draggable: true,
            autoClose: 2000,
            hideProgressBar: true
        });
    };

    const {questionAsk, isLoading} = useImageAnalyzerContext();

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [selectedFile, setSelectedFile] = useState(null); // State for storing the uploaded file

    const fileInputRef = useRef(null); // Reference to hidden file input
    const textareaRef = useRef(null);

    const postQuestion = async () => {
        if (selectedFile === null) {
            notify("Please upload a file");
            return;
        }

        if (inputValue === "") {
            notify("Enter a question please");
            return;
        }
        var userInput = inputValue;
        setInputValue("");
        // Add user message to messages state
        setMessages([...messages, {type: 'user', text: userInput}]);

        const formData = new FormData();
        formData.append('question', userInput.toString());

        if (selectedFile) {
            formData.append('file', selectedFile);
        }

        const responseAnswer = await questionAsk(formData);

        // Add response message to messages state
        setMessages([...messages, {type: 'user', text: userInput}, {type: 'response', text: responseAnswer.answer}]);

        // setInputValue(""); // Clear the input value after submission
        // setSelectedFile(null); // Commented out to keep the file for subsequent questions
        // fileInputRef.current.value = ""; // No need to reset the file input element
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger click on hidden file input
        }
    };

    const handleInput = (e) => {
        setInputValue(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, window.innerHeight * 0.2)}px`;
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, window.innerHeight * 0.5)}px`;
        }
    }, []);

    const handleKeyPress = (e) => {
        if(!isLoading ){
            if (e.key === 'Enter') {
                e.preventDefault();
                postQuestion();
            }
        }
    };

    return (
        <div className='body'>
            <div className="container" id="container">
                <header>
                    <section className="window--buttons">
                        <div className="window__close"></div>
                        <div className="window__minimize"></div>
                        <div className="window__maximize"></div>
                    </section>
                </header>

                <aside>
                    <div>
                        <input type="text" placeholder="Search"/><br/>
                        <button id="sidebar-btn">Remove unused css</button>
                        <button id="sidebar-btn">Type of functions</button>
                        <button id="sidebar-btn">Tags for kraft Bags</button>
                        <button id="sidebar-btn">Work</button>
                        <button id="sidebar-btn">Play</button>
                        <button id="sidebar-btn">Develop</button>
                        <button id="sidebar-btn">Categories</button>
                        <button id="sidebar-btn">DevOps MCQ preparation guide</button>
                    </div>
                    <div className="profile">
                        <img src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg"
                             alt="Profile Pic" className="profile--pic"/>
                        <h1>Jimmy Donaldson</h1>
                    </div>
                </aside>
                <div className="content">
                    <section className="updates">
                        <h1>Prompt Name</h1>
                        <div className="update update-1">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`message ${msg.type === 'user' ? 'user-message' : 'response-message'}`}
                                >
                                    <div className="updt-left">
                                        {msg.type === 'response' && (
                                            <img
                                                src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg"
                                                alt="Profile Pic"/>
                                        )}
                                        {msg.type === 'user' ? (
                                            <p>{msg.text}</p>
                                        ) : (
                                            <div className="analysis-container">
                                                <Marked>{msg.text}</Marked>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}


                            {isLoading && (
                                <>
                                    <div
                                        className="message response-message"
                                    >
                                        <div className="updt-left">
                                            <img
                                                src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg"
                                                alt="Profile Pic"/>
                                            <div className="analysis-container">
                                                <div className="wait">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </section>
                    <section className="trending">
                        <h1>Chat</h1>
                        <div className="grid">
                            <span className="grid__app">
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{display: 'none'}} // Hide the file input
                                />
                                <button onClick={handleButtonClick}>
                                    <img src="https://img.icons8.com/?size=100&id=86444&format=png&color=000000"
                                         alt="Upload Icon"/>
                                </button>
                                <textarea
                                    ref={textareaRef}
                                    placeholder="Search"
                                    onInput={handleInput}
                                    onKeyPress={handleKeyPress}
                                    style={{overflowY: 'auto'}}
                                    value={inputValue}
                                ></textarea>
                                <button
                                    disabled={isLoading}
                                    onClick={() => postQuestion()}>
                                    {isLoading ?
                                        <div className="loader">
                                            <div className="bar1"></div>
                                            <div className="bar2"></div>
                                            <div className="bar3"></div>
                                            <div className="bar4"></div>
                                            <div className="bar5"></div>
                                            <div className="bar6"></div>
                                            <div className="bar7"></div>
                                            <div className="bar8"></div>
                                            <div className="bar9"></div>
                                            <div className="bar10"></div>
                                            <div className="bar11"></div>
                                            <div className="bar12"></div>
                                        </div> :
                                        <img src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
                                             alt="Send Icon"/>
                                    }
                                </button>
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Main;
