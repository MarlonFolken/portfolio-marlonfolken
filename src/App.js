import { Fragment } from 'react';
import { ToggleDN } from './components/ToggleDN'
import { Footer } from './components/Footer'
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="gridContainer">
        <div className="description">
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
            className="card"
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
            className="card"
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
            className="card"
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
            className="card"
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
    </Fragment>
  );
}

export default App;
