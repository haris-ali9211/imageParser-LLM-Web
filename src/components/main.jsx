import '../styles/styles.css';
import {useRef, useEffect, useState} from 'react';
import {useImageAnalyzerContext} from "../context/context.jsx";
import iSImage from "../assets/is.jpg";
import { marked } from 'marked';  // Import the marked package

const Main = () => {
    const {questionAsk, isLoading} = useImageAnalyzerContext();

    const [messages, setMessages] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [htmlAnswer, setHtmlAnswer] = useState(""); // New state for HTML answer

    const postQuestion = async () => {
        console.log("clicked", inputValue.toString());
        setMessages([...messages, inputValue]);
        const response = await fetch(iSImage);
        const blob = await response.blob();
        const file = new File([blob], "is.jpg", {type: blob.type});

        // Create FormData and append the file and question
        const formData = new FormData();
        formData.append('file', file);
        formData.append('question', `${inputValue.toString()}`);

        const responseAnswer = await questionAsk(formData);
        setAnswer([...answer, responseAnswer.answer]);

        // Convert responseAnswer.answer to HTML using marked
        const htmlFormattedAnswer = marked(responseAnswer.answer);
        setHtmlAnswer(htmlFormattedAnswer);

        setInputValue("");
        console.log(responseAnswer.answer);
    };

    const textareaRef = useRef(null);
    const [zIndex, setZIndex] = useState(1);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, []); // Set initial height when component mounts

    const handleInput = (e) => {
        setInputValue(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

            if (textareaRef.current.scrollHeight > 100) {
                setZIndex(10);
            } else {
                setZIndex(1);
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
                            {messages.map((meg, index) => (
                                <div className="message user-message" key={index}>
                                    <div className="updt-left">
                                        <p>{meg}</p>
                                        <h1></h1>
                                        <img src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg"
                                             alt="Profile Pic"/>
                                    </div>
                                </div>
                            ))}

                            {answer.map((ans, index) => (
                                <div key={index} className="message response-message">
                                    <div className="updt-left">
                                        <img src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg"
                                             alt="Profile Pic"/>
                                        <h1></h1>
                                        <div dangerouslySetInnerHTML={{__html: htmlAnswer}} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="trending">
                        <h1>Chat</h1>
                        <div className="grid">
            <span className="grid__app">
                <textarea
                    ref={textareaRef}
                    placeholder="Search"
                    onInput={handleInput}
                    style={{zIndex: zIndex}}
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
                        <img src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000" alt="Send Icon"/>
                    }

                </button>
            </span>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
}

export default Main;
