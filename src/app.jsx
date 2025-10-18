import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body">
      <header className="container-fluid">
        <nav className="navbar fixed-top">
            <div className="navbar-brand">
                GrowLang
            </div>
            <menu className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="index.html">
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="garden.html">
                    Garden
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="quiz.html">
                    Quiz
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="about.html">
                    About
                </a>
                </li>
            </menu>
        </nav>
      </header>

      <main>App components go here</main>

        <footer className="bg-dark text-white-50">
            <div className="container-fluid">
            <span className="text-reset">Dylan Harps</span>
            <a className="text-reset" href="https://github.com/Dylan-Harps/startup">
                GitHub
            </a>
            </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </div>
  );
}