import { Fragment, useState } from 'react';
import { ToggleDN } from './components/ToggleDN'
import { Footer } from './components/Footer'
import { ThemeBW } from './components/ThemeBW';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <Fragment>
      <ThemeBW.Provider value={{theme, setTheme}}>
      <div className={["gridContainer", `gridContainer-${theme}`].join(' ')}>
        <div className={["description", `description-${theme}`].join(' ')}>
          <p>
            Page under&nbsp;
            <code className="code">construction</code>
          </p>
        </div>
        <ToggleDN/>
        <div className="greetHead">
          <div className="title1">Desarrollador Web Frontend</div>
          <div className="name">Marlon Vargas</div>
        </div>
        <div className="greetSpeech">
          <div className="title1">Bienvenido a mi portafolio</div>
          <div>Creando sitios web que muestren al mundo las ideas que deseas potenciar.</div>
        </div>

        <div className="projectsCards">
          <a
            href="/#"
            className={["card", `card-${theme}`].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Project1 <span>-&gt;</span>
            </h2>
            <p>Lorem ipsum</p>
          </a>

          <a
            href="/#"
            className={["card", `card-${theme}`].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Project2 <span>-&gt;</span>
            </h2>
            <p>Sit amet, consectetur adipiscing elit.</p>
          </a>

          <a
            href="/#"
            className={["card", `card-${theme}`].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Project3 <span>-&gt;</span>
            </h2>
            <p>Nulla congue porta velit</p>
          </a>

          <a
            href="/#"
            className={["card", `card-${theme}`].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Project4 <span>-&gt;</span>
            </h2>
            <p>Faucibus dignissim neque interdum scelerisque</p>
          </a>

        </div>
      </div>
      <Footer />
      </ThemeBW.Provider>
    </Fragment>
  );
}

export default App;
