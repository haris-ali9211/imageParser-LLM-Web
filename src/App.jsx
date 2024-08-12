import './styles/styles.css';
import React, {useRef, useEffect, useState} from 'react';

const App = () => {
    const textareaRef = useRef(null);
    const [zIndex, setZIndex] = useState(1);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, []); // Set initial height when component mounts

    const handleInput = () => {
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

    return (<div className='body'>
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
                    <h1>Prompt Name </h1>

                    <div className="update update-1">
                        {/*<div className="updt-left">*/}
                        {/*  <img src="https://img.icons8.com/color/452/microsoft-powerpoint-2019.png" alt="powerpoint icon" />*/}
                        {/*  <h1>Microsoft Powerpoint</h1>*/}
                        {/*</div>*/}
                        {/*<div className="buttons">*/}
                        {/*  <a href="https://bit.ly/3gdGvT8" target="_warning">*/}
                        {/*    <button>Update</button>*/}
                        {/*  </a>*/}
                        {/*</div>*/}
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
            <button>              <img src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
                                       alt="powerpoint icon"/>
</button>
        </span>
                    </div>
                </section>


            </div>
        </div>
    </div>);
};

export default App;

