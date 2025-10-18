import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Garden } from './garden/garden';
import { Quiz } from './quiz/quiz';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
        <div className="body">
            <header className="container-fluid">
                <nav className="navbar fixed-top">
                    <div className="navbar-brand">
                        GrowLang
                    </div>
                    <menu className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="">
                            Home
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="garden">
                            Garden
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="quiz">
                            Quiz
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="about">
                            About
                        </NavLink>
                        </li>
                    </menu>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/garden' element={<Garden />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

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
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}