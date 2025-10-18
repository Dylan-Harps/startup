import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './quiz.css';

export function Quiz() {
  return (
    <main className="container-fluid bg-secondary text-center" style="justify-content: flex-start">
      <div className="quiz-progress">
        <p>Question 1/5 (20%)</p>
        <div className="progress" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="5" style="width: 75%">
          <div className="progress-bar progress-bar-striped" style="width: 20%">20%</div>
        </div>
      </div>

      <div className="instruction">Fill in the blank:</div>
      <div className="question">Yo ____ mejorar mi español.</div>
      <div className="answer-options">
        <button className="btn btn-outline-primary option">Option 1</button>
        <button className="btn btn-outline-primary option">Option 2</button>
        <button className="btn btn-outline-primary option">Option 3</button>
        <button className="btn btn-outline-primary option">Option 4</button>
      </div>
      <button className="btn btn-primary confirm-answer">Confirm Answer</button>
    </main>
  );
}