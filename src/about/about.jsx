import React from 'react';
import './about.css';

export function About() {
  return (
    <main className="container-fluid bg-secondary text-center">    
        <h1>About</h1>
        <p>
            This is a website that helps you learn languages by growing a garden!
        </p>

        <div id="picture" className="picture-box"><img width="400px" src="login-screen.png" alt="login placeholder" /></div>
        <div id="picture" className="picture-box"><img width="400px" src="garden-screen.png" alt="garden placeholder" /></div>
        <div id="picture" className="picture-box"><img width="400px" src="lesson-screen.png" alt="quiz placeholder" /></div>

    </main>
  );
}