
import './styles/styles.css';
import React from 'react';

const App = () => {
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
            <input type="text" placeholder="Search" /><br />

            <button className="active" id="sidebar-btn">Discover</button>
            <button id="sidebar-btn">Arcade</button>
            <button id="sidebar-btn">Create</button>
            <button id="sidebar-btn">Work</button>
            <button id="sidebar-btn">Play</button>
            <button id="sidebar-btn">Develop</button>
            <button id="sidebar-btn">Categories</button>
            <button id="sidebar-btn">Updates</button>
          </div>

          <div className="profile">
            <img src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e.jpg" alt="Profile Pic" className="profile--pic" />
            <h1>Jimmy Donaldson</h1>
          </div>
        </aside>

        <div className="content">
          <div className="ideas">
            <div className="idea">
              <p>MASTER YOUR MAC</p>
              <h1>Make a great<br />handoff</h1>
              <p>Work seamlessly across devices</p>
            </div>
          </div>

          <section className="updates">
            <h1>Updates</h1>

            <div className="update update-1">
              <div className="updt-left">
                <img src="https://img.icons8.com/color/452/microsoft-powerpoint-2019.png" alt="powerpoint icon" />
                <h1>Microsoft Powerpoint</h1>
              </div>
              <div className="buttons">
                <a href="https://bit.ly/3gdGvT8" target="_warning">
                  <button>Update</button>
                </a>
              </div>
            </div>
          </section>

          <section className="trending">
            <h1>Chat</h1>
            <div className="grid">
              <span className="grid__app">
                <h1>Kindle</h1>
                <button>GET</button>
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>

  );
};

export default App