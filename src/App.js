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
          <small>Coded by <a href="http://www.linkedin.com/in/kendra-lambillon/" >Kendra Lambillon</a> with the <a href="https://github.com/KendraLambillon/dictionary-React" >Open-sourced on Github</a> and <a href="https://dazzling-granita-4b5c7e.netlify.app" >hosted on Netlify</a>.</small>
        </footer>
      </div>
    </div>
  );
}


