import logo from './img/book.jpg';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by <a href="http://www.linkedin.com/in/kendra-lambillon/" target="_blank">Kendra Lambillon</a> with the <a href="https://github.com/KendraLambillon/dictionary-React" target="_blank">Open-sourced on Github</a> and <a href="https://rococo-sable-51a915.netlify.app" target="_blank">hosted on Netlify</a>.</small>
        </footer>
      </div>
    </div>
  );
}


