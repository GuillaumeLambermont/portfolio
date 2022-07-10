import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div>
            logo
          </div>
          <div className="Menu">
            <ol>
              <li>
                <a href="/about">01. About</a>
              </li>
              <li>
              <a href="/experience">02. Experience</a>
              </li>
              <li>
              <a href="/portfolio">03. Portfolio</a>
              </li>
              <li>
              <a href="/contact">04. Contact</a>
              </li>
              <div>
              <a href="/about">Resume</a>
              </div>
            </ol>
          </div>
        </nav>
      </header>
      <body>
        <div className="Title">
          <h4>Hi, my name is</h4>
          <h1><strong>Guillaume Lambermont.</strong></h1>
          <h2>I build things for the web.</h2>
        </div>
      </body>
    </div>
  );
}

export default App;
